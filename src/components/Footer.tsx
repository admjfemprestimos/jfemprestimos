import { Send, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep pt-20 pb-10 text-brand-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center mb-6">
            <a href="#inicio" className="w-56 h-14 flex items-center justify-start overflow-hidden hover:opacity-80 transition-opacity">
              <img 
                src="/assets/footer.png" 
                alt="JF Empréstimos Logo" 
                className="w-full h-full object-contain object-left"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          <p className="text-brand-300 leading-relaxed mb-8">
            Se você tiver alguma dúvida, não hesite em entrar em contato, nos envie uma mensagem. Estamos ansiosos para ouvir você!
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
            <li><a href="#inicio" className="hover:text-brand-primary transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
            <li><a href="#produtos" className="hover:text-brand-primary transition-colors">Produtos</a></li>
            <li><a href="#depoimentos" className="hover:text-brand-primary transition-colors">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            <li><a href="#atendimento" className="hover:text-brand-primary transition-colors">Atendimento</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <MapPin size={20} className="text-brand-primary shrink-0" />
              <span className="text-sm">R. Ezequiel Ramos 2-26 - Centro, Bauru - SP</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-brand-primary shrink-0" />
              <span className="text-sm">contatoevaristo@hotmail.com</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-brand-primary shrink-0" />
              <span className="text-sm">(14) 99806-1506</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase text-xs tracking-widest">Informações Legais</h5>
            <p className="text-xs text-brand-300 leading-relaxed max-w-2xl">
              JF Empréstimos atua como correspondente bancário, intermediando operações de crédito de forma indireta. Não somos uma instituição financeira. Seguimos as normas do Banco Central do Brasil. A aprovação de crédito e condições são definidas pelas instituições financeiras parceiras.
            </p>
          </div>
          <div className="text-right">
             <p className="text-sm text-brand-300">
               © Copyright {currentYear} – JF Empréstimos. <br className="md:hidden" /> Todos os direitos reservados.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
