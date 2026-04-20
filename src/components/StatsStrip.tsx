import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Users, Coins, MapPin } from 'lucide-react';

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString('pt-BR');
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref} className="tabular-numbers">
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const stats = [
    {
      label: "Clientes Satisfeitos",
      value: 50000,
      suffix: "+",
      icon: <Users className="w-8 h-8" />,
    },
    {
      label: "Crédito Concedido",
      prefix: "R$ ",
      value: 1,
      suffix: " Bilhão+",
      icon: <Coins className="w-8 h-8" />,
    },
    {
      label: "Cidades Atendidas",
      value: 236,
      suffix: "+",
      icon: <MapPin className="w-8 h-8" />,
    }
  ];

  return (
    <section className="bg-brand-deep py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform duration-500 border border-white/10">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-brand-300 font-bold tracking-[0.2em] uppercase text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
