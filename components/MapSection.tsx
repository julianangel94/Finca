import { MapPin, Phone, Clock } from "lucide-react";

export default function MapSection() {
  return (
    <section id="ubicacion" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest mb-3 text-sm">
            Ubicación
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Cómo llegar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe
              src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976!2d-75.5!3d6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJOIDc1wrAzMCcwMC4wIlc!5e0!3m2!1ses!2sco!4v1"}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Finca Guadalupana"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    Vereda La Esmeralda, Antioquia, Colombia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">
                    Distancia desde Medellín
                  </h3>
                  <p className="text-gray-600">
                    Aproximadamente 2 horas en carro por carretera pavimentada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">
                    Contacto
                  </h3>
                  <p className="text-gray-600">
                    +57 310 000 0000
                  </p>
                  <p className="text-gray-600">
                    info@fincaguadalupana.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                Indicaciones
              </h3>
              <ol className="text-gray-600 space-y-2 text-sm list-decimal list-inside">
                <li>Toma la salida hacia el oriente antioqueño</li>
                <li>Sigue la vía principal durante 1 hora y 45 minutos</li>
                <li>Gira a la derecha en el desvío La Esmeralda</li>
                <li>Sigue 15 minutos más hasta la entrada de la finca</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
