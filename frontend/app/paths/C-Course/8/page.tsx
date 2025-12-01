import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson8Page() {
  return (
    <div
      className="min-h-screen bg-[#003366] text-gray-100 py-12 px-6 font-sans"
      dir="rtl"
    >
      <NavBar />
      <div className="max-w-4xl mx-auto bg-[#00284d] border border-[#FF9800]/40 rounded-2xl p-8 md:p-10 shadow-xl">
        <h1 className="text-3xl font-extrabold text-[#FF9800] mb-6 tracking-wide border-b border-[#FF9800]/30 pb-3">
          الدرس 8: النطاقات (Scopes)
        </h1>

        <p id="1" className="mb-4 leading-8 text-gray-200 text-lg">
          قد لا تكون أدركت ذلك، ولكن إذا كتبت برنامجاً من قبل، فهذا يعني أنك
          استخدمت &quot;النطاق&quot; (Scope) من قبل! أنت تستخدم النطاقات طوال
          الوقت! ولكن ما هي حقاً؟ دعنا نوضح ذلك.
        </p>

        <pre
          dir="ltr"
          className="bg-[#001F3D] p-4 rounded-lg shadow-inner overflow-x-auto text-lg my-4 font-mono text-[#FF9800] direction-ltr text-left whitespace-pre"
        >
          {`#include <stdio.h>

// global scope (النطاق العام)

int main() {

// main scope (نطاق الدالة main)

}`}
        </pre>

        <p className="mb-4 leading-8 text-gray-200 text-lg">
          النطاق هو ببساطة منطقة لكتابة الكود، ولكن هناك بعض القواعد له. كما
          ترى، كل شيء <strong className="text-red-400">داخل</strong> نطاق معين
          لا يمكن الوصول إليه <strong className="text-red-400">خارج</strong> ذلك
          النطاق! ولكن أي شيء <strong className="text-green-400">خارج</strong>{" "}
          النطاق <strong>يمكن الوصول إليه داخل</strong> النطاق.
        </p>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          يتم تحديد النطاقات بواسطة الأقواس المعقوفة{" "}
          <code className="text-[#FF9800]">{`{ }`}</code>. هل الأمر مربك؟ ربما،
          دعنا نوضح بمثال:
        </p>

        <h2 id="2" className="text-2xl font-semibold text-[#FF9800] mt-8 mb-4">
          النطاق العام (Global Scope)
        </h2>
        <pre

          dir="ltr"
          className="bg-[#001F3D] p-4 rounded-lg shadow-inner overflow-x-auto text-lg my-4 font-mono text-[#FF9800] direction-ltr text-left whitespace-pre"
        >
          {`#include <stdio.h>

// هذا هو النطاق العام، يمكنك أيضاً تعريف المتغيرات هنا 
   في الواقع، كنا نفعل ذلك بالفعل، هل ترى دالة
    int main()
   نعم، هي موجودة في النطاق العام //

int x = 10; 

int main() {

    main هذا هو نطاق الدالة
     كما يتضح من الأقواس المعقوفة
    
      main بما أننا في نطاق 
   x يمكننا الوصول إلى ما هو خارج نطاقنا وهو
     

    printf("%d", x);  يطبع 10

    return 0;
}`}
        </pre>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          المتغيرات في النطاقات العامة (Global Scopes) يمكن الوصول إليها في كل
          مكان في الكود الخاص بك.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF9800] mt-8 mb-4">
          أولوية النطاق (Shadowing)
        </h2>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          لكن لنفترض أنك عرفت{" "}
          <code className="text-[#FF9800] font-bold">x</code> مرة أخرى داخل دالة{" "}
          <code className="text-[#FF9800] font-bold">main</code>، ماذا يحدث؟
        </p>

        <pre
          dir="ltr"
          className="bg-[#001F3D]  p-4 rounded-lg shadow-inner overflow-x-auto text-lg my-4 font-mono text-[#FF9800] direction-ltr text-left whitespace-pre"
        >
          {`int x = 10; 

int main() {

    int x = 2; 

    printf("%d", x); 

    return 0; 
}`}
        </pre>

        <p id="3" className="mb-4 leading-8 text-gray-200 text-lg">
          ماذا سيكون الناتج هنا؟ خمن.
        </p>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          هذا صحيح، إنه <strong className="text-[#FF9800]">2</strong>! الأولوية
          تعتمد على النطاق، وبما أننا أعلنا عن{" "}
          <code className="text-[#FF9800] font-bold">x</code> داخل نطاق{" "}
          <code className="text-[#FF9800] font-bold">main</code>، فإنه يستخدم
          ذلك المتغير بدلاً من المتغير الموجود في النطاق العام.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF9800] mt-8 mb-4">
          نطاقات جمل الشرط (If Statement Scopes)
        </h2>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          لقد رأينا أيضاً النطاقات في مكان آخر، وهو جملة{" "}
          <code className="text-[#FF9800] font-bold">if</code>.
        </p>

        <pre
          dir="ltr"
          className="bg-[#001F3D]  p-4 rounded-lg shadow-inner overflow-x-auto text-lg my-4 font-mono text-[#FF9800] direction-ltr text-left whitespace-pre"
        >
          {`int main() {

    int x = 10; 

    if(1) { // 1 تعني true
        /* هذا هو نطاق جملة if. 
           كما ترى، لا يزال بإمكاننا الوصول إلى المتغيرات خارج النطاق */
        printf("%d", x); 
    }

    return 0; 
}`}
        </pre>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          مرة أخرى، يمكننا الوصول إلى متغيرات مختلفة من{" "}
          <strong className="text-green-400">خارج</strong> نطاقنا، لكننا لا
          نستطيع الوصول إلى المتغيرات الموجودة{" "}
          <strong className="text-red-400">داخل</strong> نطاق (من الخارج).
        </p>

        <h3 className="text-xl font-medium text-gray-200 mt-6 mb-3">
          مثال على الخطأ (عدم القدرة على الوصول للداخل)
        </h3>
        <pre
          dir="ltr"
          className="bg-[#001F3D]   p-4 rounded-lg shadow-inner overflow-x-auto text-lg my-4 font-mono text-[#FF9800] direction-ltr text-left whitespace-pre"
        >
          {`// main scope 

if (1) { 
    // if scope 
    int x = 10; 
    // end of if scope 
} 

// back to main scope 
printf("%d", x);`}
        </pre>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          حاول تجميع (compile) هذا الكود، وستحصل على رسالة خطأ تقول أن{" "}
          <code className="text-red-400">x is undeclared</code> (x غير مُعلَن)!
        </p>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          ذلك لأننا أعلنا عنه داخل نطاق{" "}
          <code className="text-[#FF9800] font-bold">if</code>، ولا يمكننا
          الوصول إليه من نطاق{" "}
          <code className="text-[#FF9800] font-bold">main</code>!
        </p>

        <h2 className="text-2xl font-semibold text-[#FF9800] mt-8 mb-4">
          التسلسل الهرمي (Hierarchy)
        </h2>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          فكر في الأمر كتسلسل هرمي:
        </p>
        <div className="bg-[#002445] p-4 rounded-lg border-r-4 border-[#FF9800] mb-6 text-center text-lg font-bold text-gray-200">
          Global scope {`->`} main scope {`->`} smaller scopes
        </div>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          النطاقات الأصغر يمكنها الوصول إلى المتغيرات من النطاقات التي تحتويها،
          لكن النطاقات الأكبر لا يمكنها الوصول إلى المتغيرات من النطاقات الأصغر.
        </p>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          هذه واحدة من القواعد الأساسية لكيفية عمل النطاق (Scope) في C (ومعظم
          لغات البرمجة):
        </p>
        <div className="bg-[#FF9800]/20 p-4 rounded-lg border border-[#FF9800] mb-6">
          <p className="text-xl text-center text-gray-100 font-semibold">
            &quot;النطاقات الداخلية يمكنها{" "}
            <span className="text-green-400">الرؤية للخارج</span>، لكن النطاقات
            الخارجية لا يمكنها{" "}
            <span className="text-red-400">الرؤية للداخل</span>.&quot;
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#FF9800] mt-8 mb-4">
          تشبيه الصناديق (The Box Analogy)
        </h2>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          تخيل النطاق كمجموعة من الصناديق داخل بعضها البعض:
        </p>
        <ul id="4" className="list-disc pr-6 space-y-3 leading-8 text-gray-200 text-lg">
          <li>
            <strong className="text-[#FF9800]">
              الصندوق العالمي (Global Box)
            </strong>{" "}
            هو الصندوق الخارجي الأقصى.
          </li>
          <li>
            داخله يوجد{" "}
            <strong className="text-[#FF9800]">
              صندوق دالة <span>main()</span>
            </strong>
            .
          </li>
          <li>
            وداخل هذا، يمكن أن يكون لديك صناديق أصغر:
            <ul className="list-disc pr-8 mt-2 text-gray-400">
              <li>
                صناديق <code className="text-green-300">if</code>
              </li>
              <li>
                صناديق <code className="text-green-300">while</code>
              </li>
              <li>
                صناديق <code className="text-green-300">for</code>
              </li>
              <li>
                صناديق <code className="text-green-300">{`{ }`}</code> تنشئها
                يدوياً
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4 leading-8 text-gray-200 text-lg mt-6">
          إذا أنشأت متغيراً في <strong>صندوق صغير</strong>، فإن هذا الصندوق فقط
          هو الذي يعرف بوجوده. الصناديق الخارجية ليس لديها فكرة عما يوجد داخل
          الصناديق الأصغر.
        </p>
        <p className="mb-4 leading-8 text-gray-200 text-lg">
          فهم النطاقات أمر بالغ الأهمية وضروري لأنك ستتعامل معها طوال الوقت.
        </p>

        <div className="w-full flex justify-between text-black text-lg font-semibold">
          <Link
            href={"/paths/C-Course/9"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس التالي
          </Link>
          <Link
            href={"/paths/C-Course/7"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </div>
  );
}
