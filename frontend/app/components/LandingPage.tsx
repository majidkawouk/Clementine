import { Zap, BookOpen, HardDrive, LucideIcon } from 'lucide-react';
import { FC } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div dir="rtl" className="p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl text-center">
    <Icon className="w-10 h-10 mx-auto mb-4 text-[#FF9800]" />
    <h3 className="text-xl font-bold text-[#003366] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function LandingPage() {
  return (
    <main dir="rtl">
      <section className="bg-[#003366] py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FF9800] mb-4">
              الأساس القوي لكل مبرمج
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
            ابدأ رحلتك البرمجية من حيث بدأ كل شيء. مسارات تعليمية خطوة بخطوة للمبتدئين.
          </p>
          <button className="py-3 px-10 rounded-full font-bold transition duration-300 shadow-xl bg-[#FF9800] text-[#003366] text-lg hover:brightness-110">
            ابدأ الآن مجاناً
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] text-center mb-12">
            لماذا تختار تعلم لغة C 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={HardDrive}
              title="فهم أعمق للبرمجة"
              description="تعلم كيف يعمل الكمبيوتر على مستوى الذاكرة والجهاز، وهي مهارة أساسية للمبرمجين المحترفين."
            />
            <FeatureCard 
              icon={BookOpen}
              title="أساس اللغات الحديثة"
              description="C هي الأساس الذي بنيت عليه لغات مثل C++, C#, وJava. سيجعل تعلمها أي لغة أخرى أسهل."
            />
            <FeatureCard 
              icon={Zap}
              title="كفاءة وأداء عالي"
              description="اكتب كودًا سريعًا وفعالًا، وهو أمر بالغ الأهمية لتطوير أنظمة التشغيل والألعاب والأنظمة المدمجة."
            />
          </div>
        </div>
      </section>
      
      <section className="bg-[#003366] py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          انضم إلى آلاف المبرمجين وابدأ رحلتك الآن!
        </h2>
        <a href="#" className="py-3 px-8 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#003366] transition duration-150 text-lg">
          سجّل الدخول للمتابعة
        </a>
      </section>
    </main>
  );
}