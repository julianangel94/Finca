export default function Footer() {
  return (
    <footer className="bg-footer text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold mb-2">
              Finca Guadalupana
            </h3>
            <p className="text-white/70 max-w-md">
              Tu escape perfecto en la naturaleza. Disfruta de tranquilidad, aire
              puro y momentos inolvidables.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-white/70 text-sm">
            <p>Vereda La Esmeralda, Antioquia, Colombia</p>
            <p>+57 310 000 0000</p>
            <p>info@fincalaesmeralda.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Finca Guadalupana. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
