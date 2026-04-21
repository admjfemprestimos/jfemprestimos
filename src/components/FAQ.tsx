import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Quais documentos são necessários para solicitar um empréstimo?",
    answer: "Normalmente solicitamos RG/CNH, comprovante de residência atualizado e comprovante de renda (holerite ou extrato bancário dos últimos 3 meses). Para consignados, pode ser necessário o número do benefício ou margem disponível."
  },
  {
    question: "Quanto tempo demora para o dinheiro cair na conta?",
    answer: "Trabalhamos para que o processo seja o mais ágil possível. Em algumas modalidades, como a antecipação do FGTS, o dinheiro pode cair na conta em até 24 horas úteis após a aprovação."
  },
  {
    question: "A JF Empréstimos cobra taxas antecipadas?",
    answer: "NÃO. É fundamental ressaltar que nenhuma instituição financeira séria cobra taxas antecipadas para liberação de crédito. Fuja de golpes: na JF, você só paga as parcelas acordadas após o recebimento do crédito."
  },
  {
    question: "Posso solicitar empréstimo mesmo estando negativado?",
    answer: "Sim, especialmente em modalidades como Saque Aniversário FGTS e Crédito Consignado (INSS ou Convênios Públicos), onde a garantia é o próprio benefício ou saldo, facilitando a aprovação para quem tem restrições no CPF."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  i: number;
}

function FAQItem({ question, answer, i }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-brand-100 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left gap-4 hover:text-brand-primary transition-colors group"
      >
        <div className="flex items-center gap-4">
          <HelpCircle className="shrink-0 text-brand-primary/40 group-hover:text-brand-primary transition-colors" size={24} />
          <span className="font-bold text-lg text-brand-deep leading-tight">{question}</span>
        </div>
        <ChevronDown 
          className={`shrink-0 transition-transform duration-300 text-brand-muted ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} 
          size={24} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-8 text-brand-muted leading-relaxed pl-9 pr-4">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-brand-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-brand-deep mb-6"
          >
            Dúvidas <span className="text-brand-primary">Frequentes</span>
          </motion.h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Separamos as principais perguntas para que você se sinta seguro e bem informado antes de dar o próximo passo.
          </p>
        </div>

        {/* Reduce complex shadow on mobile to prevent rendering lag during height changes */}
        <div className="bg-white rounded-[2rem] shadow-sm md:shadow-xl md:shadow-brand-200/50 p-6 md:p-12 border border-brand-100">
          {faqItems.map((item, index) => (
            <div key={index}>
              <FAQItem question={item.question} answer={item.answer} i={index} />
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-brand-muted mb-4 italic">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-primary font-bold hover:underline"
          >
            Clique aqui para falar com um consultor agora →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
