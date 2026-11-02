import React, { useState } from 'react';
import { Car, Truck, Bike, Check, ArrowRight, MessageCircle, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadWizardForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: 'auto',
    province: 'La Rioja',
    vehicleYear: '',
    planSelected: 'Plan Integral (Auxilio 24/7 y Asistencia)'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setError('Por favor completá todos los campos obligatorios para continuar.');
        return;
      }
    }
    setError('');
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setError('');
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setError(data.error || 'Hubo un error al procesar tu solicitud.');
      }
    } catch (err) {
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="solicitud" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="form-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-950 text-white p-6 sm:p-10 text-center border-b border-slate-800">
            <h2 id="form-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Solicitud de Membresía Oficial ACA
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Completá estos breves pasos y un asesor oficial se comunicará con vos para coordinar tu alta.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            
            {/* Step Wizard Nodes */}
            {!submitted && (
              <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-red-600 dark:text-red-400' : 'text-slate-400'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${step >= 1 ? 'bg-red-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600'}`}>1</span>
                  <span>Datos Básicos</span>
                </div>
                <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-800" />
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-red-600 dark:text-red-400' : 'text-slate-400'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${step >= 2 ? 'bg-red-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600'}`}>2</span>
                  <span>Tu Vehículo</span>
                </div>
                <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-800" />
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 3 ? 'text-red-600 dark:text-red-400' : 'text-slate-400'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${step >= 3 ? 'bg-red-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600'}`}>3</span>
                  <span>Confirmación</span>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-medium text-center">
                {error}
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">Nombre y Apellido *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ej: Martín Rodríguez"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 text-sm font-medium outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">Teléfono / WhatsApp *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej: 11 4567-8900"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 text-sm font-medium outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">Correo Electrónico *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ej: martin@gmail.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 text-sm font-medium outline-none transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">¿Qué vehículo conducís?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Automóvil', value: 'auto', icon: Car },
                          { label: 'Camioneta / SUV', value: 'suv', icon: Truck },
                          { label: 'Motocicleta', value: 'moto', icon: Bike },
                        ].map(v => {
                          const Icon = v.icon;
                          const isSelected = formData.vehicleType === v.value;
                          return (
                            <button
                              key={v.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, vehicleType: v.value })}
                              className={`p-4 rounded-xl border flex flex-col items-center gap-2 text-xs font-bold transition-all ${
                                isSelected
                                  ? 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-600 dark:text-red-400 shadow-sm'
                                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span>{v.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">Provincia de residencia</label>
                        <select
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 text-sm font-medium outline-none"
                        >
                          <option value="La Rioja">La Rioja</option>
                          <option value="Catamarca">Catamarca</option>
                          <option value="Córdoba">Córdoba</option>
                          <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                          <option value="Buenos Aires">Buenos Aires</option>
                          <option value="Santa Fe">Santa Fe</option>
                          <option value="Mendoza">Mendoza</option>
                          <option value="San Juan">San Juan</option>
                          <option value="Tucumán">Tucumán</option>
                          <option value="Salta">Salta</option>
                          <option value="Otras">Otra provincia</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">Año del vehículo (aprox)</label>
                        <input
                          type="number"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          placeholder="Ej: 2021"
                          min="1980"
                          max="2026"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 text-sm font-medium outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
                      <div className="flex items-center gap-2 font-bold mb-2 text-slate-900 dark:text-white">
                        <Shield className="w-5 h-5 text-red-600" />
                        <span>Membresía Seleccionada: {formData.planSelected}</span>
                      </div>
                      <ul className="text-xs sm:text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                        <li>✓ Auxilio mecánico 24/7 sin límite en toda la Argentina</li>
                        <li>✓ Asistencia médica y de viaje para titular y acompañante</li>
                        <li>✓ Red hotelera ACA con tarifas preferenciales exclusivas</li>
                        <li>✓ Descuentos en comercios y gestión ágil de documentación</li>
                      </ul>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                      <input type="checkbox" defaultChecked required className="mt-0.5 rounded text-red-600 focus:ring-red-500" />
                      <span>Acepto ser contactado por un asesor oficial del Automóvil Club Argentino y he leído la Política de Privacidad.</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      &larr; Anterior
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-pulse-red inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-red-glow transition-all"
                    >
                      <span>Siguiente paso</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-pulse-red inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold px-7 py-3 rounded-xl text-sm shadow-red-glow transition-all disabled:opacity-50"
                    >
                      <span>{loading ? 'Procesando...' : 'Confirmar Solicitud'}</span>
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </form>
            ) : (
              /* Success State */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Un asesor oficial del ACA se comunicará con vos en breve para validar tus datos y coordinar el alta de tu membresía.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm"
                  >
                    <span>Ir al alta online inmediata</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/5491145678900?text=Hola!%20Acabo%20de%20solicitar%20mi%20asociacion%20al%20ACA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Hablar por WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-slate-400 mt-6">
              🔒 Tus datos se encuentran 100% protegidos bajo la Ley Nacional de Protección de Datos Personales N° 25.326.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
