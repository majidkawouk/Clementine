import Link from "next/link";

export default function Lesson7Page() {
  return (
    <div dir="rtl" className="flex">
      <nav className="fixed right-0 top-1/4 w-52 bg-[#001D33] p-4 rounded-l-lg shadow-2xl border-r-4 border-[#FF9800] hidden lg:block z-10">
        <h3 className="text-xl font-bold text-[#FF9800] mb-4 border-b border-[#FF9800]/50 pb-2">
          جدول المحتويات
        </h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#introduction"
              className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
            >
              مقدمة
            </a>
          </li>
          <li>
            <a
              href="#while-loop"
              className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
            >
              حلقة While
            </a>
          </li>
          <li>
            <a
              href="#do-while-loop"
              className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
            >
              حلقة Do-While
            </a>
          </li>
          <li>
            <a
              href="#for-loop"
              className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
            >
              حلقة For
            </a>
          </li>
          <li>
            <a
              href="#keywords"
              className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
            >
              Break و Continue
            </a>
          </li>
          <li>
            <a
              href="#assignment"
              className="text-gray-300 hover:text-[#FF9800] transition duration-200 text-sm"
            >
              الواجب
            </a>
          </li>
        </ul>
      </nav>
      <main
        dir="rtl"
        className="min-h-screen bg-[#003366] text-gray-100 py-12 px-6 w-full lg:mr-52"
      >
        <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
          <h1
            id="introduction"
            className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4"
          >
            الدرس 7: الحلقات (<span dir="ltr">Loops</span>)
          </h1>
          <section className="mb-12">
            <h2
              id="introduction"
              className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2"
            >
              مقدمة عن الحلقات
            </h2>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              الحلقات (<span dir="ltr">Loops</span>) تسمح لنا بتنفيذ قطعة من
              الكود بشكل **متكرر** تحت شروط معينة.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              تخيل أنك تريد طباعة شيء ما 10 مرات قد تعتقد أنني سأقوم فقط بالنسخ
              واللصق بسيط حقًا.. ماذا عن 100 لا 10000 مرة! النسخ واللصق لذلك
              سيستغرق الكثير من الجهد ويجعل الكود الخاص بك ضخمًا وغير قابل
              للقراءة **بدلاً من ذلك** نستخدم الحلقات!
            </p>
          </section>
          <section id="while-loop" className="mb-12">
            <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
              حلقة <span dir="ltr">while</span>
            </h2>

            <code>
              while(condition){" "}
              {
                // block of code
              }
            </code>

            <p className="text-gray-200 text-lg leading-8 mb-6">
              ترى حلقة <span dir="ltr">while</span> تستمر في تنفيذ كتلة الكود
              **طالما أن الشرط هو، لقد خمنت ذلك: صحيح!**
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              مثال:
            </h3>
            <code>
              {`
int x = 0;
while(x < 10) {
    printf("%d\\n", x);
    x++;	
}
printf("x after the loop: x =%d\\n", x);
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              حلقة <span dir="ltr">while</span> تتحقق من الشرط أولاً وإذا كان
              صحيحًا تنفذ كتلة الكود بداخلها، هذه الكتلة تطبع قيمة{" "}
              <span dir="ltr">x</span> ثم تزيد <span dir="ltr">x</span> بمقدار
              1.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              تذكر أن قيمة <span dir="ltr">x</span> الجديدة هي الآن 1.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              الآن تتحقق حلقة <span dir="ltr">while</span> من الشرط مرة أخرى،{" "}
              <span dir="ltr">x</span> (والتي هي 1) لا تزال أقل من 10 لذا تدخل
              كتلة الكود تطبع قيمتها وتزيدها مرة أخرى <span dir="ltr">x</span>{" "}
              هي الآن 2 وهكذا.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              حتى تصل <span dir="ltr">x</span> إلى 10 تتحقق حلقة{" "}
              <span dir="ltr">while</span> من الشرط وبما أنه الآن **خاطئ** فلن
              تدخل كتلة الكود بعد الآن ويستمر برنامجك بشكل طبيعي.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              إنها تعمل مثل عبارات <span dir="ltr">if</span> لذا إذا كان الشرط
              الذي تحصل عليه **خاطئًا** فلن تنفذ كتلة الكود بداخلها.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              ملاحظة: الحلقات اللانهائية
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              ملاحظة: الحلقات اللانهائية هي شيء، إذا أدخلت شرطًا سيكون صحيحًا
              إلى الأبد فلن تتوقف الحلقة عن التنفيذ حتى تجبر البرنامج على
              الإغلاق عن طريق كتابة <span dir="ltr">ctrl + c</span> في الطرفية.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              إليك مثال على حلقة لانهائية
            </p>
            <code>
              {`
int x = 0;
while(x < 10) 
    printf("%d\\n", x);	
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              هذه الحلقة تعمل إلى الأبد لأننا **لا** نزيد{" "}
              <span dir="ltr">x</span> في أي مكان أو نغير قيمتها بحيث تجعل الشرط
              **خاطئًا** وبما أن <span dir="ltr">x</span> ستبقى كذلك فإن الشرط
              يكون دائمًا صحيحًا مما يجعلها حلقة لانهائية.
            </p>
          </section>
          ---
          <section id="do-while-loop" className="mb-12">
            <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
              حلقة <span dir="ltr">do while</span>
            </h2>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              قلنا أن حلقة <span dir="ltr">while</span> تتحقق من الشرط أولاً ثم
              تنفذ كتلة الكود إذا كان هذا الشرط صحيحًا.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              ولكن إذا كان الشرط الذي تتحقق منه خاطئًا في البداية فلن تنفذ حلقة{" "}
              <span dir="ltr">while</span> أبدًا. هنا تبرز حلقة{" "}
              <span dir="ltr">do-while</span>.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              حلقة <span dir="ltr">do while</span> تنفذ كتلة الكود أولاً لمرة
              واحدة ثم تتحقق من الشرط لتقرر ما إذا كانت تريد تنفيذه مرة أخرى.
            </p>

            <code>
              {`
do {
// some code here
} while(condition);
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              تُستخدم حلقة <span dir="ltr">do while</span> عندما لا تكون متأكدًا
              مما إذا كان الشرط الذي تتحقق منه صحيحًا أم لا ولكنك لا تزال تريد
              تنفيذ كتلة من الكود بشكل متكرر.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              مثال:
            </h3>
            <code>
              {`
int x = 10;
do {
    printf("%d\\n", x);
} while(x < 10);
`}{" "}
            </code>

            <p className="text-gray-200 text-lg leading-8 mb-6">
              شاهد، إذا كنت تستخدم حلقة <span dir="ltr">while</span> في هذا
              السيناريو فلن يتم تنفيذ كتلة الكود أبدًا لأنها تتحقق من الشرط
              أولاً ولكن بما أن هذه حلقة <span dir="ltr">do while</span> فإنها
              تنفذها لمرة واحدة ثم تتحقق من الشرط وبما أنه خاطئ فلن تنفذه مرة
              أخرى.
            </p>
          </section>
          ---
          <section id="for-loop" className="mb-12">
            <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
              حلقة <span dir="ltr">for</span>
            </h2>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              تُستخدم حلقة <span dir="ltr">for</span> إذا كنت تريد التحكم في عدد
              المرات التي يجب أن تتكرر فيها الحلقة.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              تأخذ حلقة <span dir="ltr">for</span> 3 تعابير كل واحد مفصول بفاصلة
              منقوطة.
            </p>

            <code>
              {`
for(expression1 ; expression2; expression3) {
// block of code
}
`}
            </code>
            <ul className="list-disc list-inside pr-4 text-gray-200 text-lg leading-8 mb-6 space-y-2">
              <li>
                <span dir="ltr">Expression 1</span> يتم تنفيذه (مرة واحدة) قبل
                تنفيذ كتلة الكود.
              </li>
              <li>
                <span dir="ltr">Expression 2</span> يحدد الشرط لتنفيذ كتلة
                الكود.
              </li>
              <li>
                <span dir="ltr">Expression 3</span> يتم تنفيذه (في كل مرة) بعد
                تنفيذ كتلة الكود.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              إليك مثال:
            </h3>
            <code>
              {`
int i, sum = 0;
for(i = 1 ; i <= 100 ; i++) {
    sum += i;
}
printf("sum = %d\\n", sum);
`}
            </code>

            <p className="text-gray-200 text-lg leading-8 mb-6">
              التعبير الأول يعمل مرة واحدة لتعيين <span dir="ltr">i</span> إلى
              1، والثاني هو الشرط الذي يتم التحقق منه بعد كل تكرار، والتعبير
              الثالث يتم تشغيله بعد كل تكرار وبعد كل تحقق من الشرط.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              الكود الذي كتبناه يحسب المجموع من 1 إلى 100 عن طريق إضافة قيمة{" "}
              <span dir="ltr">i</span> إلى متغير يسمى <span dir="ltr">sum</span>{" "}
              ثم زيادة <span dir="ltr">i</span> بمقدار 1 بعد كل تكرار.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              تخطي التعبير الأول:
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              **لا** يُطلب منك كتابة كل تعبير في حلقة <span dir="ltr">for</span>{" "}
              ولكن يجب كتابة المساحة المخصصة للتعبير هكذا:
            </p>
            <code>
              {`
for( ; i < 10; i++) {
// code here
}
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              نحن **لم** نعطها التعبير الأول، ولكننا ما زلنا كتبنا الفاصلة
              المنقوطة لها، فحلقة <span dir="ltr">for</span> تستخدمها أساسًا
              لتحديد أي تعبير هو أي.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              يمكنك التسبب في حلقة لانهائية باستخدام حلقة{" "}
              <span dir="ltr">for</span> أيضًا هكذا:
            </p>
            <code>
              {`
for(;;) {
// code here that runs infinitely
}
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              حلقة <span dir="ltr">for</span> **لا** تحتوي على شرط للتحقق مما
              يجعلها تعمل إلى الأبد.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              يمكنك أيضًا استخدام حلقة <span dir="ltr">for</span> كسطر واحد:
            </p>
            <code>
              {`
for(i = 0; i < 100 ; i++);
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              هذا **لا** يأخذ كتلة من الكود ويقوم فقط بزيادة{" "}
              <span dir="ltr">i</span> إلى 100.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              حلقات <span dir="ltr">for</span> مثل هذه يمكن استخدامها لعمل
              انتظار مشغول حيث تكتب حلقة كبيرة جدًا لعمل تأثير تأخير.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              حلقة <span dir="ltr">for</span> مقابل حلقة{" "}
              <span dir="ltr">while</span>:
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              يمكنك استخدام كليهما لأي مهمة تتطلب منك التكرار ولكن الفرق الرئيسي
              هو القراءة. تُستخدم حلقات <span dir="ltr">for</span> بشكل عام
              عندما تعرف عدد المرات التي ستعمل فيها الحلقة نوعًا ما مثل مؤقت،
              أما حلقة <span dir="ltr">while</span> فهي عندما **لا** تعرف عدد
              المرات التي ستعمل فيها الحلقة ولكن لديك شرط متى تتوقف. ولكن هناك
              حالات محددة عندما يؤدي استخدام إحداها في السيناريو الصحيح إلى كود
              أكثر قابلية للقراءة أثناء كتابة أسطر أقل من الكود.
            </p>
          </section>
          ---
          <section id="keywords" className="mb-12">
            <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
              كلمتا <span dir="ltr">break</span> و{" "}
              <span dir="ltr">continue</span>
            </h2>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              <span dir="ltr">break</span> و <span dir="ltr">continue</span>{" "}
              تسمح لنا بإجبار الحلقات إما على التوقف تمامًا أو تخطي تكرار.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              كلمة <span dir="ltr">break</span>:
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              ربما تكون قد رأيت كلمة <span dir="ltr">break</span> من قبل وذلك في
              عبارة <span dir="ltr">switch-case</span>. تُستخدم كلمة{" "}
              <span dir="ltr">break</span> في الحلقات لإغلاقها بالكامل.
            </p>
            <code>
              {`
int i = 0;
while(true) {
    if(i == 10) {
        printf("i has reached %d\\n", i);
        break;
    }
    i++;
}
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              ترى هنا هذه الحلقة يجب أن تستمر إلى الأبد بما أن حلقة{" "}
              <span dir="ltr">while</span> تحصل دائمًا على عبارة **صحيحة** ولكن
              يمكنك استخدام <span dir="ltr">break</span> لـ &quot;كسر الحلقة&quot; حرفيًا.
              وضعنا شرط <span dir="ltr">if</span> يقول أنه عندما تصل{" "}
              <span dir="ltr">i</span> إلى 10 يجب أن أطبع رسالة ثم أخرج أو أكسر
              الحلقة.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              كلمة <span dir="ltr">continue</span>:
            </h3>
            <code>
              {`
int i;
for( i = 1; i <= 20 ; i++) {
    if(i % 2 != 0 ) {
        continue;
    }
    printf("%d \\n", i);
}
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              لنمشي خلال هذا الكود، أولاً نقوم بإنشاء حلقة{" "}
              <span dir="ltr">for</span> تعمل من 1 إلى 20.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              ثم نتحقق من متغير <span dir="ltr">i</span> الخاص بنا إذا كان عددًا
              فرديًا (غير قابل للقسمة على 2) فإننا نتابع.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              <span dir="ltr">Continue</span> تقول للحلقة أن تتخطى هذا التكرار،
              لذلك عندما يكون <span dir="ltr">i</span> عددًا فرديًا يتم تنفيذ
              شرط <span dir="ltr">if</span> ونتابع تخطي التكرار وطباعة{" "}
              <span dir="ltr">i</span>.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              إذا كان <span dir="ltr">i</span> عددًا زوجيًا فإن شرط{" "}
              <span dir="ltr">if</span> **لا** يتم تنفيذه أبدًا ويمكننا طباعة
              الرقم.
            </p>

            <code>
              {`
// block of code here
continue;
// this block of code never executes!
`}
            </code>
            <p className="text-gray-200 text-lg leading-8 mb-6">
              <span dir="ltr">Continue</span> هي مثل القول للحلقة أن هذه هي
              نهاية التكرار اذهب إلى التكرار التالي.
            </p>
          </section>
          ---
          <section id="assignment" className="mb-12 ">
            <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
              الواجب (<span dir="ltr">Assignment</span>)
            </h2>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              اقرأ وقم بالترميز (code along) من خلال كل هذه **ولا تنس** القيام
              بالتمارين في النهاية!
            </p>
            <div className="p-4 bg-yellow-900/40 border-r-4 border-[#FF9800] rounded-lg">
              <ul className="list-disc list-inside pr-4 mb-6 space-y-2">
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_while_loop.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_while_loop.php
                  </a>
                </li>
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_while_loop.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_while_loop.php
                  </a>
                </li>
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_while_loop_reallife.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_while_loop_reallife.php
                  </a>
                </li>
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_for_loop.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_for_loop.php
                  </a>
                </li>
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_for_loop_nested.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_for_loop_nested.php
                  </a>
                </li>
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_for_loop_reallife.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_for_loop_reallife.php
                  </a>
                </li>
                <li className="text-gray-200 text-lg leading-8">
                  <a
                    href="https://www.w3schools.com/c/c_break_continue.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-200 underline"
                    dir="ltr"
                  >
                    https://www.w3schools.com/c/c_break_continue.php
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              أريدك أن تكتب برنامجًا يتحقق مما إذا كان الرقم هو **رقم أولي**
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              حاول أن تجد طريقة لمعرفة ما إذا كان يمكن قسمته على أي رقم آخر.
            </p>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              تذكير سريع بأنه **يجب عليك** التكرار فقط حتى نصف هذا الرقم لأن أي
              شيء أكبر من النصف سيؤدي إلى رقم كسري ولا يمكن قسمته بالكامل.
            </p>
          </section>
          <div className="w-full flex justify-between text-black text-lg font-semibold">
            <Link
              href={"http://localhost:3000/paths/C-Course/10"}
              className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10 opacity-50"
            >
              الدرس التالي
            </Link>
            <Link
              href={"http://localhost:3000/paths/C-Course/10"}
              className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
            >
              الدرس السابق
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
