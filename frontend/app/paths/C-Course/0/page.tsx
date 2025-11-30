import { Code, Target, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#003366] text-gray-100 py-12 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-12">
        <header className="pb-8 border-b border-[#FF9800]/50">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 flex items-center text-[#FF9800]">
            <Zap className="w-8 h-8 ml-3 text-white" />
            أساسيات البرمجة: المسار المباشر
          </h1>
          <p className="text-xl font-light text-gray-300 pr-1">
            بناء مجتمع تقني مكرس لتعلم قوي وواضح وعملي.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-4 flex items-center">
            <BookOpen className="w-7 h-7 ml-3 text-white" />
            هدفنا الأساسي
          </h2>
          <p className="text-gray-200 text-lg leading-8 border-r-4 border-[#FF9800]/70 pr-4">
            هدفنا الرئيسي هو بناء مجتمع يجعل التعلم أسهل بكثير من خلال موارد
            جيدة، مجانية، وموثقة جيدًا. تم تصميم هذه المواد لتعطيك أساسًا قويًا
            حقًا حتى تتمكن من المضي قدمًا بثقة في المسار التقني الذي اخترته.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#00284d]/50 p-6 rounded-xl border border-red-700 shadow-lg shadow-red-900/20">
            <h3 className="text-2xl font-bold text-red-400 mb-3 flex items-center justify-end flex-row-reverse text-right border-b border-red-500/50 pb-2">
              <Target className="w-6 h-6 ml-3" />
              نقطة البداية والتحدي
            </h3>
            <div className="text-gray-400 space-y-4 text-base leading-relaxed">
              <p>
                البرمجة هي نقطة البداية الحاسمة للكثير من الوظائف التقنية—سواء
                كانت تطوير الويب، أو تطبيقات الهاتف، أو تطوير الألعاب، أو الأمن
                السيبراني، أو التعلم الآلي. كل هذه المجالات تحتاج إلى أساس قوي
                حقًا في البرمجة.
              </p>
              <p className="font-semibold text-red-300">
                ومع ذلك، من السهل جدًا أن تضيع في (tutorial hell)، ومع وجود
                العديد من الموارد المتاحة، تبدو المهمة ساحقة.
              </p>
            </div>
          </div>

          <div className="bg-[#00284d]/50 p-6 rounded-xl border border-green-700 shadow-lg shadow-green-900/20">
            <h3 className="text-2xl font-bold text-green-400 mb-3 flex items-center justify-end flex-row-reverse text-right border-b border-green-500/50 pb-2">
              <Code className="w-6 h-6 ml-3" />
              حلنا المباشر
            </h3>
            <div className="text-gray-400 space-y-4 text-base leading-relaxed">
              <p>
                هدفنا هو جعل نقطة انطلاقك في البرمجة بسيطة ونظيفة، مما يمنحك
                الأدوات التي تحتاجها بالفعل لتطوير عقلية برمجية أساسية.
              </p>
              <p>
                نأمل أنه بنهاية هذا المسار، تصبح مطلعًا جدًا على المفاهيم المهمة
                للبرمجة بحيث عندما ترغب في التعمق في مجال معين، تحتاج فقط إلى
                التعلم عن ذلك المجال ولا تضيع أي وقت في مراجعة الأساسيات.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-900/40 p-6 sm:p-8 rounded-xl border-r-4 border-[#FF9800]">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-4">
            المنهجية: التعلم من خلال الكود
          </h2>
          <div className="text-gray-200 text-lg leading-8 space-y-3">
            <p>
              <strong>قاعدة أساسية: لا تتخطى أي شيء!</strong> اقرأ كل شيء وقم
              بالبرمجة والتجريب مع الكود.
            </p>
            <p className="font-semibold text-[#FF9800]">
              تعلم كيفية البرمجة هو حقًا يتعلق بالكتابة والتجريب الفعلي على ما
              يمكنك فعله بدلاً من مجرد القراءة أو مشاهدة الدروس التعليمية.
            </p>
            <Link
              className="bg-[#FF9800] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#af7010] transition duration-300"
              href={"/paths/C-Course/1"}
            >
              ابدأ رحلتك في تعلم البرمجة الآن &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
