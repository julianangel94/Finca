"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { es } from "date-fns/locale";
import { useEffect, useState } from "react";

export default function AvailabilityCalendar() {
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);

  useEffect(() => {
    // Cargar fechas no disponibles desde el archivo JSON
    fetch("/available-dates.json")
      .then((response) => response.json())
      .then((data) => {
        const dates = data.unavailableDates.map((dateStr: string) => new Date(dateStr));
        setUnavailableDates(dates);
      })
      .catch((error) => {
        console.error("Error loading unavailable dates:", error);
        // Fechas por defecto en caso de error
        setUnavailableDates([]);
      });
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 text-center">
        Calendario
      </h3>
      <DayPicker
        mode="single"
        locale={es}
        disabled={[
          { before: new Date() }, // Deshabilitar fechas pasadas
          ...unavailableDates // Deshabilitar fechas no disponibles
        ] as const}
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
