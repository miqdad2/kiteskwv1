import { Cpu, Cog, GraduationCap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    eyebrow: "ABOUT KITES",
    label: "Who We Are",
    description: [
      "Founded in 2019, the Kuwait Institute for Training and Engineering Simulations (KITES) is a leading provider of advanced engineering, simulation, and training solutions.",
      "We empower engineers, students, and organizations across the GCC and beyond by bridging the gap between academic knowledge and real-world industrial application. Through cutting-edge simulation technologies and expert-led training, KITES enables practical learning, technical excellence, and innovation at scale.",
      "Our mission is to upskill talent, foster innovation, and lead engineering advancement by delivering the knowledge, technology, and expertise required to address complex challenges and drive sustainable progress.",
      "Our vision is to enable the next generation of engineers and organizations to innovate without limits, positioning the GCC as a global leader in smart and sustainable engineering practices.",
    ],
  },
  ar: {
    eyebrow: "عن كايتس",
    label: "من نحن",
    description: [
      "تأسس معهد الكويت للتدريب ومحاكاة الهندسة (KITES) في عام 2019، وهو مؤسسة رائدة في تقديم حلول الهندسة المتقدمة، والمحاكاة، والتدريب المتخصص.",
      "يعمل المعهد على تمكين المهندسين والطلاب والمؤسسات في دول مجلس التعاون الخليجي وخارجها، من خلال سد الفجوة بين المعرفة الأكاديمية والتطبيقات الصناعية الواقعية. ومن خلال تقنيات المحاكاة المتقدمة وبرامج التدريب المعتمدة على الخبرات العملية، يساهم KITES في تعزيز التعلم التطبيقي، والتميز التقني، والابتكار المستدام.",
      "تتمثل رسالتنا في تطوير الكفاءات، ودعم الابتكار، وقيادة التقدم الهندسي عبر توفير المعرفة والتكنولوجيا والخبرة اللازمة لمواجهة التحديات المعقدة وتحقيق التنمية المستدامة.",
      "أما رؤيتنا، فهي تمكين الجيل القادم من المهندسين والمؤسسات من الابتكار بلا حدود، وترسيخ مكانة منطقة الخليج كمركز عالمي رائد في مجالات الهندسة الذكية والمستدامة.",
    ],
  },
};

export function WhoWeAreSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="who-we-are" className="py-28 lg:py-40 bg-[#F8FAFC] border-y border-soft relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className={`max-w-3xl mx-auto ${language === 'ar' ? 'text-right' : 'text-center'}`}>
          <span className="block text-xs font-bold text-[#2563eb]/80 uppercase tracking-[0.2em] mb-6">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-8 tracking-tight">
            {t.label}
          </h2>
          <div className={`w-12 h-px bg-[#2563eb] mb-10 ${language === 'ar' ? 'ml-auto mr-0' : 'mx-auto'}`} />
          <div className="space-y-4">
            {t.description.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-xl text-logo-jumbo leading-[1.8] font-normal italic"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
