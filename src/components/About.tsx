import { motion } from 'motion/react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
      title: "Segurança",
      description: "Operamos com total transparência e seguindo as normas do Banco Central do Brasil."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-primary" />,
      title: "Agilidade",
      description: "Processos simplificados para que você tenha acesso ao crédito no menor tempo possível."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: "Humanização",
      description: "Cada cliente é único. Avaliamos suas necessidades de forma próxima e pessoal."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="transform-gpu will-change-transform"
          >
            <span className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4 block">Sobre a JF Empréstimos</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-deep mb-8 leading-tight">
              Sua parceira de confiança <br />
              há mais de <span className="text-brand-primary">uma década</span>
            </h2>
            
            <div className="prose prose-lg text-brand-muted max-w-none mb-10">
              <p className="mb-6">
                JF Empréstimos é uma agência especializada em soluções financeiras localizada em Bauru, focada em oferecer crédito rápido e seguro para pessoas e empresas que precisam de apoio financeiro imediato.
              </p>
              <p className="mb-6">
                Com uma abordagem personalizada e flexível, trabalhamos para entender as necessidades de nossos clientes e encontrar as melhores opções de empréstimos, com condições facilitadas e taxas competitivas.
              </p>
              <p>
                Contamos com um time altamente treinado para melhor atendê-los, presencialmente ou de forma digital!
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {values.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="p-3 bg-brand-50 rounded-xl w-fit">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-brand-deep">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative transform-gpu will-change-transform"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/frente.jpg"
                alt="Fachada da Nossa Unidade"
                className="rounded-2xl shadow-lg mt-12 h-80 object-cover object-top w-full"
                referrerPolicy="no-referrer"
              />
              <img
                src="/assets/empresa.jpg"
                alt="Detalhe de Nossa Unidade"
                className="rounded-2xl shadow-lg h-80 object-cover object-top w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-deep p-8 rounded-full border-8 border-white shadow-2xl text-center flex flex-col items-center justify-center min-w-[160px] min-h-[160px]">
              <span className="text-5xl font-bold text-white">10</span>
              <span className="text-brand-300 text-xs uppercase font-bold tracking-widest mt-1">Anos de <br />História</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
