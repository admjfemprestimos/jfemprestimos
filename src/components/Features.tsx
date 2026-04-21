import { motion } from 'motion/react';
import { 
  User, 
  Car, 
  Home, 
  Briefcase, 
  Wallet, 
  Users, 
  Building2,
  ArrowRight
} from 'lucide-react';

export default function Features() {
  const products = [
    {
      title: "Crédito Pessoal",
      description: "Destinado a pessoa física (aposentados, pensionistas, celetistas, agricultores, funcionários públicos e autônomos).",
      icon: <User className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Residencial / Comercial",
      description: "Crédito destinado a pessoa física ou jurídica para compra de imóveis ou refinanciamento (Home Equity).",
      icon: <Home className="w-6 h-6" />,
      color: "bg-indigo-600"
    },
    {
      title: "Veículos",
      description: "Financiamento para compra ou crédito com garantia de veículo (Car Equity) com taxas atrativas.",
      icon: <Car className="w-6 h-6" />,
      color: "bg-emerald-600"
    },
    {
      title: "Crédito CLT",
      description: "Linha de crédito pessoal com desconto em folha e melhores condições para funcionários de empresas.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      title: "FGTS",
      description: "Antecipe em até 10 anos o seu saque-aniversário com base no seu saldo disponível.",
      icon: <Wallet className="w-6 h-6" />,
      color: "bg-cyan-600"
    },
    {
      title: "INSS",
      description: "Crédito consignado exclusivo para aposentados e pensionistas que recebem mensalmente pelo INSS.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-600"
    },
    {
      title: "Convênios Públicos",
      description: "Servidores federais, estaduais e municipais (ativos ou inativos) com taxas diferenciadas.",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-brand-700"
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-brand-deep mb-6"
          >
            Soluções para <span className="text-brand-primary">todas as suas metas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted"
          >
            Seja para realizar um sonho, reformar a casa ou pagar dívidas, temos a linha de crédito ideal para você.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 md:hover:-translate-y-1.5 md:hover:shadow-xl transition-all duration-300 group transform-gpu"
            >
              <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-4">{item.title}</h3>
              <p className="text-brand-muted leading-relaxed mb-6">
                {item.description}
              </p>
              <a 
                href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline"
              >
                Simular Agora
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.4 }}
             className="bg-brand-deep p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white transform-gpu"
          >
            <h3 className="text-2xl font-bold mb-4">Dúvidas sobre qual escolher?</h3>
            <p className="text-brand-100 mb-8">
              Nossa equipe está pronta para te orientar e encontrar a melhor solução para o seu bolso.
            </p>
            <a 
              href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold w-full hover:bg-brand-600 transition-colors flex items-center justify-center gap-2"
            >
              Falar com Consultor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
