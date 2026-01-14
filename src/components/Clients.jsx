import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle, Star, Users, ChevronsLeftRight } from "lucide-react";

const AnimatedStat = ({ value, label, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      animate(0, numericValue, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `+${Math.round(latest).toLocaleString('pt-BR')}`;
          }
        },
      });
    }
  }, [isInView, numericValue]);

  return (
    <div className="text-center">
      <motion.div whileHover={{ scale: 1.2, y: -5 }} className="transition-transform duration-300">
        <Icon className="w-12 h-12 mx-auto mb-4 text-white" />
      </motion.div>
      <div ref={ref} className="text-4xl font-bold text-white mb-2 font-display">+{numericValue.toLocaleString('pt-BR')}</div>
      <div className="text-sm font-bold font-display tracking-wider text-gray-300">{label}</div>
    </div>
  );
};

const BeforeAfterSlider = ({ before, after, title, description }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let newPosition = (x / rect.width) * 100;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;
    setSliderPosition(newPosition);
  };

  const handleMouseMove = (e) => isDragging && handleMove(e.clientX);
  const handleTouchMove = (e) => isDragging && handleMove(e.touches[0].clientX);

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-2xl mx-auto bg-zinc-900/50 p-4 rounded-xl border" style={{borderColor: 'red'}}>
      <div ref={containerRef} onMouseDown={() => setIsDragging(true)} onTouchStart={() => setIsDragging(true)} className="relative w-full aspect-video select-none cursor-ew-resize overflow-hidden rounded-lg">
        <img src={after} alt="Depois" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img src={before} alt="Antes" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 bottom-0 bg-white w-1 cursor-pointer" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-red-700 p-2 rounded-full shadow-lg"><ChevronsLeftRight /></div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
      <p className="text-gray-300 font-display">{description}</p>
    </motion.div>
  );
};

const Clients = () => {
  const stats = [
    { icon: CheckCircle, value: "+2600", label: "TRABALHOS ENTREGUES" },
    { icon: Users, value: "+900", label: "CLIENTES ATENDIDOS" },
    { icon: Star, value: "+760000", label: "PESSOAS ALCANÇADAS" }
  ];

  return (
    <section id="portfolio" className="relative pt-20 pb-10" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 80%, rgba(73, 0, 11, 0.9))'}}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-5xl md:text-6xl font-azonix mb-4 text-white">
            Trabalhos que <span className="text-white">falam por nós.</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-sub">Da estratégia ao vídeo final — tudo conectado a resultados reais.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          className="bg-zinc-900/50 border p-8 max-w-4xl mx-auto rounded-md mb-16" style={{borderColor: 'red'}}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </motion.div>

        {/* Sessão de Trabalhos Realizados */}
        <section id="trabalhos" className="mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center my-16"
          > 
            <p className="text-2xl font-display text-white">Além de clientes, <span className="text-white">somos parceiros.</span> A cada resultado entregue, fortalecemos conexões reais.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px #c8102e33" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950/50 p-6 cursor-pointer group overflow-hidden border rounded-xl transition-all duration-300" style={{borderColor: 'red', boxShadow: '0 0 40px rgba(255, 0, 0, 0.3)'}}
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <img
                  poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white font-bold py-2 px-6 rounded-full border-2 border-white bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform group-hover:scale-110">
                    Assistir projeto
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projeto 1</h3>
              <p className="text-xl text-gray-300 font-sub">Identidade visual para cliente do setor automotivo.</p>
            </motion.div>
            {/* Projeto 2 */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px #c8102e33" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950/50 p-6 cursor-pointer group overflow-hidden border rounded-xl transition-all duration-300" style={{borderColor: 'red', boxShadow: '0 0 40px rgba(255, 0, 0, 0.3)'}}
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <img
                  poster="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600&auto=format&fit=crop"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white font-bold py-2 px-6 rounded-full border-2 border-white bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform group-hover:scale-110">
                    Assistir projeto
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projeto 2</h3>
              <p className="text-xl text-gray-300 font-sub">Campanha de social media para restaurante.</p>
            </motion.div>
            {/* Projeto 3 */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px #c8102e33" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950/50 p-6 cursor-pointer group overflow-hidden border rounded-xl transition-all duration-300" style={{borderColor: 'red', boxShadow: '0 0 40px rgba(255, 0, 0, 0.3)'}}
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <img
                  poster="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white font-bold py-2 px-6 rounded-full border-2 border-white bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform group-hover:scale-110">
                    Assistir projeto
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projeto 3</h3>
              <p className="text-xl text-gray-300 font-sub">Edição de vídeo institucional para empresa parceira.</p>
            </motion.div>
          </div>
          <div className="text-center mt-16">
            <motion.a
              href="https://nexusmktd.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 0, 0, 0.7)", backgroundColor: '#c8102e' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 text-white font-bold text-lg shadow-xl transition-all duration-300 font-sub tracking-wider rounded-md" 
              style={{backgroundColor: 'red', boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.5)'}}
            >
              Ver Portfólio Completo
            </motion.a>
          </div>

          <div className="mt-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 text-4xl md:text-5xl font-azonix text-white"
            >
              O <span className="text-white">Antes e Depois</span> que inspira
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfterSlider before="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" after="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sat=150&con=50" title="Edição de Alimentos" description="Tratamento de cor e luz para realçar a textura e o apelo visual do prato."  />
              <BeforeAfterSlider before="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" after="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blend=FF0000&blend-alpha=30&blend-mode=multiply&sat=-100" title="Edição de Retrato" description="Ajuste de cores, iluminação e contraste para um resultado mais impactante." />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Clients;