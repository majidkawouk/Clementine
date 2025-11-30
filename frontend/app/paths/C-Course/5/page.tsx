import NavBar from "@/app/components/Nav";
import Link from "next/link";

const ARROW = " \u2192 ";

export default function Lesson5Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-12 px-6"
    >
      <NavBar />
      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 5: الجمل الشرطية (Conditionals)
        </h1>

        <section className="mb-12">
          <p id="1" className="text-gray-200 text-lg leading-8 mb-6">
            بعد أن تعلمنا عن (Operators) في الدرس السابق، سنتعلم الآن كيفية
            التعديل والتلاعب بسير البرنامج بناءً على الشروط.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            القيم  (Booleans) وعوامل المقارنة
          </h2>

          <p className="text-gray-200 text-lg leading-8 mb-6">
            قبل أن نتعمق في الجمل الشرطية، يجب علينا أولاً أن نتعلم عن نوع
            بيانات جديد: وهي **القيم  (Booleans)**. يمكن أن تكون إما{" "}
            <code>true</code> (صحيح) أو <code>false</code> (خطأ).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            الإعلان عن القيم  (في لغة C)
          </h3>
          <p className="text-gray-200 text-lg leading-8">
            يتم الإعلان عن القيم  كالتالي. تذكر أنك تحتاج إلى تضمين ملف{" "}
            <code>stdbool.h</code>:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdbool.h>
#include <stdio.h>

int main() {
  bool my_truthy_bool = true;
  bool my_falsey_bool = false;

  // يجب أن تعيد الدالة الرئيسية قيمة
  return 0; 
}`}</code>
          </pre>

          <h3 id="2" className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            القيم Booleans من الداخل
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            القيم Booleans هي في الواقع أعداد صحيحة (integers) تحت الغطاء. أي
            عدد صحيح بخلاف <code>0</code> يُعتبر صحيحًا (truthy)، و{" "}
            <code>0</code> هو القيمة الخاطئة (falsy) الوحيدة.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>
#include <stdbool.h>

int main() {
  printf("%d\\n", true); 
  printf("%d\\n", false); 
  // المخرج: 1 و 0
  return 0;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            عوامل المقارنة (Comparison Operators)
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            تُستخدم لمقارنة قيم معينة وتعيد قيمًا بوليانية (1 أو 0):
          </p>

          <ul className="list-disc list-inside space-y-3 pr-4 text-gray-200 text-lg leading-8">
            <li>
              <strong dir="ltr">{">"}</strong> (أكبر من)،{" "}
              <strong dir="ltr">{"<"}</strong> (أصغر من)
            </li>
            <li>
              <strong dir="ltr">{">="}</strong> (أكبر من أو يساوي)،{" "}
              <strong dir="ltr">{"<="}</strong> (أصغر من أو يساوي)
            </li>
            <li>
              <strong dir="ltr">{"!="}</strong> (لا يساوي): يتحقق مما إذا كانت
              القيمتان غير متساويتين.
            </li>
            <li>
              <strong dir="ltr">{"=="}</strong> (يساوي): يتحقق مما إذا كانت
              القيمتان متساويتين.
            </li>
          </ul>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>
#include <stdbool.h>

int main() {
  printf("%d\\n", 5 == 5); // يطبع 1 
  printf("%d\\n", 3 == 2); // يطبع 0
  return 0;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            (Logical Operators)
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            تُستخدم للجمع بين شروط متعددة:
          </p>
          <ul className="list-disc list-inside space-y-3 pr-4 text-gray-200 text-lg leading-8">
            <li>
              <strong>
                <code>&&</code> (AND - و):
              </strong>{" "}
              تعيد 1 إذا كانت كلتا الجملتين صحيحتين.
            </li>
            <li>
              <strong>
                <code>||</code> (OR - أو):
              </strong>{" "}
              تعيد 1 إذا كانت إحدى الجملتين صحيحة على الأقل.
            </li>
            <li>
              <strong>
                <code>!</code> (NOT - لا):
              </strong>{" "}
              تعكس النتيجة (تحول 1 إلى 0 والعكس).
            </li>
          </ul>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>
#include <stdbool.h>

int main() {
  int x = 10; 
  printf("%d\\n", 7 > 0 && true && x >= 10); // 1 
  printf("%d\\n", !x); // 0 (لأن x هو قيمة صحيحة، !x خاطئة)
  return 0;
}`}</code>
          </pre>

          <h3 id="3" className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            (Short-Circuit Evaluation)
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يقوم Boolean <code>||</code> بإنهاء التقييم بمجرد العثور على أول
            جملة صحيحة. وبالمثل، ينهي <code>&&</code> التقييم بمجرد العثور على
            أول جملة خاطئة. هذا يمنع تنفيذ الأجزاء المتبقية من التعبير.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>

int main() {
  int x = 10; 
  // في C، التقييم قصير الدائرة يمنع تنفيذ x++ 
  printf("%d\\n", (x != 0) || (x++ > 100)); // يطبع 1 (الشرط الأول صحيح)
  printf("x = %d\\n", x); // يطبع x = 10، لأن x++ لم يتم تنفيذه!
  
  return 0;
}`}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            جمل If-Else و Else-If
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            جملة If-Else
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            تسمح بتنفيذ الكود فقط إذا كان شرط معين صحيحًا (<code>true</code>).
            يتم تنفيذ جملة <code>else</code> عندما تفشل جميع الشروط الأخرى.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>

int main() {
  int x = 10, y = 5; 

  if (x > y) { 
    printf("أنا صحيح!\\n"); 
  } else { 
    printf("أنا خاطئ!\\n"); 
  }
  return 0;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            جملة Else-If
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            تُستخدم لفحص شروط متعددة. يتم ربطها بجملة <code>if</code> أولى ولا
            يتم فحصها إلا إذا فشل الشرط الأولي.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>
#include <stdbool.h>

int main() {
  if (false) { 
    printf("لن أعمل\\n"); 
  } else if (true) { 
    printf("سأعمل\\n"); 
  }
  return 0;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            ربط الجمل الشرطية (Chaining Statements)
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكن ربط عدة جمل <code>else if</code> وجملة <code>else</code> نهائية
            واحدة. يتم تنفيذ أول شرط صحيح يتم العثور عليه، ويتم تجاهل الباقي.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>

int main() {
  // الأحرف في C هي في الأساس أعداد صحيحة (ASCII)
  char char1 = 'A', char2 = 'B'; 

  if (char1 == char2) { 
    printf("الحرفان متماثلان\\n"); 
  } else if (char1 > char2) { 
    printf("char1 أكبر من char2\\n"); 
  } else { 
    printf("لم أعد أعرف ماذا أقول\\n"); 
  }
  return 0;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
            الجمل الشرطية المتداخلة (Nested Conditionals)
          </h3>
          <p className="text-gray-200 text-lg leading-8 mb-4">
            يمكنك كتابة جمل <code>if</code> داخل نطاق (scope) جملة{" "}
            <code>if</code> أخرى. تُنفذ الجمل الداخلية فقط إذا كان الشرط الخارجي
            صحيحًا.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001d33] text-[#FF9800] p-4 rounded-lg my-6 text-left overflow-x-auto border border-[#FF9800]/30 text-sm md:text-base font-mono"
          >
            <code>{`#include <stdio.h>
#include <stdbool.h>

int main() {
  if (true) { 
    if (false) { 
      printf("لن أعمل\\n"); 
    } else if (true) { 
      printf("أنا جملة else-if متداخلة\\n"); 
    } 
  }
  return 0;
}`}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 id="4" className="text-3xl font-bold text-[#FF9800] mb-6 border-b border-[#FF9800]/60 pb-2">
            واجب (Assignment)
          </h2>
          <div className="p-4 bg-yellow-900/40 border-r-4 border-yellow-400 rounded-lg">
            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              مطالعة إضافية
            </h3>
            <p className="text-gray-200 text-lg leading-8 mb-4">
              اقرأ عن جملة <strong>switch case</strong>، وهي طريقة بديلة لتنفيذ
              الشروط بناءً على قيمة ثابتة:
            </p>
            <ul className="list-disc list-inside pr-4 mb-6">
              <li className="text-gray-200 text-lg leading-8">
                <a
                  href="https://www.w3schools.com/c/c_switch.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 underline"
                >
                  W3Schools: C Switch Statement
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center text-[#FF9800] justify-end flex-row-reverse text-right border-b border-[#FF9800]/50 pb-2">
              مهمة برمجية: محول الدرجات
            </h3>
            <p className="text-gray-200 font-bold text-lg leading-8 mb-4">
              اكتب برنامجًا يحول درجة الطالب (من 100) إلى نظام الأحرف (A, B,
              C...). استخدم متغيرًا للدرجة وتحقق من الشروط التالية باستخدام جمل{" "}
              <code>if</code> و <code>else if</code>:
            </p>
            <ul className="list-disc list-inside pr-4 text-gray-200 text-lg leading-8">
              <li>إذا كانت بين 90 و 100 {ARROW} يطبع A</li>
              <li>بين 80 و 89 {ARROW} يطبع B</li>
              <li>بين 70 و 79 {ARROW} يطبع C</li>
              <li>بين 60 و 69 {ARROW} يطبع D</li>
              <li>أي شيء أقل من 60 هو F</li>
            </ul>
          </div>
        </section>

        <div className="w-full flex justify-between text-black text-lg font-semibold">
          <Link
            href={"http://localhost:3000/paths/C-Course/6"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس التالي
          </Link>
          <Link
            href={"http://localhost:3000/paths/C-Course/4"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </main>
  );
}
