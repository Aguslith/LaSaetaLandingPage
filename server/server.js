const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aca_leadingpage';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory fallback leads store in case MongoDB is not locally running
const fallbackLeads = [];
let isDbConnected = false;

// Mongoose Lead Schema
const leadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  vehicleType: { type: String, default: 'auto' },
  province: { type: String, default: 'CABA' },
  vehicleYear: { type: Number },
  promoPackage: { type: String, default: '50% OFF + $48.000 Combustible' },
  createdAt: { type: Date, default: Date.now }
});

let LeadModel;
try {
  LeadModel = mongoose.model('Lead', leadSchema);
} catch (e) {
  LeadModel = mongoose.models.Lead;
}

// Connect to MongoDB with graceful error handling
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 2500
}).then(() => {
  isDbConnected = true;
  console.log('✅ Connected to MongoDB at:', MONGODB_URI);
}).catch((err) => {
  isDbConnected = false;
  console.warn('⚠️ MongoDB connection note: Local database not reachable. Active fallback: In-memory store enabled.');
});

// ==========================================
// API ROUTES
// ==========================================

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'ACA Leadingpage API',
    database: isDbConnected ? 'MongoDB (Connected)' : 'In-Memory Fallback (Active)',
    timestamp: new Date().toISOString()
  });
});

// Live Stats Endpoint
app.get('/api/stats', (req, res) => {
  res.json({
    annualAssistance: 1000000,
    operationalYears: 120,
    nationalCoveragePct: 100,
    partnerBusinesses: 1000,
    activeFuelPromo: 48000,
    discountMonths50: 3,
    discountMonths25: 6
  });
});

// Register Lead / Membership Request
app.post('/api/leads', async (req, res) => {
  try {
    const { fullName, phone, email, vehicleType, province, vehicleYear, promoPackage } = req.body;

    if (!fullName || !phone || !email) {
      return res.status(400).json({
        success: false,
        error: 'Los campos Nombre, Teléfono y Email son obligatorios.'
      });
    }

    const leadData = {
      fullName,
      phone,
      email,
      vehicleType: vehicleType || 'auto',
      province: province || 'CABA',
      vehicleYear: vehicleYear ? parseInt(vehicleYear) : null,
      promoPackage: promoPackage || '50% OFF + $48.000 Combustible',
      createdAt: new Date()
    };

    let savedLead;
    if (isDbConnected && LeadModel) {
      const doc = new LeadModel(leadData);
      savedLead = await doc.save();
    } else {
      leadData.id = 'lead_' + Date.now();
      fallbackLeads.push(leadData);
      savedLead = leadData;
    }

    console.log('📥 Nuevo lead registrado:', savedLead.fullName, savedLead.phone);

    return res.status(201).json({
      success: true,
      message: '¡Solicitud recibida con éxito! Un asesor oficial del ACA te contactará a la brevedad.',
      lead: savedLead
    });
  } catch (err) {
    console.error('Error al guardar lead:', err);
    return res.status(500).json({
      success: false,
      error: 'Error interno al procesar la solicitud.'
    });
  }
});

// List Leads (Admin / Review)
app.get('/api/leads', async (req, res) => {
  try {
    if (isDbConnected && LeadModel) {
      const leads = await LeadModel.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, count: leads.length, leads });
    } else {
      return res.json({ success: true, count: fallbackLeads.length, leads: fallbackLeads });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Server-side Savings Calculator endpoint
app.post('/api/calculate-savings', (req, res) => {
  const { kmMonthly = 1200, useYpf = true, useHotels = true, useTow = true, usePaperwork = true } = req.body;

  let annualSavings = 48000; // Gift base

  if (useYpf) {
    const litersPerMonth = (kmMonthly / 100) * 9;
    const avgFuelPrice = 1150;
    const fuelDiscountPerMonth = litersPerMonth * avgFuelPrice * 0.05;
    annualSavings += fuelDiscountPerMonth * 12;
  }

  if (useHotels) annualSavings += 95000;
  if (useTow) annualSavings += 85000;
  if (usePaperwork) annualSavings += 32000;

  res.json({
    annualSavings: Math.round(annualSavings),
    formatted: '$' + Math.round(annualSavings).toLocaleString('es-AR')
  });
});

// Serve Vite Production Build if available
const path = require('path');
const fs = require('fs');
const clientDist = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 ACA Backend Server running on http://localhost:${PORT}`);
});

