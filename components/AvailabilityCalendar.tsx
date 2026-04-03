"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { es } from "date-fns/locale";

export default function AvailabilityCalendar() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 text-center">
        Calendario
      </h3>
      <DayPicker
        mode="single"
        locale={es}
        disabled={[{ before: new Date() }]}
        showOutsideDays
        className="mx-auto"
      />
      <p className="text-center text-gray-500 text-sm mt-4">
        Las fechas marcadas en rojo no están disponibles.
        <br />
        Contáctanos por WhatsApp para confirmar disponibilidad.
      </p>
    </div>
  );
}
