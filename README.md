# 🚗 ACA Leadingpage — Fullstack MERN Application (Vite + React)
> **Automóvil Club Argentino (ACA)** · Campaña Oficial de Membresía con Beneficios Exclusivos  
> Diseñada bajo la arquitectura **MERN Stack** (MongoDB, Express, React 18, Node.js + Vite) con estándares internacionales de diseño, accesibilidad WCAG 2.1 AA/AAA y optimización de conversión (CRO).

---

## 🏗️ 1. Arquitectura MERN Stack + Vite

```
LeadingpageAca/
├── package.json             # Orquestador raíz (scripts concurrentes para frontend y backend)
├── README.md                # Documentación técnica completa
├── client/                  # Frontend SPA de alto rendimiento con Vite + React
│   ├── index.html           # Documento HTML con fuentes y metadatos SEO
│   ├── vite.config.js       # Configuración Vite con proxy '/api' a localhost:5000
│   ├── tailwind.config.js   # Tokens de diseño oficiales ACA (Amarillo #FEC526, Navy #0F172A)
│   ├── postcss.config.js    # PostCSS con Tailwind y Autoprefixer
│   ├── dist/                # Build de producción compilado en milisegundos
│   ├── public/              # Archivos estáticos
│   │   └── assets/          # 22 imágenes, SVGs y logos oficiales de la campaña ACA
│   └── src/
│       ├── main.jsx         # Punto de entrada React 18
│       ├── App.jsx          # Ensamblador maestro de la experiencia
│       ├── index.css        # Tailwind directives, A11y high contrast y animaciones
│       ├── context/
│       │   └── A11yContext.jsx # Contexto global de Accesibilidad (Alto Contraste, Font Size, Motion)
│       └── components/
│           ├── TopBanner.jsx        # Barra superior de urgencia con countdown en vivo
│           ├── Navbar.jsx           # Header sticky con glassmorphism, menú móvil y drawer A11y
│           ├── Hero.jsx             # Tarjeta con física 3D reactiva y copy de alta conversión
│           ├── StatsBanner.jsx      # Contadores KPIs conectados a la API en vivo
│           ├── PricingSection.jsx   # Tarjeta de promo ($37.550/mes) y tabla comparativa
│           ├── SavingsCalculator.jsx# Simulador interactivo con slider y cálculo en backend
│           ├── BenefitsGrid.jsx     # Grilla con filtro por categorías y Framer Motion
│           ├── CoverageMap.jsx      # Cobertura federal y bases operativas argentinas
│           ├── Testimonials.jsx     # Reseñas verificadas de Google con 5 estrellas
│           ├── LeadWizardForm.jsx   # Formulario express en 3 pasos conectado a POST /api/leads con confeti
│           ├── FaqAccordion.jsx     # Acordeón accesible con animaciones de altura fluida
│           ├── FinalCta.jsx         # Banner visual de cierre con socio-aca-equipo.png
│           ├── Footer.jsx           # Pie institucional con descargo legal obligatorio SSN
│           ├── PrivacyModal.jsx     # Modal con los 9 artículos de la Política de Privacidad ACA
│           └── FloatingActions.jsx  # Botón flotante directo de WhatsApp y Back-to-Top
└── server/                  # Backend REST API con Node.js & Express
    ├── package.json         # Dependencias: Express, CORS, Mongoose, Dotenv
    └── server.js            # Servidor API con endpoints REST, MongoDB y fallback resiliente
```

---

## ⚡ 2. Librerías y Tecnologías Seleccionadas

### 🎨 Frontend:
- **Vite 5**: Bundler ultrarrápido con HMR (Hot Module Replacement) instantáneo.
- **React 18**: Renderizado declarativo por componentes.
- **Tailwind CSS**: Utility-first CSS con tokens de color corporativos (`aca-yellow: #FEC526`).
- **Framer Motion**: Librería estándar en la industria para kinetic typography, física de resortes, transiciones escalonadas (*stagger*) y animaciones de layout (`layout` prop en el filtro).
- **Lucide React**: Iconografía vectorial limpia, accesible y moderna.
- **Canvas Confetti**: Celebración visual inmediata al enviar el formulario de asociación.

### 🛠️ Backend:
- **Node.js & Express.js**: Servidor RESTful optimizado con CORS y parseo de JSON.
- **MongoDB & Mongoose**: Esquema `Lead` para captura estructurada de prospectos.
- **Resilient Fallback Engine**: Si no tienes MongoDB local iniciado, el servidor activa automáticamente un almacén en memoria para que la aplicación **nunca falle** y puedas probarla al 100%.

---

## 🚀 3. ¿Cómo ejecutar el proyecto?

Desde la carpeta raíz del proyecto (`C:\Users\herre\Desktop\LeadingpageAca`), tienes los siguientes comandos listos:

### Modo Desarrollo (Frontend + Backend juntos):
```powershell
npm run dev
```
> Esto iniciará concurrentemente:
> - **Backend API:** `http://localhost:5000`
> - **Frontend Vite:** `http://localhost:5173` (con proxy automático `/api` hacia el backend).

### Modo Servidor de Producción (Fullstack en 1 solo puerto):
```powershell
npm start
```
> El servidor Express servirá la API y la build optimizada de React en `http://localhost:5000`.

### Comandos individuales:
- `npm run dev:client`: Inicia solo el frontend con Vite.
- `npm run dev:server`: Inicia solo el backend Express con hot-reload (`--watch`).
- `npm run build`: Compila el bundle de producción de Vite en `client/dist/`.

---

## 📡 4. Endpoints de la API Backend

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/health` | Estado del servidor y estado de la conexión a MongoDB |
| `GET` | `/api/stats` | Estadísticas institucionales en tiempo real (+1M auxilios, 120 años) |
| `POST` | `/api/leads` | Registra una nueva solicitud de membresía desde el formulario |
| `GET` | `/api/leads` | Consulta las solicitudes recibidas (Panel de control/Revisión) |
| `POST` | `/api/calculate-savings` | Valida y calcula el ahorro anual del conductor |

---

## ♿ 5. Accesibilidad Universal (WCAG 2.1 AA/AAA)
El usuario puede interactuar con el botón flotante de accesibilidad en el Navbar para:
1. **Modo Alto Contraste**: Invierte los contrastes a negro puro y dorado para usuarios con baja visión.
2. **Tamaño de Letra Dinámico**: Escala la tipografía al 118% sin romper el diseño.
3. **Pausar Animaciones**: Respeta la preferencia de reducción de movimiento.
4. **Navegación por Teclado**: Foco visible claro (`outline: 3px solid #FEC526`) y cierre de modales con la tecla `Escape`.
