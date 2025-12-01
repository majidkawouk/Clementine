import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson3Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-12 px-6"
    >
     <NavBar />
      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 3 — المتغيرات (Variables)
        </h1>

        <section id="1" className="mb-8 text-gray-200 leading-relaxed">
          <div>
            <p className="text-lg">
              المتغيرات هي أدواتك الأساسية لتخزين ومعالجة العديد من أشكال
              البيانات، بما في ذلك الأعداد، النصوص، المصفوفات، الملفات وحتى
              القيمة الفارغة. في هذا الدرس سنستكشف عالم المتغيرات ونتعلم لماذا
              هي مهمة للغاية ولماذا تُستخدم في كل مكان تقريباً، ولكن قبل ذلك
              نحتاج إلى فهم
              <code dir="ltr" className="text-[#FF9800]">
                data types
              </code>
              .
            </p>
          </div>
          <div className="mt-10">
            <div className="text-lg">
              قبل إعلان المتغير، تحتاج أولاً إلى تحديد النوع، ويبدو الشكل
              كالتالي:
              <div>
                <code
                  dir="ltr"
                  className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
                >
                  Some_type variable_name = some_value;
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 p-4 ">
          <h2
            id="2"
            className="font-bold text-xl text-[#FF9800] mt-3 border-r-4 border-[#FF9800] pr-2"
          >
            الأعداد الصحيحة (Integers)
          </h2>
          <div className="pt-2 border-b border-gray-700 pb-4">
            <p className="mb-3 text-gray-300">
              لنبدأ بالأعداد الصحيحة (Integers) الأعداد الصحيحة تشغل من 2 إلى 4
              بايت من الذاكرة وهي في الأساس مجرد أرقام، أرقام كاملة، مما يعني
              أنه لا يمكن أن تكون هناك كسور عشرية. على سبيل المثال 21. الإعلان
              عن عدد صحيح سهل للغاية ويبدو كالتالي: هل تتذكر أول كود C لنا؟ هذه
              هي المرة الأخيرة التي سنقوم فيها بتضمينه في دروسنا، لذا إذا رأيت
              كتلة من التعليمات البرمجية لا تحتوي على الكود الأساسي (ملفات الرأس
              والدالة الرئيسية) فاعلم أن هذه مجرد مقتطفات من التعليمات البرمجية
              (أجزاء من الكود)
            </p>
          </div>
          <code
            dir="ltr"
            className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left ltr"
          >
            #include &lt;stdio.h&gt;
            <br />
            &nbsp; Int main() {"{"}
            <br />
            &nbsp; &nbsp; Int my_first_variable = 21;
            <br />
            &nbsp; &nbsp; Return 0;
            <br />
            &nbsp; &nbsp; {"}"}
          </code>

          <p className="mt-4 text-gray-300">
            نكتب{" "}
            <code
              dir="ltr"
              className="bg-[#001f3d] text-[#FF9800] px-1 rounded"
            >
              int
            </code>{" "}
            (بمعنى عدد صحيح) قبل الإعلان عن اسم المتغير الخاص بنا، ثم إما نعطيه
            أو لا نعطيه قيمة.
            <br />
            <code
              dir="ltr"
              className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
            >
              Int some_name;
            </code>
            <code
              dir="ltr"
              className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
            >
              Int some_other_name = 4123;
            </code>
            <code
              dir="ltr"
              className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
            >
              Int blah_blah_blah_blah = 321;
            </code>
            <br />
            حاول الإعلان عن بعض المتغيرات بنفسك.
          </p>
        </section>

        <section className="mb-8 text-gray-200 leading-relaxed space-y-6">
          <div className="pt-2 border-b border-gray-700 pb-4">
            <h3 className="font-bold text-xl text-[#FF9800] mt-3 border-r-4 border-[#FF9800] pr-2">
              الأعداد العائمة (Floats)
            </h3>
            <p className="mt-3">
              بالانتقال إلى الأعداد العائمة (floats)، تشغل الأعداد العائمة 4
              بايت من الذاكرة وهي أيضاً أرقام ولكن يمكن أن تحتوي على كسور عشرية.
              الإعلان عن عدد عائم:
              <br />
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Float my_float = 2.123;
              </code>
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Float f = 3;
              </code>
            </p>
          </div>

          <div className="pt-2 border-b border-gray-700 pb-4">
            <h3 className="font-bold text-xl text-[#FF9800] mt-4 border-r-4 border-[#FF9800] pr-2">
              الأعداد المضاعفة (Doubles)
            </h3>
            <p className="mt-3">
              الأعداد المضاعفة (Doubles) هي أيضاً مثل الأعداد العائمة ولكنها
              تشغل 8 بايت من الذاكرة وتخزن ما يصل إلى 15 رقماً عشرياً. الإعلان
              عن الأعداد المضاعفة:
              <br />
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Double my_double = 2.312412;
              </code>
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Double you_get_the_idea;
              </code>
              الفرق بين الأعداد المضاعفة والأعداد العائمة هو أن الأعداد المضاعفة
              تُستخدم لإجراء حسابات أكثر دقة بكثير، ولكن نظراً لأنها تأخذ ذاكرة
              أكبر، فإنها لا تُستخدم في كل مكان. إذا كنت تريد نتيجة بسيطة لا
              تحتاج إلى دقة قصوى، استخدم الأعداد العائمة (floats). إذا كنت تريد
              قيماً دقيقة، استخدم الأعداد المضاعفة (doubles).
            </p>
          </div>

          <div className="pt-2 border-b border-gray-700 pb-4">
            <h3 className="font-bold text-xl text-[#FF9800] mt-4 border-r-4 border-[#FF9800] pr-2">
              حرف واحد (Char)
            </h3>
            <p className="mt-3">
              الأحرف (Chars): الحرف (
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                char
              </code>
              ) هو 1 بايت من الذاكرة ويخزن حرفاً واحداً. الإعلان عن الأحرف:
              <br />
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Char my_char = &apos;a&apos;;
              </code>
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Char number_char = &apos;2&apos;;
              </code>
              لاحظ أن الأحرف يتم تخزينها داخل علامات اقتباس مفردة. لاحظ أيضاً أن
              المتغير{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                number_char
              </code>{" "}
              يخزن 2 كحرف وليس كرقم، مما يعني أنه لا يمكنك إجراء عمليات عليه مثل
              العدد الصحيح العادي، كما أن لهما أحجاماً مختلفة.
            </p>
          </div>

          <div id="3" className="pt-2 border-b border-gray-700 pb-4">
            <h3 className="font-bold text-xl text-[#FF9800] mt-4 border-r-4 border-[#FF9800] pr-2">
              تسمية المتغيرات
            </h3>
            <p className="mt-3">
              تسمية المتغيرات: لتسمية المتغيرات أيضاً قواعد، كنا نسميها ما نشاء
              إلى حد ما، ولكن حاول الإعلان عن متغير بالاسم &apos;main&apos;
              وشاهد ما سيحدث. أساساً، لا يمكنك إعطاء متغيراتك كلمات مفتاحية
              (keywords) خاصة بلغة C، مما يعني أن أي شيء تم تعريفه لا يمكن
              تسميته كمتغير. إليك قواعد تسمية المتغيرات:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 bg-[#001f3d]/50 p-4 rounded-lg">
              <li>
                يمكن أن تحتوي الأسماء على أحرف، وأرقام، وشرطات سفلية (
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  _
                </code>
                ).
              </li>
              <li>
                يجب أن تبدأ الأسماء بحرف أو شرطة سفلية (
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  _
                </code>
                ).
              </li>
              <li>
                الأسماء حساسة لحالة الأحرف ({" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  myVar
                </code>{" "}
                و{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  myvar
                </code>{" "}
                هما متغيران مختلفان).
              </li>
              <li>
                لا يمكن أن تحتوي الأسماء على مسافات بيضاء أو أحرف خاصة مثل{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  !
                </code>
                ,{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  #
                </code>
                ,{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  %
                </code>
                , إلخ.
              </li>
              <li>
                لا يمكن استخدام الكلمات المحجوزة (مثل{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  int
                </code>
                ) كأسماء.
              </li>
            </ul>
          </div>

          <div className="pt-2 border-b border-gray-700 pb-4">
            <h3 className="font-bold text-xl text-[#FF9800] mt-4 border-r-4 border-[#FF9800] pr-2">
              محددات التنسيق (Format Specifiers)
            </h3>
            <p className="mt-3">
              محددات التنسيق (Format specifiers): تُستخدم محددات التنسيق مع
              الدالة{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                printf()
              </code>{" "}
              (ودوال أخرى) وهي في الأساس طريقة لإخبار المترجم بالمتغير الذي
              ستقوم بطباعته في هذه الحالة. تبدأ محددات التنسيق بعلامة{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                %
              </code>{" "}
              وتتبعها حرف واحد أو أكثر.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 bg-[#001f3d]/50 p-4 rounded-lg">
              <li>
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  %d
                </code>{" "}
                للعدد الصحيح (
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  int
                </code>
                )
              </li>
              <li>
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  %f
                </code>{" "}
                للعدد العائم (
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  float
                </code>
                )
              </li>
              <li>
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  %lf
                </code>{" "}
                للعدد المضاعف (
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  double
                </code>
                )
              </li>
              <li>
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  %c
                </code>{" "}
                للحرف (
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  char
                </code>
                )
              </li>
            </ul>

            <pre
              dir="ltr"
              className="bg-[#001f3d] border border-[#FF9800]/50 text-[#FF9800] p-4 rounded-lg mt-5 text-left overflow-x-auto font-mono"
            >
              {`int my_int = -12;
float my_float = 23.2;
double my_double = 32.432;
char my_char = 'A';

printf("here is my_int: %d\\n", my_int);
printf("here is my_float: %f\\n", my_float);
printf("here is my_double: %lf\\n", my_double);
printf("here is my_char: %c\\n", my_char);`}
            </pre>

            <p className="mt-4">
              يقوم الCompiler بفحص المحدد وبعد علامات الاقتباس يأخذ المتغير الذي
              وضعته ويطبعه. يمكنك أيضاً القيام بشيء كهذا:
              <br />
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Printf(“here is my_int: %d, here is another int %d, here is
                my_float: %f”, my_int, 312, my_float);
              </code>
              يتم تحديد التسلسل بناءً على أي واحد كتبته أولاً، لذا إذا قمت
              بتبديل{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                my_int
              </code>{" "}
              بالرقم الذي كتبناه، فسيكون هو أول ما يتم طباعته. يمكنك طباعة
              محددات التنسيق دون الإعلان عن متغيرات.
            </p>
          </div>

          <div className="pt-2">
            <h3 className="font-bold text-xl text-[#FF9800] mt-4 border-r-4 border-[#FF9800] pr-2">
              الإعلان عن متغيرات متعددة
            </h3>
            <p className="mt-3">
              الإعلان عن متغيرات متعددة: يمكنك أساساً الإعلان عن متغيرات متعددة
              من نفس النوع في نفس السطر حتى لا تضطر إلى كتابة نفس النوع مراراً
              وتكراراً كما يلي:
              <br />
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Int first_int = 12, second_int, third_int=1321;
              </code>
              <code
                dir="ltr"
                className="block bg-[#001f3d] text-[#FF9800] p-4 rounded-lg mt-3 overflow-x-auto text-left "
              >
                Float first_float, second_float, third_float;
              </code>
              يتم فصل كل واحد بفاصلة (لا تنس الفاصلة المنقوطة{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                ;
              </code>{" "}
              في نهاية كل سطر!)
            </p>
            <p className="mt-4 p-3 bg-blue-900/40 rounded-lg border-r-4 border-blue-400">
              هذا أساساً كل ما تحتاج لمعرفته حول المتغيرات في الوقت الحالي.
              ستستخدمها طوال الوقت، لذا حاول التجربة مع الكود وشاهد ما سيحدث. ما
              هي المخرجات التي يمكنك إنشاؤها.
            </p>
          </div>
        </section>

        <section className="mb-8 p-4 bg-gray-800/30 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4 border-b border-gray-600 pb-2">
            قواعد التسمية
          </h2>
          <ul className="list-disc pr-6 space-y-2 text-gray-300">
            <li>
              تبدأ بحرف أو underscore (
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                _
              </code>
              ).
            </li>
            <li>يمكن أن تحتوي حروف، أرقام، و underscores.</li>
            <li>حساسة لحالة الأحرف (&quot;case-sensitive&quot;).</li>
            <li>
              لا تستخدم الكلمات المحجوزة (مثل{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                int
              </code>
              ,{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                main
              </code>
              ).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2
            id="4"
            className="text-2xl font-bold text-[#FF9800] mb-4 border-b border-gray-600 pb-2"
          >
            واجب (Assignment)
          </h2>

          <ol className="list-none pr-6 space-y-5 text-gray-300">
            <li className="bg-[#001D33] rounded-lg p-4 border-r-4 border-[#FF9800]">
              اذهب واقرأ ما يلي من w3schools ولا تنس القيام بالتمارين في
              النهاية:
              <div className="mt-3 space-y-2 flex flex-col">
                <a
                  className="text-green-400 hover:text-green-300 underline transition duration-200"
                  href="https://www.w3schools.com/c/c_variables.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Variables — w3schools
                </a>
                <a
                  className="text-green-400 hover:text-green-300 underline transition duration-200"
                  href="https://www.w3schools.com/c/c_variables_format.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Format specifiers
                </a>
                <a
                  className="text-green-400 hover:text-green-300 underline transition duration-200"
                  href="https://www.w3schools.com/c/c_variables_multiple.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Multiple variables
                </a>
              </div>
            </li>

            <li className="p-4 bg-yellow-900/40 border-r-4 border-yellow-400 rounded-lg">
              <p className="font-semibold text-yellow-200 mb-2">
                البرنامج العملي:
              </p>
              اكتب برنامجين: ستكتب برنامجين يطبعان الحرف الأول من اسمك، وعمرك،
              ومعدلك التراكمي (GPA). قم بإنشاء ملفين أحدهما يسمى{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                no_variables.c
              </code>{" "}
              والآخر{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                variables.c
              </code>
              . كلا البرنامجين متماثلان ولكن هناك فرق واحد، أحدهما يستخدم بيانات
              مبرمجة ثابتة (hardcoded data) داخل دالة{" "}
              <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                printf
              </code>{" "}
              (استخدم محددات التنسيق لطباعة البيانات). البرنامج الثاني يستخدم
              متغيرات لتخزين البيانات. أريدك أن تطبع كل قيمة 5 مرات على النحو
              التالي:
              <ul className="list-disc pr-6 mt-3 space-y-1">
                <li>
                  <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                    My name’s first character: (insert your name’s first
                    character)
                  </code>
                </li>
                <li>
                  <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                    My age: (insert your age)
                  </code>
                </li>
                <li>
                  <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                    My gpa: (insert your gpa)
                  </code>
                </li>
              </ul>
              <p className="mt-4">
                اكتب 5 دوال{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  printf
                </code>{" "}
                من هذا القبيل لكل قيمة، يجب أن يكون المجموع 15 دالة{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  printf
                </code>
                . في ملف{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  no_variables.c
                </code>{" "}
                لن يتم حفظ البيانات في متغيرات (بالتأكيد!). يجب عليك برمجة
                البيانات الثابتة (hardcode) داخل كل دالة{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  printf
                </code>{" "}
                باستخدام محددات التنسيق. في ملف{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  variables.c
                </code>
                ، يجب تخزين البيانات في متغيرات وطباعتها باستخدام المحددات. الآن
                أريدك أن تغير البيانات التي كتبتها (الحرف الأول من اسمك، وعمرك،
                ومعدلك التراكمي) في كلا البرنامجين. لاحظ أنه في ملف{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  no_variables.c
                </code>{" "}
                كان عليك تغيير 15 سطراً من التعليمات البرمجية! لكن في ملف{" "}
                <code className="bg-gray-700/50 text-gray-100 px-1 rounded">
                  variables.c
                </code>{" "}
                كان عليك تغيير 3 فقط!! هذا توفير كبير للوقت. هذا ما يمكن أن
                تفعله المتغيرات، فهي تجعل التعليمات البرمجية الخاصة بك أكثر
                نظافة وتوفر الكثير من الوقت لك.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4 border-b border-gray-600 pb-2">
            لماذا المتغيرات مهمة؟
          </h2>
          <p className="text-gray-200 leading-7 p-4 bg-green-900/40 rounded-lg border-r-4 border-green-400">
            المتغيرات توفر &quot;قابلية إعادة استخدام&quot; وتسهّل &quot;تعديل
            القيم&quot; في مكان واحد بدلاً من تغييره في كل سطر. هذا يحسّن
            &quot;النظافة&quot; و&quot;الموثوقية&quot; و&quot;سرعة&quot;
            التطوير.
          </p>

          <div className="w-full flex justify-between text-black text-lg font-semibold">
            <Link
              href={"/paths/C-Course/4"}
              className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
            >
              الدرس التالي
            </Link>
            <Link
              href={"/paths/C-Course/2"}
              className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
            >
              الدرس السابق
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
