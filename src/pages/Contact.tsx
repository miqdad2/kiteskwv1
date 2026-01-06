import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const content = {
  en: {
    title: "Contact Us",
    intro: "Get in touch with our team to discuss your needs.",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      successDesc: "We'll get back to you as soon as possible.",
    },
    validation: {
      nameRequired: "Name is required",
      nameMax: "Name must be less than 100 characters",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number",
      companyMax: "Company name must be less than 100 characters",
      messageRequired: "Message is required",
      messageMax: "Message must be less than 1000 characters",
    },
    details: {
      heading: "Contact Details",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
  },
  ar: {
    title: "تواصل معنا",
    intro: "تواصل مع فريقنا لمناقشة احتياجاتك.",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      company: "الشركة",
      message: "الرسالة",
      submit: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال الرسالة بنجاح!",
      successDesc: "سنتواصل معك في أقرب وقت ممكن.",
    },
    validation: {
      nameRequired: "الاسم مطلوب",
      nameMax: "يجب أن يكون الاسم أقل من 100 حرف",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "يرجى إدخال بريد إلكتروني صحيح",
      phoneInvalid: "يرجى إدخال رقم هاتف صحيح",
      companyMax: "يجب أن يكون اسم الشركة أقل من 100 حرف",
      messageRequired: "الرسالة مطلوبة",
      messageMax: "يجب أن تكون الرسالة أقل من 1000 حرف",
    },
    details: {
      heading: "بيانات التواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
    },
  },
};

const contactInfo = {
  email: "info@kites-kw.com",
  phone: "+965 22092260",
  locationEn: "Hawally, Kuwait",
  locationAr: "حولي، الكويت",
};

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language];
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, t.validation.nameRequired)
      .max(100, t.validation.nameMax),
    email: z
      .string()
      .trim()
      .min(1, t.validation.emailRequired)
      .email(t.validation.emailInvalid),
    phone: z
      .string()
      .trim()
      .regex(/^[\d\s+()-]*$/, t.validation.phoneInvalid)
      .optional()
      .or(z.literal("")),
    company: z.string().trim().max(100, t.validation.companyMax).optional(),
    message: z
      .string()
      .trim()
      .min(1, t.validation.messageRequired)
      .max(1000, t.validation.messageMax),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });

    toast({
      title: t.form.success,
      description: t.form.successDesc,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line-light mx-auto mb-10" />
            <h1 className="font-heading text-h1 sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              {t.title}
            </h1>
            <p className="font-body text-body-lg text-primary-foreground/60 leading-relaxed">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <div className="border border-border p-10 text-center">
                  <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-h3 font-semibold text-foreground mb-3">
                    {t.form.success}
                  </h3>
                  <p className="text-muted-foreground mb-8">{t.form.successDesc}</p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                  >
                    {language === "en" ? "Send Another Message" : "إرسال رسالة أخرى"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-body-sm font-medium">{t.form.name} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-12 ${errors.name ? "border-destructive" : ""}`}
                        maxLength={100}
                      />
                      {errors.name && (
                        <p className="text-destructive text-body-sm">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-body-sm font-medium">{t.form.email} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 ${errors.email ? "border-destructive" : ""}`}
                        maxLength={255}
                      />
                      {errors.email && (
                        <p className="text-destructive text-body-sm">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-body-sm font-medium">{t.form.phone}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`h-12 ${errors.phone ? "border-destructive" : ""}`}
                        maxLength={20}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-body-sm">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-body-sm font-medium">{t.form.company}</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`h-12 ${errors.company ? "border-destructive" : ""}`}
                        maxLength={100}
                      />
                      {errors.company && (
                        <p className="text-destructive text-body-sm">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-body-sm font-medium">{t.form.message} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[180px] ${errors.message ? "border-destructive" : ""}`}
                      maxLength={1000}
                    />
                    {errors.message && (
                      <p className="text-destructive text-body-sm">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-[180px]"
                  >
                    {isSubmitting ? t.form.sending : t.form.submit}
                    <ArrowRight size={16} className="ms-2 rtl:-scale-x-100" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-1">
              <div className="border border-border p-8 sticky top-24">
                <h3 className="font-heading text-h4 font-semibold text-foreground mb-8">
                  {t.details.heading}
                </h3>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-foreground/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-body-sm text-muted-foreground mb-1">
                        {t.details.email}
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-foreground/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-body-sm text-muted-foreground mb-1">
                        {t.details.phone}
                      </p>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                        className="text-foreground hover:text-accent transition-colors"
                        dir="ltr"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-foreground/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-body-sm text-muted-foreground mb-1">
                        {t.details.location}
                      </p>
                      <p className="text-foreground">
                        {language === "en"
                          ? contactInfo.locationEn
                          : contactInfo.locationAr}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
