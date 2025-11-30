import NavBar from "@/app/components/Nav";
import Link from "next/link";
import Image from "next/image";

export default function Lesson9Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#003366] text-gray-100 py-12 px-6"
    >
      <NavBar />

      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1
          id="1"
          className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4"
        >
          الدرس 9: الدوال (Functions)
        </h1>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            مقدمة عن الدوال
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            الدوال (Functions) هي كتل من التعليمات البرمجية قابلة لإعادة
            الاستخدام (reusable blocks of code) يمكن استدعاؤها في أي مكان داخل
            برنامجنا.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            يتم استخدامها لعدم تكرار الكود ولجعل الكود الخاص بك أنظف وأسهل في
            القراءة
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-6">
            لقد كنت تستخدم الدوال منذ بداية رحلتك والآن ستبدأ في كتابة بعضها.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            الإعلان عن الدوال (Declaring Functions)
          </h2>
          <p className="text-gray-200 text-lg leading-8">
            يتم الإعلان عن الدوال في النطاق العام (global scope) كالتالي:
          </p>
          <pre
            id="2"
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>

void function() {

  printf("my second function\\n");

}

int main() {

  function();

  return 0;

}`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-4">
            نعلن أولاً عن دالتنا بنوع (type)، ثم اسم الدالة متبوعًا بالأقواس ثم
            الأقواس المعقوفة! نعم، الدوال لها نطاقها الخاص أيضاً! لتفعيل الدالة
            ، يجب عليك استدعاؤها عن طريق كتابة اسم الدالة متبوعاً بالأقواس،
            يمكنك التفكير في الأقواس كـ &quot;هواتف&quot; تتحدث مع بعضها البعض.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`function(); // استدعاء الدالة المسماة function!`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            لنكتب دالة تقول &quot;hello&quot; عشر مرات!
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`void hello10() {
  int i;
  for (i = 0; i < 10; i++) {
    printf("hello\\n");
  } 
}

int main() {
  printf("this is the main function and I am about to call hello10\\n");
  hello10(); // استدعاء الدالة!
  return 0;
}`}</code>
          </pre>
          <p id="3" className="text-gray-200 text-lg leading-8 mb-4">
            أترى كم هو سهل؟ حان الوقت لنتعمق أكثر.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            قيم الإرجاع (Return values)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            للدوال أيضاً أنواع (types)، ولكن ماذا نعني بذلك؟ ترى، يمكن للدالة أن
            تُرجع قيماً مختلفة! وكيف نحدد نوع القيم التي تُرجعها؟ هذا صحيح، من
            خلال نوع الدالة!
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            <code dir="ltr">void</code> تعني &quot;لا شيء&quot; ، أي عندما يتم
            الإعلان عن دالة بالنوع <code dir="ltr">void</code> فهذا يعني أن هذه
            الدالة لا تُرجع شيئاً .
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            دالة تحسب مجموع الأرقام العشرة الأولى وتُرجعها
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`// نعلن عن الدالة بنوع int مما يشير إلى أنها ستُرجع شيئاً وهذا الشيء هو int
int calculate_sum_of_10() {
  int i, sum = 0;
  for (i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum; 
}

int main() {
  int x;
  x = calculate_sum_of_10();
  printf("%d\\n", x);
  return 0;
}`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-4">
            الآن أصبح الأمر مثيراً للاهتمام، بما أن الدالة تُرجع قيمة{" "}
            <code dir="ltr">int</code> فإننا نخزن تلك القيمة{" "}
            <code dir="ltr">int</code> في متغير (variable). أليس هذا رائعاً؟
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكنك أيضاً القيام بشيء مثل هذا:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`printf("%d\\n", calculate_sum_of_10());`}</code>
          </pre>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            أنت لست مضطراً لتخزين قيم الإرجاع في متغيرات! بما أن الدالة ستُرجع
            قيمة <code dir="ltr">int</code>، يمكنك التعامل معها كأنها واحدة!
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكنك حتى مجرد استدعائها كما هي على الرغم من أنك لن تحصل على أي
            استخدام عملي لها في هذا الموقف:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`calculate_sum_of_10();`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            <code dir="ltr">int main()</code> و <code dir="ltr">return 0 </code>
            <p className="ml-2">فهم</p>
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            كما ترى، لقد كنا نستخدم <code dir="ltr">int main</code> و{" "}
            <code dir="ltr">return 0</code> منذ البداية، ويمكنك نوعاً ما أن
            تكتشف ما تعنيه هذه الأشياء الآن.
            <code dir="ltr">int main</code> تعني أن دالتنا الرئيسية (main
            function) ستُرجع قيمة <code dir="ltr">int</code>، و{" "}
            <code dir="ltr">return 0</code> هي تلك القيمة{" "}
            <code dir="ltr">int</code>.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            ولكن لماذا نُرجع 0؟
          </p>
          <p className="text-gray-200 text-lg leading-8">
            حسناً، في مصطلحات Unix، تعني القيمة &quot;0&quot; النجاح (success)،
            وأن البرنامج قد انتهى دون أي مشاكل. أي شيء آخر غير ذلك يعني أن خطأً
            قد حدث لذا، عندما نكتب <code dir="ltr">return 0</code> في النهاية،
            فإننا نقول بشكل أساسي لنظام التشغيل (operating system) إننا نفذنا
            الكود الخاص بنا بنجاح!
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            المُعاملات (Parameters) والوسائط (Arguments)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            تذكر دالة <code dir="ltr">printf</code> الخاصة بنا؟ نستخدمها طوال
            الوقت ولكنها تختلف نوعاً ما عن تلك التي كتبناها، فعند استدعائها،
            تأخذ قيمة نصية (string value) نضعها فيها. لكن دوالنا فارغة (empty).
            هذه تُسمى &quot;الوسائط (Arguments)&quot; وهي في الأساس بيانات يتم
            تمريرها إلى دالة . سنجعل الآن دوالنا تقبل وسائط وتنفذ بعض الإجراءات
            بها.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            هذا هو المكان الذي تدخل فيه &quot;المُعاملات (Parameters)&quot;.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            عند الإعلان عن دالة، كنا نعلن عنها كالتالي:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`Type name_of_the_function(/* empty */) {
  // code
}`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-4">
            الآن سنجعل دوالنا تقبل قيماً معينة عن طريق تعريف المُعاملات. خذ لحظة
            لتخمين كيفية تعريف المُعاملات، دعني أساعدك. لنفترض أنني أريد دالة
            تأخذ قيمة <code dir="ltr">float</code> كوسيط، يجب أن نكتب شيئاً داخل
            الأقواس يجعلها تأخذ <code dir="ltr">float</code>. إليك الطريقة:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`void my_function(float some_variable) {
  // code
}`}</code>
          </pre>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            الأمر مباشر نوعاً ما. إذا أردنا أن تقبل دالتنا وسائط متعددة
            (multiple arguments)، فإننا نفصل كل مُعامل بفاصلة (comma) ثم نعلن عن
            مُعامل جديد، الأمر سهل بما فيه الكفاية:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`int my_function(float f1, int i2, char c3, float f2) {
  // code
}`}</code>
          </pre>

          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكنك كتابة العديد من المُعاملات كما تريد. لقد كتبت دالة تقبل 4
            وسائط وتُرجع قيمة <code dir="ltr">int</code>. يمكنك حقاً أن تنطلق
            هنا بالدوال، لا تدع خيالك يحدك!
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكن أن تكون أسماء المُعاملات (names of the parameters) كما تشاء،
            ولكن لاحظ أن هذه الأسماء المستخدمة في المُعاملات تكون قابلة
            للاستخدام فقط داخل تلك الدالة نفسها . ولاحظ أيضاً أنه إذا أعلنت عن
            اسم مُعامل، فلن تضطر إلى إعطاء متغير يحمل نفس الاسم عند الاستدعاء.
            إذا استخدمنا الدالة أعلاه كمثال، فإليك طرق متعددة لاستدعائها:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`char my_char = 'a';
My_function(1.232, 10, my_char, 21.321);
My_function(function_that_returns_a_float(), 20, my_char, 2.321);`}</code>
          </pre>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            لا يهم حقاً ما تضعه هناك طالما أنه يطابق نوع المتغير (variable
            type). لقد استخدمنا أيضاً دالة مثال تُرجع قيمة{" "}
            <code dir="ltr">float</code> ومررناها إلى الدالة.
          </p>
          <p className="text-[#FF9800] font-bold text-lg leading-8 mb-4">
            لاحظ أن أماكن الوسائط (argument places) مهمة؛ فالأول يتطابق مع
            المُعامل الأول وهكذا.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            استخدام المُعاملات داخل الدوال
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`int sum_of_n(int n) {
  int i, sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

int main() {
  int koko = 10;
  printf("here is the sum of the first %d numbers: %d\\n", koko, sum_of_n(koko));
  koko = 20;
  printf("Now here is the sum of the first %d numbers: %d\\n", koko, sum_of_n(koko));
  koko = 30;
  printf("Now here is the sum of the first %d numbes: %d\\n", koko, sum_of_n(koko));
  
  return 0;
}`}</code>
          </pre>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            كما ترى، نستخدم المُعامل كمتغير عادي داخل دالتنا. لسنا مضطرين إلى
            تعريفه داخل الدالة لأننا فعلنا ذلك بالفعل في المُعاملات، ويتم إعطاء
            القيم عندما نستدعيها بالوسائط.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            الدالة التي كتبناها تحسب مجموع أول &apos;n&apos; من الأرقام. نعطيها{" "}
            <code dir="ltr">n</code> كوسيط وتقوم بحساب المجموع عبر حلقة{" "}
            <code dir="ltr">for</code> وتُرجع المجموع.
          </p>
          <p className="text-[#FF9800] font-bold text-lg leading-8 mb-4">
            يمكنك أن ترى كيف يمكن للدوال حقاً أن تجعل الكود أبسط وأكثر قابلية
            للقراءة. إذا لم نستخدم دالة لحساب المجموع، لاضطررنا إلى كتابة 3
            حلقات <code dir="ltr">for loop</code> مختلفة لحساب كل واحدة! هذه هي
            قوة الدوال.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            النماذج الأولية للدوال (Function Prototypes)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكنك أيضاً تعريف الدوال بدون جسم (body) ثم كتابة الجسم بعد الدالة
            الرئيسية <code dir="ltr">main</code> كالتالي:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`int some_function(int , float ); // النماذج الأولية للدوال تنتهي بفاصلة منقوطة (semi columns)

int main () {
  // code here
  return 0;
}

int some_functtion(int some_int, float some_float) {
  // body of the function here
  return 0;
}`}</code>
          </pre>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            تُستخدم النماذج الأولية للدوال للإعلان عن دالة فارغة لا تحتوي على
            جسم قبل الدالة الرئيسية (main function)، ثم إنشاء جسم فعلي متى شئت.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            النماذج الأولية للدوال أيضاً لا يجب أن تحتوي على أسماء للمُعاملات،
            فقط الأنواع (just the types) كما رأيت في المثال أعلاه، ولكن عند
            كتابة جسم الدالة (function body) يجب كتابة اسم للمُعامل (parameter
            name must be written).
          </p>
          <p className="text-[#FF9800] font-bold text-lg leading-8 mb-4">
            حاول أن تعلن عن دالة بعد الدالة الرئيسية دون الإعلان عن نموذج أولي
            أولاً وتستدعيها في <code dir="ltr">main</code>. تذكر رسالة الخطأ
            تلك؟ &quot;المتغير غير مُعلن&quot; (Variable undeclared)؛ إنه نفس
            الشيء، فنحن نحاول الوصول إلى شيء قبل أن يتم الإعلان عنه. إنه مثل
            محاولة الوصول إلى متغير قبل تعريفه .
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            لتجنب ذلك، نستخدم النماذج الأولية. النماذج الأولية تخبر{" "}
            <code dir="ltr">main</code> أن &quot;مرحباً، هناك دالة بهذا النوع
            وهذه المُعاملات موجودة في الأمام&quot; (hey there is a function with
            this type and these parameters that exists ahead). نستخدمها أيضاً
            عندما نعرف أننا بحاجة إلى دالة كهذه ولكننا لا نعرف كيف سيكون سير
            الخوارزمية (flow of the algorithm) داخل الدالة.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            استخدام الدوال داخل الدوال (Functions inside Functions)
          </h2>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            بما أن الدوال تشبه أي نطاق من الكود (any scopes of code)، يمكنك
            أيضاً استدعاء دالة أخرى داخلها.
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            إن استدعاء الدوال داخل دوال أخرى أمر بسيط، وقد كنا نفعله طوال الوقت
            عندما كنا نستدعي دوالنا الأخرى التي كتبناها داخل{" "}
            <code dir="ltr">main</code>. لذا، فإن استدعاء الدوال داخل دوال أخرى
            تقع خارج <code dir="ltr">main</code> هو نفس الشيء.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`void function1();
void function2();

int main() {
  function1();
  return 0;
}

void function1() {
  // some code here
  function2();
  // some other code here
}

void function2() {
  // does something here
}`}</code>
          </pre>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يجب أن يكون سير العمل (flow) كالتالي:
          </p>
          <div className="text-[#FF9800] font-semibold text-lg leading-8 mb-4">
            {" "}
            يجب أن تكون آلية العمل (<span dir="ltr">flow</span>) بهذا الشكل:
            تبدأ الدالة الرئيسية → ثم في مرحلة ما تستدعي{" "}
            <span dir="ltr">function1() </span> تبدأ{" "}
            <span dir="ltr">function1()</span> → ثم في مرحلة ما تستدعي{" "}
            <span dir="ltr">function2()</span> → تنتهي{" "}
            <span dir="ltr">function2()</span>. عندما تنتهي{" "}
            <span dir="ltr">function2()</span> يمكن لـ{" "}
            <span dir="ltr">function1()</span> أن تتابع تنفيذها، وستصل في
            النهاية إلى نقطة النهاية الخاصة بها، وعندها يمكن للدالة الرئيسية
            أيضًا متابعة تنفيذها. عندما تستدعي دالةٌ دالةً أخرى، فإنها تنتظر
            الدالة المستدعاة لتنهي عملها، ثم تتابع تنفيذ مهمتها الحالية.{" "}
          <div className="flex flex-wrap justify-center bg-indigo-900/50 p-4 rounded-lg border border-indigo-700 my-4">
            <Image
              src="/work.PNG"
              alt="A diagram illustrating the function call flow: main() calls function1(), which pauses its execution to call function2(). function2() finishes and returns control to function1(), which then completes and returns control to main()."
              width={600}
              height={400}
            />
          </div>
          </div>

          <p className="text-gray-200 text-lg leading-8 mb-4"></p>

          <p className="text-[#FF9800] font-bold text-lg leading-8 mb-4">
            عندما تستدعي دالة دالة أخرى، فإنها تنتظر الدالة الأخرى لإنجاز مهمتها
            ثم تستمر في مهمتها الحالية
          </p>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            الرسم البياني يسير هكذا: ترى كيف يجب على{" "}
            <code dir="ltr">function1()</code> أن تنتظر{" "}
            <code dir="ltr">function2()</code> ثم تستمر في التنفيذ، هذا ما كنا
            نفعله، إنه ليس شيئاً جديداً.
          </p>
        </section>

        <section id="4" className="mb-12 ">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            الواجب (Assignment)
          </h2>
          <div className="p-4 bg-yellow-900/40 border-r-4 border-[#FF9800] rounded-lg">
            <ul className="list-disc list-inside pr-4 mb-6 space-y-2">
              <li className="text-gray-200 text-lg leading-8">
                <a
                  href="https://www.w3schools.com/c/c_functions.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 underline"
                  dir="ltr"
                >
                  https://www.w3schools.com/c/c_functions.php
                </a>
              </li>
              <li className="text-gray-200 text-lg leading-8">
                <a
                  href="https://www.w3schools.com/c/c_functions_parameters.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 underline"
                  dir="ltr"
                >
                  https://www.w3schools.com/c/c_functions_parameters.php
                </a>
              </li>
              <li className="text-gray-200 text-lg leading-8">
                <a
                  href="https://www.w3schools.com/c/c_scope.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 underline"
                  dir="ltr"
                >
                  https://www.w3schools.com/c/c_scope.php
                </a>
              </li>
              <li className="text-gray-200 text-lg leading-8">
                <a
                  href="https://www.w3schools.com/c/c_functions_decl.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 underline"
                  dir="ltr"
                >
                  https://www.w3schools.com/c/c_functions_decl.php
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="w-full flex justify-between text-black text-lg font-semibold">
          <Link
            href={"http://localhost:3000/paths/C-Course/9"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10 opacity-50"
          >
            الدرس التالي
          </Link>
          <Link
            href={"http://localhost:3000/paths/C-Course/8"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </main>
  );
}
