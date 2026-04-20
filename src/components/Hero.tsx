import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Banknote } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background with Gradient and Decorative Elements */}
      <div className="absolute inset-0 z-0 bg-brand-deep">
        {/* Modern Radial Gradient Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -mr-80 -mt-80 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-900/40 rounded-full blur-[100px] -ml-40 -mb-40"></div>
        
        {/* Mesh Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-[#0d1b33] to-[#122445]"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-sm border border-brand-primary/30 px-4 py-2 rounded-full text-brand-100 text-sm font-medium mb-6">
            <CheckCircle2 size={16} className="text-brand-primary" />
            Há mais de 10 anos transformando realidades
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Soluções Financeiras <br />
            <span className="text-brand-primary">Rápidas e Seguras</span>
          </h1>
          
          <p className="text-lg text-brand-100 mb-10 max-w-2xl leading-relaxed">
            Crédito especializado para você e sua empresa, com liberação rápida, parcelas que cabem no seu bolso e taxas mais baixas para organizar sua vida financeira
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-primary/20"
            >
              Solicitar Atendimento
              <ArrowRight size={20} />
            </a>
            <a
              href="#produtos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all"
            >
              Nossos Produtos
            </a>
          </div>

          <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-8 max-w-fit">
            <div>
              <div className="text-3xl font-bold text-white">10+ Anos</div>
              <div className="text-brand-300 text-sm">De mercado</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-white">Bauru</div>
              <div className="text-brand-300 text-sm">Loja Física</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative px-0 md:px-4"
        >
          <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h3 className="text-2xl font-display font-bold text-brand-deep mb-8">
              Crédito em <span className="text-brand-primary">3 Passos Simples</span>
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-primary border border-brand-100">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-deep text-lg mb-1">1. Solicitação</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">Nos chame no WhatsApp e informe o valor desejado.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-primary border border-brand-100">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-deep text-lg mb-1">2. Análise Rápida</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">Buscamos a melhor taxa entre os principais bancos parceiros.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-primary border border-brand-100">
                  <Banknote size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-deep text-lg mb-1">3. Receba o Valor</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">Dinheiro na sua conta com rapidez e segurança.</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-primary hover:bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Iniciar Agora
                  <ArrowRight size={22} />
                </a>
                <p className="text-center text-[10px] text-brand-muted font-medium mt-4 tracking-wide">
                  ATENDIMENTO EM BAURU OU DE FORMA DIGITAL
                </p>
              </div>
            </div>
          </div>

          {/* Decorative accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/5 -z-20 blur-3xl rounded-full"></div>
        </motion.div>

      </div>

      {/* Shapes Overlay */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-primary/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
}
