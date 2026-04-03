import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import ReservationForm from "@/components/ReservationForm";
import MapSection from "@/components/MapSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Amenities />
      <Gallery />
      <Pricing />

      <section
        id="disponibilidad"
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest mb-3 text-sm">
              Reservas
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Consulta disponibilidad y reserva
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Verifica las fechas disponibles y completa tu reserva en pocos pasos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <AvailabilityCalendar />
            <ReservationForm />
          </div>
        </div>
      </section>

      <MapSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
