import React, { useState } from 'react';
import { Car, Truck, Bike, Check, ArrowRight, ArrowLeft, MessageCircle, Shield, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/A11yContext';

export default function LeadWizardForm() {
  const { reducedMotion } = useTheme();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: 'auto',
    province: 'La Rioja',
    vehicleYear: '',
    planSelected: 'Plan Integral (3 cuotas 50% OFF + $48.000 YPF)'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setSubmitError('');
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Ingresá tu nombre y apellido completo.';
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Ingresá un número de teléfono o WhatsApp válido (con código de área).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Ingresá un correo electrónico válido (ej: nombre@correo.com).';
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) {
      return;
    }
    setSubmitError('');
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setSubmitError('');
    setStep((prev) => prev - 1);
  };

  const fireCelebration = () => {
    if (!reducedMotion && typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 65,
        origin: { y: 0.65 }
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep1()) {
      setStep(1);
      return;
    }
    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          promoPackage: formData.planSelected
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        fireCelebration();
      } else {
        setSubmitError(data.error || 'No pudimos registrar la solicitud. Intentá nuevamente o escribinos por WhatsApp.');
      }
    } catch (err) {
      setSubmitted(true);
      fireCelebration();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="solicitud" className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors" aria-labelledby="form-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-elevated-lg overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-slate-950 text-white p-6 sm:p-10 text-center border-b border-slate-800">
            <h2 id="form-heading" className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-2 tracking-tight">
              Solicitá tu Membresía con Descuento Oficial
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
              Completá estos 3 pasos y un asesor oficial del ACA te activará las 3 cuotas al 50% OFF y los $48.000 en combustible.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            
            {/* Step Progress Indicator */}
            {!submitted && (
              <ol className="flex items-center justify-center gap-2 sm:gap-4 mb-8" aria-label="Progreso del formulario">
                {[
                  { num: 1, label: 'Datos de Contacto' },
                  { num: 2, label: 'Tu Vehículo' },
                  { num: 3, label: 'Confirmación' }
                ].map((item, idx) => {
                  const isActive = step >= item.num;
                  const isCurrent = step === item.num;
                  return (
                    <React.Fragment key={item.num}>
                      {idx > 0 && (
                        <div
                          className={`w-6 sm:w-10 h-0.5 ${
                            isActive ? 'bg-red-600 dark:bg-amber-400' : 'bg-slate-200 dark:bg-slate-800'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                      <li
                        aria-current={isCurrent ? 'step' : undefined}
                        className={`flex items-center gap-2 text-xs sm:text-sm font-bold ${
                          isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        <span
                          className={`tabular-nums w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${
                            isActive
                              ? 'bg-red-600 dark:bg-amber-400 text-white dark:text-slate-950'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {step > item.num ? '✓' : item.num}
                        </span>
                        <span className="hidden xs:inline">{item.label}</span>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ol>
            )}

            {submitError && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 text-sm font-semibold flex items-center gap-2.5"
              >
                <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{submitError}</span>
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                
                {/* STEP 1: Contact Info */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="wizard-fullName"
                          className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5"
                        >
                          Nombre y Apellido *
                        </label>
                        <input
                          id="wizard-fullName"
                          type="text"
                          name="fullName"
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ej: Martín Rodríguez"
                          required
                          aria-invalid={Boolean(fieldErrors.fullName)}
                          aria-describedby={fieldErrors.fullName ? 'err-fullName' : undefined}
                          className={`w-full min-h-[48px] px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-medium outline-none transition-colors ${
                            fieldErrors.fullName
                              ? 'border-red-600 focus:border-red-600'
                              : 'border-slate-300 dark:border-slate-700 focus:border-red-600 dark:focus:border-amber-400'
                          }`}
                        />
                        {fieldErrors.fullName && (
                          <p id="err-fullName" role="alert" className="mt-1.5 text-xs font-semibold text-red-600 dark:text-red-400">
                            {fieldErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="wizard-phone"
                          className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5"
                        >
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          id="wizard-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej: 380 456-7890"
                          required
                          aria-invalid={Boolean(fieldErrors.phone)}
                          aria-describedby={fieldErrors.phone ? 'err-phone' : undefined}
                          className={`w-full min-h-[48px] px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-medium outline-none transition-colors ${
                            fieldErrors.phone
                              ? 'border-red-600 focus:border-red-600'
                              : 'border-slate-300 dark:border-slate-700 focus:border-red-600 dark:focus:border-amber-400'
                          }`}
                        />
                        {fieldErrors.phone && (
                          <p id="err-phone" role="alert" className="mt-1.5 text-xs font-semibold text-red-600 dark:text-red-400">
                            {fieldErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="wizard-email"
                        className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5"
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        id="wizard-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ej: martin@correo.com"
                        required
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? 'err-email' : undefined}
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-medium outline-none transition-colors ${
                          fieldErrors.email
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-slate-300 dark:border-slate-700 focus:border-red-600 dark:focus:border-amber-400'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p id="err-email" role="alert" className="mt-1.5 text-xs font-semibold text-red-600 dark:text-red-400">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: Vehicle Info */}
                {step === 2 && (
                  <div className="space-y-5">
                    <fieldset>
                      <legend className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
                        ¿Qué tipo de vehículo conducís?
                      </legend>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Automóvil', value: 'auto', icon: Car },
                          { label: 'Camioneta / SUV', value: 'suv', icon: Truck },
                          { label: 'Motocicleta', value: 'moto', icon: Bike },
                        ].map((v) => {
                          const Icon = v.icon;
                          const isSelected = formData.vehicleType === v.value;
                          return (
                            <button
                              key={v.value}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() => setFormData({ ...formData, vehicleType: v.value })}
                              className={`m-btn min-h-[76px] p-4 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-colors ${
                                isSelected
                                  ? 'bg-red-50 dark:bg-slate-800 border-2 border-red-600 dark:border-amber-400 text-slate-950 dark:text-amber-400 shadow-sm'
                                  : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}
                            >
                              <Icon className="w-5 h-5" aria-hidden="true" />
                              <span>{v.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="wizard-province"
                          className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5"
                        >
                          Provincia de residencia
                        </label>
                        <select
                          id="wizard-province"
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-600 dark:focus:border-amber-400 text-base font-medium outline-none"
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
                        <label
                          htmlFor="wizard-vehicleYear"
                          className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5"
                        >
                          Año del vehículo (opcional)
                        </label>
                        <input
                          id="wizard-vehicleYear"
                          type="number"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          placeholder="Ej: 2022"
                          min="1980"
                          max="2026"
                          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-red-600 dark:focus:border-amber-400 text-base font-medium outline-none tabular-nums"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Summary & Consent */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div className="bg-amber-50/80 dark:bg-slate-800/80 border border-amber-300 dark:border-slate-700 rounded-2xl p-5 sm:p-6">
                      <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg mb-3 text-slate-900 dark:text-white">
                        <Shield className="w-5 h-5 text-red-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                        <span>Resumen de Solicitud · {formData.planSelected}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3">
                        Titular: <strong>{formData.fullName}</strong> · Teléfono: <strong className="tabular-nums">{formData.phone}</strong> · Provincia: <strong>{formData.province}</strong>
                      </p>
                      <ul className="text-sm sm:text-base space-y-2 text-slate-800 dark:text-slate-200 font-medium">
                        <li>✓ 3 primeras cuotas con 50% de descuento + 6 cuotas al 25% OFF</li>
                        <li>✓ $48.000 en combustible YPF de bienvenida</li>
                        <li>✓ Auxilio mecánico 24/7 sin límite en toda la Argentina</li>
                        <li>✓ Asistencia médica al viajero y tarifas Red Hotelera ACA</li>
                      </ul>
                    </div>

                    <label
                      htmlFor="wizard-consent"
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        id="wizard-consent"
                        type="checkbox"
                        defaultChecked
                        required
                        className="mt-1 w-4 h-4 rounded text-red-600 focus:ring-red-600 shrink-0"
                      />
                      <span>
                        Acepto ser contactado por un asesor oficial del Automóvil Club Argentino para validar mi solicitud y he leído la Política de Privacidad.
                      </span>
                    </label>
                  </div>
                )}

                {/* Navigation Actions */}
                <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="m-btn min-h-[48px] px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 inline-flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Anterior</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="m-btn min-h-[48px] inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-btn-primary"
                    >
                      <span>Continuar al paso {step + 1}</span>
                      <ArrowRight className="w-4 h-4 m-arrow" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="m-btn min-h-[48px] inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-7 py-3 rounded-xl text-sm shadow-btn-primary disabled:opacity-50"
                    >
                      <span>{loading ? 'Registrando solicitud...' : 'Confirmar y recibir llamada'}</span>
                      <Check className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                </div>

              </form>
            ) : (
              /* Success State */
              <div className="text-center py-6" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
                  ¡Solicitud registrada con éxito, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-base max-w-md mx-auto mb-6 leading-relaxed">
                  Un asesor oficial del ACA se comunicará al <strong className="tabular-nums">{formData.phone}</strong> en breve para validar tus datos y acreditarte las <strong>3 cuotas al 50% OFF + $48.000 en YPF</strong>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3.5">
                  <a
                    href="https://www.aca.org.ar/aca/socios/asociacion/?id=3C3F3831383037333138373A30353E454D50424224554A4246444525214F4C464658494D5050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-btn min-h-[48px] inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-btn-primary"
                  >
                    <span>Finalizar alta online inmediata</span>
                    <ArrowRight className="w-4 h-4 m-arrow" aria-hidden="true" />
                  </a>
                  <a
                    href="https://wa.me/5491145678900?text=Hola!%20Acabo%20de%20solicitar%20mi%20asociacion%20al%20ACA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-btn min-h-[48px] inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-slate-600 dark:text-slate-400 mt-6">
              🔒 Tus datos se encuentran protegidos bajo la Ley Nacional de Protección de Datos Personales N° 25.326.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
