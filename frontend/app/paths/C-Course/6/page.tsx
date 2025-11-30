import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson6Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-12 px-6"
    >
      <NavBar />

      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 6 :The Compiler
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4">المُقدمة</h2>
          <p id="1" className="text-gray-200 leading-8">
            لقد ذكرنا كلمة (Compiler) عدة مرات خلال الدروس الماضية، لكننا لم
            نشرح مطلقاً ماهيته وما هي الأهمية التي يخدمها. في هذا الدرس، سنتعمق
            قليلاً في كيفية فهم جهاز الكمبيوتر للكود الذي تكتبه أنت.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-3">
            The Compiler
          </h2>
          <p className="text-gray-200 leading-8 mb-4">
            تُدرك أجهزة الكمبيوتر لغة واحدة فقط وهي &apos;&apos;لغة الآلة
            (Machine Language)&quot; لغة الآلة هي سلسلة من سلاسل الأرقام
            الثنائية التي تحتوي على أصفار وواحدات فقط، مثل{" "}
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2"
          >
            01010111000011100101010111000011100101010111100001110001101100011
          </pre>
          <p className="text-gray-200 leading-8 mt-4">
            هذه السلاسل لا يمكن للبشر فهمها بسهولة، وهي اللغة ذات المستوى الأدنى
            للتحدث مع أجهزة الكمبيوتر.
          </p>
          <h3 className="text-xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-3">
            وظيفة ال Compiler
          </h3>
          <p className="text-gray-200 leading-8">
            تتمثل مهمة Compiler في ترجمة الكود الذي كتبته أنت (مثل{" "}
            <code dir="ltr" className="text-[#FF9800]">
              int main()
            </code>
            ) إلى تلك اللغة الثنائية المعقدة التي رأيتها للتو.
          </p>
          <p id="2" className="text-gray-200 leading-8 mt-4">
            لاحظ عندما تقوم بتشغيل برنامج C، يظهر ملف جديد في الدليل الخاص بك؛
            هذا الملف هو &quot;البرنامج القابل للتنفيذ (Executable)&quot; الذي
            تم تجميعه من برنامج C الرئيسي، وهو البرنامج الذي يتم تنفيذه فعلياً.
            هذا هو سبب تثبيتنا لـ &quot;
            <code dir="ltr" className="text-[#FF9800]">
              gcc
            </code>
            &quot; قبل تشغيل ملف C الخاص بنا، لأنك تحتاج إلى{" "}
            <code dir="ltr" className="text-[#FF9800]">
              gcc
            </code>{" "}
            لترجمة كود C إلى ملفات قابلة للتنفيذ.{" "}
          </p>
          <h3 className="text-xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-3">
            أوامر الترجمة (GCC Commands)
          </h3>
          <p className="text-gray-200 leading-8">
            لترجمة برنامج C، ما عليك سوى تشغيل:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            gcc your_prog_name.c
          </pre>
          <p className="text-gray-200 leading-8 mt-4">
            سيؤدي هذا إلى تجميع الملف وإنشاء ملف تنفيذي (عادةً باسم{" "}
            <code dir="ltr" className="text-[#FF9800]">
              a.out
            </code>{" "}
            أو{" "}
            <code dir="ltr" className="text-[#FF9800]">
              a.exe
            </code>
            ). لتشغيل الملف التنفيذي، اكتب ببساطة في الطرفية:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            ./a.out
          </pre>
          <p className="text-gray-200 leading-8 mt-4">
            يمكنك تغيير اسم الملف التنفيذي باستخدام علامة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              -o
            </code>
            :
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            gcc your_prog_name.c -o output
          </pre>
          <p className="text-gray-200 leading-8 mt-4">ثم لرؤية الناتج:</p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            ./output
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4">
            أخطاء البرمجة (Programming Errors)
          </h2>

          <p className="text-gray-200 leading-8">
            في بعض الأحيان، تحدث أخطاء. عندما تقوم بتجميع الكود، يكتشف المُترجم
            هذا الخطأ ويقول: &quot;مهلاً! لقد ارتكبت خطأً هنا، لن أقوم بالترجمة
            حتى لا تقوم بتشغيله وتتسبب بمشكلة! إليك رسالة الخطأ.&quot;
          </p>
          <p className="text-gray-200 leading-8 mt-4">
            هناك أنواع عديدة من الأخطاء، لكن لا تقلق، فهي ليست عدوّك بل صديقك.
            تخبرك رسائل الأخطاء بما هو خطأ بالضبط في الكود الخاص بك.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            1. أخطاء الصياغة (Syntax Errors)
          </h3>
          <p className="text-gray-200 leading-8">
            تحدث هذه الأخطاء عندما تخالف قواعد اللغة. يكتشفها المُترجم ويعترض
            على عملية الترجمة.
          </p>
          <p className="text-gray-200 leading-8 mt-2">
            &quot;مثال:&quot; جرّب تشغيل هذا الكود (مع الانتباه إلى الحرف الكبير
            في{" "}
            <code dir="ltr" className="text-[#FF9800]">
              Int
            </code>{" "}
            و{" "}
            <code dir="ltr" className="text-[#FF9800]">
              Printf
            </code>
            ):
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            {`#include <stdio.h>
Int main() {
    Printf("x = %d", x);
    return 0;
}`}
          </pre>
          <p className="text-gray-200 leading-8 mt-4">
            ستحصل على رسالة خطأ تقول شيئاً مثل &quot;&quot;x is not
            defined&quot;&quot; (x غير مُعرَّف) أو
            &quot;&quot;undeclared&quot;&quot;&quot; (غير مُعلَن). هذا لأنك لم
            تُعرِّف المتغير{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>
            ، والمُترجم يخبرك بالضبط بالخطأ وفي أي سطر حدث.
          </p>
          <p className="text-gray-200 leading-8 mt-4">&quot;مثال آخر:&quot;</p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            {`int x = 10
if (x > 9) {
    printf("hello");
}`}
          </pre>
          <p id="3" className="text-gray-200 leading-8 mt-4">
            هل لاحظت الخطأ؟ هناك فاصلة منقوطة (
            <code className="text-red-400">;</code>) مفقودة في نهاية السطر
            الأول! أخطاء الصياغة مثل هذه يسهل اكتشافها وإصلاحها، خاصةً عند
            استخدام بيئة تطوير متكاملة (IDE) أو محرر أكواد جيد.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            2. الأخطاء المنطقية (Logic Errors)
          </h3>
          <p className="text-gray-200 leading-8">
            في بعض الأحيان، يتم تجميع الكود ويكون كل شيء سلساً، ولكن عند تشغيله،
            لا يكون الناتج كما توقعت على الإطلاق! ما الذي حدث؟ المُترجم لا يمكنه
            المساعدة سحرياً في حل جميع مشاكلك.
          </p>
          <p className="text-gray-200 leading-8 mt-4">
            تُسمى هذه الأخطاء بالأخطاء المنطقية، وهي أخطاء تأتي بالكامل من
            **الخوارزمية** التي كتبتها. الكود صحيح نحوياً، لكنه خاطئ منطقياً.
          </p>

          <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">
            مثال على خطأ منطقي: تبديل القيم (Swapping Variables)
          </h4>
          <p className="text-gray-200 leading-8">
            لنفترض أنك تريد تبديل قيمتي متغيرين{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            و{" "}
            <code dir="ltr" className="text-[#FF9800]">
              y
            </code>
            . قد تفكر في القيام بما يلي:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            {`int x = 10, y = 20;

x = y; // الآن x = 20
y = x; // الآن y = 20 (قيمة x الجديدة)

printf("x = %d, y = %d\\n", x, y);`}
          </pre>
          <p className="text-red-400 font-semibold leading-8 mt-4">
            الناتج سيكون:{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x = 20, y = 20
            </code>
            . لم يتم التبديل!
          </p>
          <p className="text-gray-200 leading-8 mt-2">
            **ماذا حدث؟** لقد قمت بتعيين قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              y
            </code>{" "}
            إلى{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>
            ، فأصبحت قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            هي 20. ثم عندما قمت بتعيين قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            إلى{" "}
            <code dir="ltr" className="text-[#FF9800]">
              y
            </code>
            ، كانت قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            الجديدة هي 20 أيضاً. لقد فقدت القيمة الأصلية لـ{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            (وهي 10).
          </p>

          <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">
            الحل الصحيح: استخدام متغير مؤقت
          </h4>
          <p className="text-gray-200 leading-8">
            نحتاج أولاً إلى تخزين القيمة القديمة لـ{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            في متغير مؤقت (
            <code dir="ltr" className="text-[#FF9800]">
              temp
            </code>
            ) قبل تغييرها:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            {`int x = 10, y = 20, temp;

temp = x; // تخزين القيمة القديمة لـ x (10) في temp
x = y;    // تغيير قيمة x إلى قيمة y (تصبح x = 20)
y = temp; // تغيير قيمة y إلى القيمة القديمة لـ x (تصبح y = 10)

printf("x = %d, y = %d\\n", x, y);`}
          </pre>
          <p className="text-green-400 font-semibold leading-8 mt-4">
            الناتج الصحيح سيكون:{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x = 20, y = 10
            </code>
            .
          </p>

          <p className="text-gray-200 leading-8 mt-4">
            للتخفيف من الأخطاء المنطقية، قسّم مشكلتك الكبيرة إلى مشكلات أصغر قبل
            البدء في حلها! لا تأخذ المشكلة بأكملها دفعة واحدة فتغرق نفسك؛ يمكنك
            أن تضيع الكثير من الوقت في محاولة حلول عشوائية.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4">
            المُصحِّح (The Debugger)
          </h2>

          <p className="text-gray-200 leading-8">
            **التصحيح (Debugging)** هو العملية التي تبحث فيها عن
            &quot;العلة&quot; (Bug) في الكود التي تسبب لك الناتج غير المتوقع. قد
            تكون مفاجأة لك، لكن المبرمجين يقضون وقتاً في قراءة الكود وتصحيحه
            أكثر مما يقضونه في كتابة الكود! كتابة الكود سريعة، لكن التوصل إلى
            الحل الصحيح هو الجزء الصعب.
          </p>
          <p className="text-gray-200 leading-8 mt-4">
            يسمح لك المُصحِّح بإيقاف برنامجك مؤقتاً، والاطلاع على المتغيرات
            الخاصة بك، والتنقل عبر الكود سطرًا بسطر.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            نقاط التوقف (Breakpoints) — زر &quot;الإيقاف المؤقت&quot; الخاص بك
          </h3>
          <p className="text-gray-200 leading-8">
            **نقطة التوقف** هي علامة تضعها على سطر محدد من الكود. عندما يصل
            برنامجك إلى هذا السطر، فإنه يتوقف تلقائياً. لماذا هذا مفيد؟
          </p>
          <p className="text-gray-200 leading-8 mt-2">
            لأن الأخطاء عادة ما تختبئ في منتصف الكود، وليس في البداية أو
            النهاية. نقطة التوقف تجمّد البرنامج **مباشرة قبل حدوث شيء مشبوه**
            حتى تتمكن من فحص كل شيء:
          </p>
          <ul className="list-disc pr-6 text-gray-200 mt-2 space-y-2">
            <li>ما هي القيم التي تحملها المتغيرات.</li>
            <li>
              أي فرع من الجملة الشرطية{" "}
              <code dir="ltr" className="text-[#FF9800]">
                if
              </code>{" "}
              دخلت إليه.
            </li>
            <li>ما هي الدالة التي قمت باستدعائها للتو.</li>
            <li>ما إذا كانت حلقتك (Loop) تعمل بالعدد المتوقع من المرات.</li>
          </ul>

          <p className="text-gray-200 leading-8 mt-4">
            تتطلب اللغات المختلفة أدوات تصحيح مختلفة، لكن عملية التصحيح واحدة.
            في VS Code، قد يكون تصحيح C معقداً بعض الشيء، وإليك فيديو تعليمي حول
            كيفية القيام بذلك:
          </p>
          <a
          id="4"
            href="https://www.youtube.com/watch?v=NJYcRcqPyOw"
            target="_blank"
            className="text-[#FF9800] underline hover:text-[#FFB84D] transition block mt-2"
          >
            فيديو تعليمي: التصحيح (Debugging) في VS Code
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4">
            المُفسِّر (The Interpreter)
          </h2>

          <p className="text-gray-200 leading-8">
            يقرأ المُفسِّر أيضاً الكود الخاص بك ويترجمه إلى كود آلة، ولكن بدلاً
            من قراءة الملف بأكمله وإنشاء ملف قابل للتنفيذ، فإنه **يقرأ سطراً،
            يترجمه، وينفذه على الفور**، ثم ينتقل إلى السطر التالي!
          </p>
          <p className="text-gray-200 leading-8 mt-4">
            بهذه الطريقة، يمكنك الحصول على ردود فعل فورية ولا تضطر إلى انتظار
            تجميع البرنامج بأكمله أولاً.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            لغات مُفسَّرة (Interpreted Languages)
          </h3>
          <p className="text-gray-200 leading-8">
            بعض اللغات المُفسَّرة تشمل: Python، JavaScript، Ruby، و PHP.
          </p>
          <p className="text-gray-200 leading-8 mt-2">
            تعد المُفسِّرات رائعة للمبتدئين والتطوير السريع لأن العملية كالتالي:
          </p>
          <ul className="list-disc pr-6 text-gray-200 mt-2 space-y-2">
            <li>تكتب الكود.</li>
            <li>تُشغله على الفور.</li>
            <li>ترى ما حدث.</li>
            <li>تُصلح الخطأ.</li>
            <li>تُحاول مرة أخرى.</li>
          </ul>

          <p className="text-red-400 font-semibold leading-8 mt-4">
            لكن هناك جانب سلبي: اللغات المُترجَمة (مثل C) أسرع بكثير!
          </p>
          <p className="text-gray-200 leading-8 mt-2">
            بينما تقوم لغة C المُترجَمة بهذه الخطوات مرة واحدة فقط عند الإنشاء:
          </p>
          <ul className="list-disc pr-6 text-gray-200 mt-2 space-y-2">
            <li>قراءة الكود -&gt; تحليله -&gt; ترجمته -&gt; تنفيذه.</li>
          </ul>
          <p className="text-gray-200 leading-8 mt-2">
            يجب على المُفسِّر تكرار هذه الخطوات الثلاثة الأخيرة **في كل مرة يتم
            فيها تشغيل البرنامج**.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            تصحيح الأخطاء باستخدام مُفسِّر
          </h3>
          <p className="text-gray-200 leading-8">
            تصحيح الأخطاء في الكود المُفسَّر مختلف أيضاً:
          </p>
          <ul className="list-disc pr-6 text-gray-200 mt-2 space-y-2">
            <li>
              تظهر الأخطاء في اللحظة التي يحاول فيها المُفسِّر تشغيل السطر الذي
              يحتوي على المشكلة.
            </li>
            <li>
              لا تحصل على قائمة بالأخطاء في البداية (كما هو الحال مع المُترجم).
            </li>
            <li>
              يمكنك غالباً إيقاف المُفسِّر مؤقتاً، وفحص المتغيرات، وتعديل الكود
              بشكل تفاعلي.
            </li>
          </ul>
        </section>

        <div className="w-full flex justify-between text-black text-lg font-semibold border-t border-[#FF9800]/40 pt-6 mt-6">
          <Link
            href={"http://localhost:3000/paths/C-Course/7"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10 hover:bg-[#FFB84D] transition"
          >
            الدرس التالي
          </Link>
          <Link
            href={"http://localhost:3000/paths/C-Course/5"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10 hover:bg-[#FFB84D] transition opacity-80"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </main>
  );
}
