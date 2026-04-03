"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const reservationSchema = z.object({
  full_name: z.string().min(2, "El nombre es requerido"),
  phone: z.string().min(7, "El teléfono es requerido"),
  check_in: z.string().min(1, "La fecha de entrada es requerida"),
  check_out: z.string().min(1, "La fecha de salida es requerida"),
  guests: z.coerce.number().min(1, "Mínimo 1 huésped").max(15, "Máximo 15"),
  plan: z.enum(["day", "weekend", "week"], {
    required_error: "Selecciona un plan",
  }),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const planLabels: Record<string, string> = {
  day: "Día ($850.000)",
  weekend: "Fin de semana ($1.400.000/noche)",
  week: "Semana ($7.500.000)",
};

export default function ReservationForm() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573100000000";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = (data: ReservationFormData) => {
    const message = [
      `🌿 *Nueva reserva - Finca Guadalupana*`,
      ``,
      `👤 *Nombre:* ${data.full_name}`,
      `📱 *Teléfono:* ${data.phone}`,
      `📅 *Entrada:* ${data.check_in}`,
      `📅 *Salida:* ${data.check_out}`,
      `👥 *Huéspedes:* ${data.guests}`,
      `📋 *Plan:* ${planLabels[data.plan] || data.plan}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div id="reservar" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2 text-center">
        Reservar ahora
      </h3>
      <p className="text-gray-500 text-center mb-6 text-sm">
        Tus datos se enviarán por WhatsApp
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <input
            {...register("full_name")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="Tu nombre"
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="+57 300 000 0000"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha entrada
            </label>
            <input
              type="date"
              {...register("check_in")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            />
            {errors.check_in && (
              <p className="text-red-500 text-sm mt-1">{errors.check_in.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha salida
            </label>
            <input
              type="date"
              {...register("check_out")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            />
            {errors.check_out && (
              <p className="text-red-500 text-sm mt-1">{errors.check_out.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Huéspedes
            </label>
            <input
              type="number"
              min="1"
              max="15"
              {...register("guests")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="1-15"
            />
            {errors.guests && (
              <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plan
            </label>
            <select
              {...register("plan")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
            >
              <option value="">Seleccionar</option>
              <option value="day">Día</option>
              <option value="weekend">Fin de semana</option>
              <option value="week">Semana</option>
            </select>
            {errors.plan && (
              <p className="text-red-500 text-sm mt-1">{errors.plan.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  );
}
