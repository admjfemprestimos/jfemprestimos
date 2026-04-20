import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Atendimento', href: '#atendimento' },
  ];

  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Pequeno atraso para permitir que o menu comece a fechar antes de rolar
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-brand-100 py-1' 
          : 'bg-white shadow-sm border-b border-brand-100 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#inicio" className="w-48 h-12 flex items-center justify-start overflow-hidden hover:opacity-80 transition-opacity">
            <img 
              src="/assets/logo.png" 
              alt="JF Empréstimos Logo" 
              className="w-full h-full object-contain object-left"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-brand-muted transition-colors hover:text-brand-primary"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2 bg-brand-primary text-white hover:bg-brand-600 shadow-md"
          >
            <Phone size={18} />
            Simule Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-brand-deep"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4 overflow-hidden rounded-xl shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-muted font-medium p-2 hover:bg-brand-50 rounded-lg"
                  onClick={(e) => handleMobileClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5514998061506?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20simulação%20de%20crédito"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white p-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} />
                Simule Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
