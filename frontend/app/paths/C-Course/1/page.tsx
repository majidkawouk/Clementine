"use client";
import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson1Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-16 px-6 "
    >
      <NavBar />
      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 1 – بيئات التطوير (IDEs)
        </h1>

        <section id="1" className="mb-12  leading-9 text-gray-200 text-lg">
          <p className="mb-4">
            الـ IDE أو بيئة التطوير المتكاملة هو المكان الذي ستقضي فيه أغلب وقتك
            أثناء كتابة الكود.
            <span className="text-[#FF9800] font-bold text-xl mr-1">IDE</span>.
          </p>

          <p className="mt-4 p-4 bg-[#001f3d] rounded-xl border border-[#FF9800]/20">
            الـ IDE مو مجرد برنامج لعرض النصوص. هو عبارة عن “مركز قيادة” كامل
            يساعدك تكتب كود بسرعة، وبدون أخطاء، وبطريقة مريحة جداً. كل لغة برمجة
            تقريباً إلها أدوات معينة أو IDE معين موجه إلها، وفي عالم C في عدة
            خيارات قوية.
          </p>

          <p className="mt-6 text-gray-300">
            انت كمبتدئ، وجود IDE جيد رح يسهّل عليك 40% من تعلم البرمجة لأنك رح
            تشوف الأخطاء مباشرة وتتعلّم منها، ورح يدعمك بإكمال الكود واقتراحات
            جاهزة، ورح يخليك تركّز بالتفكير بدل ما تضيع وقتك على “وين القوس اللي
            ناقص؟”.
          </p>
        </section>

        <section className="mb-12">
          <h2
            id="2"
            className="text-2xl font-bold text-[#FF9800] mb-6 border-r-4 border-[#FF9800] pr-3"
          >
            شو اللي بخلّي الـ IDE مفيد لهالدرجة؟
          </h2>

          <ol className="list-none pl-6 space-y-8 text-gray-200 leading-9 text-lg p-6 rounded-xl">
            <li className="p-4 rounded-lg bg-[#001f3d] shadow-md transition hover:bg-[#001f3d]/80 border-l-4 border-yellow-500">
              <strong className="text-[#FF9800] text-xl">
                1. تلوين الصيغة (Syntax Highlighting — الألوان!);
              </strong>
              <br />
              لما تكتب كود، الـ IDE بيقسمه لألوان مختلفة: الدوال بلون، النصوص
              بلون، المتغيرات بلون، الأخطاء بلون… وهالشي بيساعد دماغك يفهم
              البنية بسرعة ويكتشف الأخطاء بعينه قبل حتى ما يشوفها المترجم.
            </li>

            <li className="p-4 rounded-lg bg-[#001f3d] shadow-md transition hover:bg-[#001f3d]/80 border-l-4 border-yellow-500">
              <strong className="text-[#FF9800] text-xl">
                2. فحص الأخطاء (Error Checking — مدقق الإملاء للكود)
              </strong>
              <br />
              تظهر الأخطاء النحوية والصياغية مباشرةً أسفل الكود بخط أحمر، مما
              يسمح لك بتصحيحها قبل محاولة تجميع الكود (Compilation).
            </li>

            <li className="p-4 rounded-lg bg-[#001f3d] shadow-md transition hover:bg-[#001f3d]/80 border-l-4 border-yellow-500">
              <strong className="text-[#FF9800] text-xl">
                3. الإكمال التلقائي (Autocomplete)
              </strong>
              <br />
              فقط بلّش تكتب:{" "}
              <code className="text-[#FF9800] font-mono">pri</code>… بتلاقيه
              مباشرة عطاك:{" "}
              <code
                dir="ltr"
                className="text-white bg-green-700/50 px-2 py-1 rounded-md font-mono"
              >
                printf()
              </code>{" "}
              وهالشي مذهل للمبتدئين لأنه بيعلمك أسماء الدوال والباراميترات بدون
              ما تحفظ كل شي من البداية.
            </li>

            <li className="p-4 rounded-lg bg-[#001f3d] shadow-md transition hover:bg-[#001f3d]/80 border-l-4 border-yellow-500">
              <strong className="text-[#FF9800] text-xl">
                4. تشغيل الكود بضغطة واحدة
              </strong>
              <br />
              بدون ما تفتح طرفية، وبدون ما تكتب أوامر. ضغطة زر → الكود يشتغل →
              النتيجة تطلع فوراً.
            </li>

            <li className="p-4 rounded-lg bg-[#001f3d] shadow-md transition hover:bg-[#001f3d]/80 border-l-4 border-yellow-500">
              <strong className="text-[#FF9800] text-xl">
                5. تنظيم الملفات والمشاريع
              </strong>
              <br />
              لما مشروعك يكبر، رح يصير عندك عشرات الملفات. الـ IDE يعرض كل
              الملفات على اليسار بشكل مرتب مع إمكانية التنقل السريع بينها. مما
              يجعل إدارة المشاريع الكبيرة أسهل بكثير.
            </li>

            <li className="p-4 rounded-lg bg-[#001f3d] shadow-md transition hover:bg-[#001f3d]/80 border-l-4 border-yellow-500">
              <strong className="text-[#FF9800] text-xl">
                6. أدوات تصحيح الأخطاء (Debugging Tools)
              </strong>
              <br />
              هاي واحدة من أهم الميزات: هذا هو السر الحقيقي لاحتراف أي لغة.
              <p className="mt-3 font-semibold text-gray-300">
                يسمح لك الـ Debugger بـ:
              </p>
              <ul className="list-disc pr-6 mt-2 space-y-2 bg-[#001f3d]/70 p-3 rounded-md border border-[#FF9800]/10">
                <li className="p-1">إيقاف تنفيذ البرنامج عند سطر معين </li>
                <li className="p-1">فحص قيمة المتغيرات لحظة التنفيذ</li>
                <li className="p-1">التقدم خطوة خطوة لرؤية تسلسل الأوامر</li>
                <li className="p-1">تحديد السطر الذي يسبب المشكلة (Bug)</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-12 leading-9 text-gray-200 text-lg p-6 rounded-xl bg-[#001f3d]/50">
          <h2
            id="3"
            className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/50 pb-2"
          >
            لماذا ننصح بـ Visual Studio Code؟
          </h2>

          <p className="mb-4">
            لأنه ببساطة: خفيف، سريع، مجاني، وبيشتغل على كل الأنظمة. وبيملك كمية
            Extensions رهيبة، أهمها Extension C/C++ يلي بضيف:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-3 bg-[#001f3d] p-4 rounded-lg border border-[#FF9800]/20">
            <li className="text-lg">إكمال تلقائي ذكي (IntelliSense)</li>
            <li className="text-lg">قدرة تشغيل الكود مباشرة</li>
            <li className="text-lg">قدرة عمل Debug بسهولة</li>
            <li className="text-lg">تنظيم رائع للملفات والمشاريع</li>
          </ul>

          <h2
            id="4"
            className="text-3xl font-bold text-[#FF9800] mb-6 mt-8 border-b border-[#FF9800]/50 pb-2"
          >
            الإضافات (Extensions) الأساسية
          </h2>
          <p className="mb-4">
            أحد أهم الأسباب التي تجعل VS Code شائعًا هو دعمه للإضافات. هذه
            الإضافات توسع من قدرات الـ IDE بشكل كبير:
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li className="p-3 rounded-md bg-[#001f3d] border-r-4 border-green-500">
              <span className="text-[#FF9800] font-bold text-xl">
                C/C++ Extension
              </span>
              <p className="text-gray-300 mt-1">
                توفر التلوين، الإكمال التلقائي، وتدعم تشغيل الكود وتصحيحه
                بسهولة.
              </p>
            </li>

            <li className="p-3 rounded-md bg-[#001f3d] border-r-4 border-green-500">
              <span className="text-[#FF9800] font-bold text-xl">
                Code Runner
              </span>
              <p className="text-gray-300 mt-1">
                تضيف زر تشغيل جاهز يعمل بدون إعدادات معقدة. مفيد لجميع اللغات
                وليس C فقط.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-4 bg-yellow-900/40 border-r-4 border-yellow-400 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            الخلاصة: IDE ≠ برنامج كتابة فقط
          </h2>
          <h4 className="text-xl font-bold text-yellow-400  mb-3">
            هو ليس مثل Notepad. الـ IDE:
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>يراقب الكود ويحلل الأخطاء لحظياً.</li>
            <li>يقدم اقتراحات لتقليل وقت الكتابة.</li>
            <li>يسهّل عملية التشغيل والتصحيح (Debugging).</li>
            <li>ينظم ملفات المشاريع الكبيرة بكفاءة عالية.</li>
          </ul>
          <p className="mt-4 text-center font-semibold text-xl">
            لهذا السبب، استخدام IDE يعتبر خطوة أساسية في تعلم البرمجة.
          </p>
        </section>

        <div className="w-full flex justify-between text-black text-lg font-semibold border-t border-[#FF9800]/50 pt-8 mt-10">
          <Link
            href={"http://localhost:3000/paths/C-Course/2"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس التالي
          </Link>
          <Link
            href={"http://localhost:3000/paths/C-Course/0"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </main>
  );
}
