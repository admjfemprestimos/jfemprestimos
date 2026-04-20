import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aposentada",
    content: "Excelente atendimento! O pessoal da JF Empréstimos foi muito atencioso e conseguiu uma taxa de juros muito menor do que o meu banco estava oferecendo. Recomendo muito!",
    rating: 5,
    image: "https://picsum.photos/seed/maria/100/100"
  },
  {
    name: "João Pereira",
    role: "Empresário",
    content: "Precisava de capital de giro rápido para minha loja em Bauru e a JF resolveu tudo em tempo recorde. Transparência total e sem burocracia desnecessária.",
    rating: 5,
    image: "https://picsum.photos/seed/joao/100/100"
  },
  {
    name: "Carla Oliveira",
    role: "Funcionária Pública",
    content: "Fiz um consignado e foi a melhor decisão. O processo foi simples, digital e muito seguro. O consultor tirou todas as minhas dúvidas com muita paciência.",
    rating: 5,
    image: "https://picsum.photos/seed/carla/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-brand-deep mb-6"
          >
            O que os <span className="text-brand-primary">clientes falam</span>
          </motion.h2>
          <p className="text-brand-muted text-lg text-pretty">
            A satisfação de quem já realizou seus sonhos com a JF Empréstimos é a nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-50 p-8 rounded-3xl relative h-full flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-brand-primary/10 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-primary text-brand-primary" />
                ))}
              </div>

              <p className="text-brand-deep leading-relaxed mb-8 flex-grow italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-deep leading-tight">{t.name}</h4>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
