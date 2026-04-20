import { motion } from 'motion/react';
import { Clock, MapPin, Mail, Phone, Calendar } from 'lucide-react';

export default function Hours() {
  const schedule = [
    { day: "Segunda-feira", hours: "08:00 – 17:00" },
    { day: "Terça-feira", hours: "08:00 – 17:00" },
    { day: "Quarta-feira", hours: "08:00 – 17:00" },
    { day: "Quinta-feira", hours: "08:00 – 17:00" },
    { day: "Sexta-feira", hours: "08:00 – 16:00" },
    { day: "Sábado", hours: "Fechado", closed: true },
    { day: "Domingo", hours: "Fechado", closed: true },
  ];

  return (
    <section id="atendimento" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-brand-deep mb-8">Onde nos <span className="text-brand-primary">Encontrar</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-primary w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-deep mb-1">Endereço</h3>
                  <p className="text-brand-muted leading-relaxed">R. Ezequiel Ramos 2-26 - Centro,<br />Bauru - SP, CEP 17010-021</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=R.+Ezequiel+Ramos+2-26+-+Centro,+Bauru+-+SP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-primary font-bold text-sm mt-3 inline-block hover:underline"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-brand-primary w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-deep mb-1">Telefone / WhatsApp</h3>
                  <p className="text-brand-muted font-medium">(14) 99806-1506</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-brand-primary w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-deep mb-1">Email</h3>
                  <p className="text-brand-muted font-medium">contatoevaristo@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* Real Google Maps Embed */}
            <div className="mt-10 rounded-3xl overflow-hidden border border-brand-100 shadow-lg h-[350px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.037191763133!2d-49.0735824!3d-22.3216891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6795f9e21815%3A0xc3cd5cc3781f8f3c!2sR.%20Ezequiel%20Ramos%2C%202-26%20-%20Centro%2C%20Bauru%20-%20SP%2C%2017010-021!5e0!3m2!1spt-BR!2sbr!4v1713460000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - JF Empréstimos"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-deep rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-3xl -mr-32 -mt-32 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <Calendar className="text-brand-primary w-8 h-8" />
                <h3 className="font-display text-3xl font-bold">Horário de Funcionamento</h3>
              </div>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center py-3 border-b border-white/10 ${item.closed ? 'opacity-50' : ''}`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <div className="flex items-center gap-2">
                      {!item.closed && <Clock size={16} className="text-brand-primary" />}
                      <span className={item.closed ? 'text-brand-300' : 'text-white'}>{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <p className="text-brand-200 text-sm leading-relaxed italic">
                  "Nosso time está pronto para atendê-lo presencialmente ou de forma digital dentro de nosso horário comercial."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
