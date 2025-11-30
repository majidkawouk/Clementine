import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson4Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-12 px-6"
    >
  <NavBar/>
      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 4 (Operators)
        </h1>

        <section className="mb-12">
          <p id="1" className="text-gray-200 text-lg leading-8 mb-6">
            لقد ناقشنا المتغيرات في الدرس السابق، والآن سنتحدث عن Operators.
            تسمح لنا Operators بالوصول إلى الرياضيات، والمنطق، والشروط. وتُستخدم
            لأداء العمليات على المتغيرات والقيم الخاصة بنا. هناك العديد من
            الأنواع المختلفة من Operators، وسنناقش نوعين في هذا الدرس.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-6">
            Operators الحسابية (Arithmetic Operators)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            Operators الحسابية بسيطة إلى حد ما، فهي تسمح لنا بالقيام بالعمليات
            الرياضية الأساسية باستخدام المتغيرات والبيانات:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`// addition
int x = 24, y = -12;
printf("%d\\n", x + y);

// subtraction
printf("%d\\n", x - y);

// division
printf("%d\\n", x / y);

// multiplication
printf("%d\\n", x * y);

// modulus (remainder)
printf("%d\\n", x % y);`}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 id="2" className="text-2xl font-bold text-[#FF9800] mb-6">
            قسمة عشرية vs صحيحة
          </h2>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int a = 10;
int b = 3;
printf("%d\\n", a / b);   // قسمة الأعداد الصحيحة، النتيجة هي 3

double c = 10.0;
double d = 3.0;
printf("%f\\n", c / d);    // قسمة عشرية، النتيجة هي 3.333333`}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-6">
            تمرين: مساحة مثلث
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            الآن لبعض الممارسة، أريدك أن تكتب برنامجاً يحسب مساحة المثلث. يجب
            تخزين قاعدة المثلث وارتفاعه في متغيرات. يجب حساب المساحة على النحو
            التالي: area = base * height / 2;. يجب أن تكون كل هذه المتغيرات من
            نوع float (أو double). ثم اطبع النتيجة. قم بتغيير القاعدة والارتفاع
            وجرّب قيماً مختلفة. حاول أيضاً تغيير نوع المتغيرات وشاهد ما سيحدث.
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`float base = 5.0f;
float height = 3.0f;
float area = base * height / 2.0f;
printf("area = %f\\n", area);`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8">
            جرّب تغيّر الأنواع إلى double وراقب النتيجة.
          </p>
        </section>

        <section className="mb-12">
          <h2 id="2" className="text-2xl font-bold text-[#FF9800] mb-6">
            ترتيب العمليات (Order of Operations)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            عند وجود أكثر من عامل، C تتبع قواعد الأولوية. تماماً مثل الرياضيات،
            عندما يحتوي الحساب على أكثر من عامل واحد، تتبع لغة C قواعد ترتيب
            العمليات لتحديد الجزء الذي سيتم حسابه أولاً.
          </p>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            إليك بعض Operators الشائعة في C، من الأولوية الأعلى إلى الأدنى:
          </p>

          <div className="bg-[#001d33] rounded-lg p-6 mb-6 border-r-4 border-[#FF9800]">
            <ul className="text-gray-200 text-lg leading-8 space-y-2">
              <li>
                <strong className="text-[#FF9800]">() </strong> - الأقواس
              </li>
              <li>
                <strong className="text-[#FF9800]">*, /, % </strong> - الضرب،
                القسمة، المعامل (Modulus)
              </li>
              <li>
                <strong className="text-[#FF9800]">+, - </strong> - الجمع، الطرح
              </li>
              <li>
                <strong className="text-[#FF9800]">
                  &gt;, &lt;, &gt;=, &lt;={" "}
                </strong>{" "}
                - المقارنة
              </li>
              <li>
                <strong className="text-[#FF9800]">==, != </strong> - المساواة
              </li>
              <li>
                <strong className="text-[#FF9800]">&& </strong> - المنطقي AND
              </li>
              <li>
                <strong className="text-[#FF9800]">|| </strong> - المنطقي OR
              </li>
              <li>
                <strong className="text-[#FF9800]">= </strong> - الإسناد
              </li>
            </ul>
          </div>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int result1 = 10 - 2 + 5;    // (10 - 2) + 5 = 13
int result2 = 10 - (2 + 5);  // 10 - 7 = 3

printf("%d\\n", result1);
printf("%d\\n", result2);`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8">
            نصيحة: استخدم الأقواس لتوضيح النية ولتجنب الأخطاء.
          </p>
        </section>

        <section className="mb-12">
          <h2 id="3" className="text-2xl font-bold text-[#FF9800] mb-6">
            عامل الإسناد (Assignment Operator)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            يُستخدم عامل الإسناد لتعيين القيم للمتغيرات، ويبدو الأمر بسيطاً
            ومباشراً حتى ترى شيئاً كهذا:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int x = 15;
x = x + 3;
printf("%d", x); // يطبع 18`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            في الرياضيات، سيكون هذا كارثة كاملة، لكن هذه ليست رياضيات، إنها
            برمجة. أساساً، نحن نعين لـ x قيمة جديدة باستخدام عامل الجمع. لا
            تجاهل الجانب الأيسر من عامل الإسناد وركز على اليمين. كانت قيمة x هي
            15، لذا فإن 15 + 3 = 18، نقوم بتعيين هذه القيمة لمتغيرنا x وتصبح 18!
            بسيط.
          </p>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            لنجرب شيئاً آخر:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int x = 15, y = 16;
y = y + 2;
x = y;
y = x * 10;
x = y / 3;
printf("x = %d, y = %d", x + 1, y - 2);`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            حاول تخمين الإخراج قبل تشغيل هذا الكود. يمكنك أيضاً القيام بشيء
            كهذا: x += 2; هذا هو نفسه: x = x + 2; إنها مجرد طريقة أقصر لكتابة
            الأخيرة، لا يهم أي واحدة تستخدمها، ولكن من الجيد أن تلتزم بواحدة
            طوال الكود الخاص بك.
          </p>
        </section>

        <section className="mb-12">
          
          <p className="text-gray-200 text-lg leading-8 mb-6">
            التعيين يخزن نتيجة تعبير في متغير. هناك صيغة مختصرة:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int x = 15;
x = x + 3; // 18
x += 2;    // نفس الشي: x = x + 2`}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-6">
            عاملا الزيادة والنقصان (Increment and Decrement)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            هناك أيضاً عاملان حسابيان آخران لم نناقشهما بعد. عاملا الزيادة
            والنقصان يقومان بما يدل عليه الاسم، وصيغتهما كالتالي:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int x = 15; 
++x; // زيادة (increment)
printf("%d\\n", x); // يطبع 16
--x; // نقصان (decrement)
printf("%d", x); // يطبع 15`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            لاحظ أن زيادة أو نقصان متغير يغيره إلى الأبد.
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`printf("%d\\n", ++x); // يطبع 16 
printf("%d", x); // لا يزال يطبع 16`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            لذا فهو مختلف عما إذا كتبت:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`printf("%d\\n", x + 1); // يطبع 16
printf("%d", x); // يطبع 15`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            يقوم عاملا الزيادة والنقصان بتعيين القيمة الجديدة للمتغير الذي يتم
            استخدامه عليه، فـ x = x + 1 أو x+= 1 هو نفس ++x.
          </p>

          <h3 className="text-xl font-semibold text-[#FF9800] mb-4">
            استخدام العامل قبل وبعد المتغير
          </h3>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            اكتب ما يلي في الكود الخاص بك:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg mb-6 text-left overflow-x-auto border border-[#FF9800]/30"
          >
            <code>{`int x = 15;
printf("%d", x++);`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            قم بتشغيل هذا الكود وتحقق من الإخراج. حسناً، لم يتغير شيء؟ لماذا؟
            حاول طباعة x وحده بعد printf() الأولى وقم بتشغيل البرنامج. الآن
            تغير؟ ما الذي يحدث؟
          </p>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            كما ترى، استخدام هذا العامل قبله وبعده له تأثيرات مختلفة. استخدامه
            قبل المتغير يزيد قيمة المتغير أولاً ثم يستخدم المتغير المحدّث.
            استخدامه بعد المتغير، ومع ذلك، يستخدم المتغير العادي كما هو ثم يزيد
            قيمة المتغير، لذلك في السطر التالي سترى المتغير المحدّث بعد الزيادة.
            هذا ينطبق على عامل النقصان أيضاً.
          </p>
        </section>

        <section className="mb-12">
          <h2 id="4" className="text-2xl font-bold text-[#FF9800] mb-6">
            واجب (Assignment)
          </h2>

          <div className="bg-[#001d33] rounded-lg p-6 mb-6 border-r-4 border-[#FF9800]">
            <h3 className="text-lg font-semibold text-[#FF9800] mb-4">
              مطالعة مهمة
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              اقرأ المقالة التالية وحاول تخمين إخراج الكود. حاول قراءة الأمثلة
              الأخرى الموجودة في لغات برمجة مختلفة، لاحظ كيف لا يوجد فرق في
              Operators.
            </p>
            <p className="text-gray-200 text-lg leading-8">
              <a
                href="https://www.programiz.com/article/increment-decrement-operator-difference-prefix-postfix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF9800] underline hover:text-[#FFB84D]"
              >
                https://www.programiz.com/article/increment-decrement-operator-difference-prefix-postfix
              </a>
            </p>
          </div>

          <div className="bg-[#001d33] rounded-lg p-6 mb-6 border-r-4 border-[#FF9800]">
            <h3 className="text-lg font-semibold text-[#FF9800] mb-4">
              ملاحظة عن التعليقات
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              ربما تتساءل ماذا تفعل الأسطر التي تبدأ بـ //. تسمى هذه التعليقات
              (comments)، التعليقات ليست جزءاً فعلياً من الكود الخاص بك،
              وتُستخدم للشرح أو لكتابة شيء لك أو لفريقك كملاحظة، سنتحدث عن
              الاستخدام الفعال للتعليقات في الدروس القادمة.
            </p>
            <p className="text-gray-200 text-lg leading-8">
              اقرأ عن التعليقات هنا:{" "}
              <a
                href="https://www.w3schools.com/c/c_comments.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF9800] underline hover:text-[#FFB84D]"
              >
                https://www.w3schools.com/c/c_comments.php
              </a>
            </p>
          </div>
        </section>

        <section className="mb-12 ">
          <div className="p-4 bg-yellow-900/40 border-r-4 border-[#FF9800] rounded-lg">
            <p className="text-gray-200 text-lg leading-8 mb-6">
              إليك 3 تمارين نموذجية لتقوم بها، اكتب الإخراج على الورق أو في
              الملاحظات قبل تشغيل الكود، قم بتشغيل الكود وقارن الإخراج بالإخراج
              الخاص بك، ولا تقم بنسخ ولصق الكود، حاول كتابته بنفسك لتعتاد عليه.
            </p>

            <div className="space-y-6">
              <div className="bg-[#001d33] p-6 rounded-lg border border-[#FF9800]/30">
                <h4 className="text-lg font-semibold text-[#FF9800] mb-4">
                  التمرين الأول
                </h4>
                <pre
                  dir="ltr"
                  className="text-[#FF9800] text-left overflow-x-auto"
                >
                  <code>{`int a = 8, b = 4;
printf("a + b = %d\\n", a + b);
printf("a - b = %d\\n", a - b);
printf("a * b = %d\\n", a * b);
printf("a / b = %d\\n", a / b);

a++;
b--;

printf("a after ++ = %d\\n", a);
printf("b after -- = %d\\n", b);`}</code>
                </pre>
              </div>

              <div className="bg-[#001d33] p-6 rounded-lg border border-[#FF9800]/30">
                <h4 className="text-lg font-semibold text-[#FF9800] mb-4">
                  التمرين الثاني
                </h4>
                <pre
                  dir="ltr"
                  className="text-[#FF9800] text-left overflow-x-auto"
                >
                  <code>{`int x = 5, y = 3;

int r1 = x++ * ++y;
int r2 = (x + y++) - (++x * 2);

printf("r1 = %d\\n", r1);
printf("r2 = %d\\n", r2);
printf("x = %d, y = %d\\n", x, y);`}</code>
                </pre>
              </div>

              <div className="bg-[#001d33] p-6 rounded-lg border border-[#FF9800]/30">
                <h4 className="text-lg font-semibold text-[#FF9800] mb-4">
                  التمرين الثالث
                </h4>
                <pre
                  dir="ltr"
                  className="text-[#FF9800] text-left overflow-x-auto"
                >
                  <code>{`int a = 2, b = 7, c = 3;
int part1 = a++ + b;
int part2 = ++b * c--;
int part3 = (a + b + c) * ++a;
int result = part1 + part2 - part3;

printf("result = %d\\n", result);
printf("a = %d, b = %d, c = %d\\n", a, b, c);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-between text-black text-lg font-semibold">
          <Link
            href={"http://localhost:3000/paths/C-Course/5"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس التالي
          </Link>
          <Link
            href={"http://localhost:3000/paths/C-Course/3"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </main>
  );
}
