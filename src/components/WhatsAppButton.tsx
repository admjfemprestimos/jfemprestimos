import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-4 md:right-8 z-50 p-0 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 relative">
        <img 
          src="/assets/wpp.png" 
          alt="WhatsApp" 
          className="w-full h-full object-contain drop-shadow-xl"
          referrerPolicy="no-referrer"
        />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-900 px-4 py-2 rounded-lg shadow-lg font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-brand-100">
          Simule agora no WhatsApp!
        </span>
      </div>
    </motion.a>
  );
}
