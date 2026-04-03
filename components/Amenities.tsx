import {
  Waves,
  Flame,
  Trees,
  BedDouble,
  ChefHat,
  Wifi,
  Car,
  Gamepad2,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Piscina",
    description: "Piscina amplia con zona de descanso y vista a los jardines",
  },
  {
    icon: Flame,
    title: "Zona BBQ",
    description: "Parrilla cubierta con todo lo necesario para tus asados",
  },
  {
    icon: Trees,
    title: "Jardines",
    description: "Extensos jardines verdes rodeados de naturaleza",
  },
  {
    icon: BedDouble,
    title: "5 Habitaciones",
    description: "Habitaciones cómodas con capacidad para 15 personas",
  },
  {
    icon: ChefHat,
    title: "Cocina Equipada",
    description: "Cocina completa con electrodomésticos y utensilios",
  },
  {
    icon: Wifi,
    title: "WiFi",
    description: "Conexión a internet de alta velocidad en toda la finca",
  },
  {
    icon: Car,
    title: "Parqueadero",
    description: "Amplio parqueadero privado para varios vehículos",
  },
  {
    icon: Gamepad2,
    title: "Juegos",
    description: "Mesa de billar, juegos de mesa y zona de recreación",
  },
];

export default function Amenities() {
  return (
    <section id="amenidades" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest mb-3 text-sm">
            Nuestras Comodidades
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Disfruta de todas las comodidades para una estancia perfecta
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <amenity.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
