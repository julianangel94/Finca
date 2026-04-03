import { Check } from "lucide-react";

function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const plans = [
  {
    name: "Día",
    price: 850000,
    period: "día",
    features: [
      "Uso de la finca por 1 día",
      "Acceso a piscina",
      "Zona BBQ disponible",
      "Hasta 15 personas",
      "Parqueadero privado",
      "WiFi incluido",
    ],
    popular: false,
  },
  {
    name: "Fin de Semana",
    price: 1400000,
    period: "noche",
    features: [
      "Viernes a domingo",
      "Acceso completo a la finca",
      "Piscina y jardines",
      "Zona BBQ con leña",
      "Hasta 15 personas",
      "5 habitaciones",
      "Cocina equipada",
      "Juegos de mesa y billar",
    ],
    popular: true,
  },
  {
    name: "Semana",
    price: 7500000,
    period: "semana",
    features: [
      "7 noches completas",
      "Descuento especial",
      "Acceso total a la finca",
      "Todas las comodidades",
      "Servicio de limpieza",
      "Hasta 15 personas",
      "Soporte 24/7",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifas" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest mb-3 text-sm">
            Tarifas
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Planes y precios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Elige el plan que mejor se adapte a tu estadía
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-primary text-white shadow-2xl scale-105 border-4 border-accent"
                  : "bg-background border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-bold px-4 py-1 rounded-full">
                  Más popular
                </span>
              )}

              <h3 className={`font-heading text-2xl font-bold mb-2 ${plan.popular ? "" : "text-gray-900"}`}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? "" : "text-primary"}`}>
                  {formatCOP(plan.price)}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? "text-white/80" : "text-gray-500"}`}>
                  / {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={18} className={plan.popular ? "text-accent" : "text-primary"} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#reservar"
                className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent hover:bg-accent-600 text-white"
                    : "bg-primary hover:bg-primary-600 text-white"
                }`}
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
