import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const content = {
  en: {
    badge: "Enterprise Simulation Solutions",
    heading: "Ready to build long-term engineering capability?",
    subtitle: "Partner with the GCC's leading simulation experts to optimize performance, reduce risk, and accelerate innovation.",
    button: "Talk to Our Experts",
  },
  ar: {
    badge: "حلول محاكاة للمؤسسات",
    heading: "هل أنت مستعد لبناء قدرات هندسية طويلة المدى؟",
    subtitle: "شراكة مع خبراء المحاكاة الرائدين في دول مجلس التعاون الخليجي لتحسين الأداء وتقليل المخاطر وتسريع الابتكار.",
    button: "تحدث إلى خبرائنا",
  },
};

export function CTASection() {
  const { language, isRTL } = useLanguage();
  const t = content[language];
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(".cta-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(".cta-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(".cta-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(".cta-trust",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(".cta-button",
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.4"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Particle Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: Particle[] = [];
    const particleCount = width < 768 ? 40 : 80; // Fewer particles on mobile
    const connectionDistance = 150;
    const mouseDistance = 200;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow velocity
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (gentle attraction)
        const dx = mousePos.x - this.x; // Use reference or state? State might be laggy in loop without ref.
        // Actually, let's use a ref for mouse pos to avoid re-renders of the effect
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    let animationFrameId: number;

    // We need a ref for current mouse pos to use inside the loop
    // But we are inside useEffect, so we can use a local variable updated by event listener
    let localMouseX = 0;
    let localMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      localMouseX = e.clientX - rect.left;
      localMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and Draw Particles
      particles.forEach(p => {
        // Basic movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse Interaction
        const dx = localMouseX - p.x;
        const dy = localMouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          // Push away slightly
          const direction = -1;
          const strength = 0.05;

          p.vx += forceDirectionX * force * strength * direction;
          p.vy += forceDirectionY * force * strength * direction;
        }

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 220, 220, ${0.1 + (p.size / 3) * 0.2})`; // Silver/White tint
        ctx.fill();
      });

      // Draw Connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200, 200, 200, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run once on mount

  return (
    <section ref={sectionRef} id="cta" className="relative py-28 lg:py-36 bg-[#0B1220] overflow-hidden">

      {/* 1. Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      />

      {/* 2. Radial Gradient Overlay (for depth) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, #0B1220 90%)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="cta-content max-w-[720px] mx-auto text-center">

          {/* Badge */}
          <div className="cta-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 mb-8 backdrop-blur-sm opacity-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-medium uppercase tracking-wider">{t.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="cta-heading font-heading text-h2 sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance drop-shadow-sm opacity-0">
            {t.heading}
          </h2>

          {/* Subtitle */}
          <p className="cta-subtitle font-body text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto mb-8 leading-relaxed opacity-0">
            {t.subtitle}
          </p>

          {/* Trust Reinforcement Line */}
          <p className="cta-trust font-body text-sm text-slate-400/80 max-w-2xl mx-auto mb-10 tracking-wide border-t border-white/5 pt-6 uppercase opacity-0">
            {language === 'ar'
              ? "موثوق به من قبل الجامعات الرائدة والجهات الحكومية والمنظمات الصناعية في دول مجلس التعاون الخليجي"
              : "Trusted by leading universities, government entities, and industrial organizations across the GCC."
            }
          </p>

          {/* CTA Button */}
          <div className="cta-button opacity-0">
            <Link to="/contact">
              <Button
                size="xl"
                className={cn(
                  "group relative h-14 px-8 text-base font-semibold rounded overflow-hidden transition-all duration-300",
                  "bg-white/5 text-white hover:bg-white hover:text-[#0B0F14] hover:scale-[1.01]", // Dark glass default -> White hover
                  "shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                  "border border-white/20 hover:border-white"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.button}
                  {isRTL ? (
                    <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </span>
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
