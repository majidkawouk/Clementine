"use client";
import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson2Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-12 px-6"
    >
      <NavBar />
      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 2 — أول برنامج لك في لغة C
        </h1>

        <section className="mb-10 ">
          <h2 id="1" className="text-2xl font-bold text-[#FF9800] mb-6 border-r-4 border-[#FF9800] pr-3">
            مقدمة
          </h2>
          <p className="mt-4 p-4 bg-[#001f3d] rounded-xl border border-[#FF9800]/20">
            أولاً، سنتحدث عن لغات البرمجة ككل ولماذا اخترنا لغة C لهذه الدروس.
            لغات البرمجة هي مجرد أدوات للتواصل مع أجهزة الكمبيوتر. هناك العديد
            من لغات البرمجة المختلفة المصممة للتواصل مع أجهزة الكمبيوتر بطرق
            مختلفة، واعتماداً على ما تحاول القيام به، تختار اللغة المناسبة
            للمهمة الموكلة إليك. نوصي ببدء تعلم البرمجة بلغة C لأنها تساعدك على
            فهم ما يجري &quot;تحت الغطاء&quot; على مستوى أعمق بكثير من أي لغة
            أخرى، وفي الوقت نفسه تجعل القيام بذلك بسيطاً إلى حد ما. إنها أيضاً
            فعالة حقاً، مما يجعلها واحدة من أسرع لغات البرمجة إن لم تكن الأسرع.
            فقط ضع في اعتبارك أن ما ستتعلمه في هذه الدروس يُطبق أيضاً في لغات
            أخرى. المتغيرات، الشروط، الحلقات، الدوال - كل هذه هي أساسيات
            البرمجة. لا يهم ما تتعلمه، ستستخدمها في كل مكان. لديهم فقط بعض
            الاختلافات الصغيرة من لغة إلى أخرى. البدء بلغة C يبني أساساً متيناً
            جداً لرحلتك البرمجية، حتى لو لم ينتهي بك الأمر إلى استخدامها لاحقاً.
          </p>
          <p className="text-gray-200 leading-8 mt-4">
            الأهم من ذلك أن المفاهيم التي سنتعلمها هنا — المتغيرات، الجمل
            الشرطية، الحلقات، الدوال، معالجة المدخلات والمخرجات — كلها مبادئ
            أساسية موجودة في جميع لغات البرمجة تقريباً. إذا تعلمتها في C
            فستستطيع فهم أي لغة أخرى بسهولة أكبر.
          </p>
          <p></p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-6 border-r-4 border-[#FF9800] pr-3">
            تثبيت GCC
          </h2>

          <p className="mt-4 p-4 bg-[#001f3d] rounded-xl border border-[#FF9800]/20">
            قبل كتابة أول برنامج يجب أن تثبّت gcc.
          </p>

          <p className="text-gray-200 leading-8 mt-4">لمستخدمي Linux:</p>

          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-4 rounded-lg mt-2 overflow-auto"
          >
            sudo apt install gcc
          </pre>

          <p className="text-gray-200 leading-8 mt-4">
            أما في Windows فيمكن استخدام MinGW أو MSYS2. وفي macOS يمكن تثبيت
            Xcode Command Line Tools أو GCC عبر Homebrew. المهم هو أن يصبح لديك
            برنامج يمكنه ترجمة ملفات C.
          </p>
        </section>

        <section className="mb-10">
          <h2 id="2" className="text-2xl font-bold text-[#FF9800] mb-6 border-r-4 border-[#FF9800] pr-3">
            كتابة أول برنامج لك في C
          </h2>

          <p className="text-gray-200 leading-8">
            افتح VS Code وأنشئ ملفاً جديداً سمّه أي اسم تريد، لكن يجب أن ينتهي
            بالامتداد <code className="text-[#FF9800]">.c</code>.
          </p>

          <p className="text-gray-200 leading-8 mt-4">
            اكتب الكود التالي داخل الملف:
          </p>

          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-5 rounded-lg mt-4 overflow-auto"
          >
            {`#include <stdio.h>

int main() {
    printf("Hello World!\\n");
    return 0;
}`}
          </pre>

          <p className="text-gray-200 leading-8 mt-4">
            الآن قم بتشغيل البرنامج. إن ظهر لك &quot;Hello World&quot; في
            terminal، فمبروك! لقد كتبت أول برنامج C في حياتك.
          </p>
        </section>

        <section className="mb-10 rounded-lg border-r-4 border-[#FF9800] p-4 bg-[#002445] ">
          <h2 id="3" className="text-2xl font-bold text-[#FF9800] mb-6 border-r-4 border-[#FF9800] pr-4">
            شرح الكود
          </h2>

          <ul className="list-none pl-6 space-y-4 text-gray-200 leading-8">
            <li>
              مُتفاجئ؟ مبروك! لقد كتبت أول برنامج C لك! الآن الآن… ما الذي يحدث
              بالضبط؟ ماذا يفعل
              <code dir="ltr" className="text-[#FF9800]">
                include
              </code>
              ؟ ما هو
              <code dir="ltr" className="text-[#FF9800]">
                int main
              </code>
              ؟ سنغطّي كل هذه الأمور بالتفصيل لاحقًا، لكن فقط للتوضيح الآن:
              دعونا أولاً نتحدث عن جزء
              <code dir="ltr" className="text-[#FF9800]">
                int main()
              </code>
              . هذا يُسمّى الدالة الأساسية في برنامجك، وهي أول دالة يتم تنفيذها
              في برنامجك، بمعنى أنها نقطة البداية لبرنامجك. برنامجك يجب دائمًا
              أن يحتوي على نقطة بدء، ولهذا من المهم جدًا حفظ هذا الجزء. تمّ
              تعريفها كـ
              <code dir="ltr" className="text-[#FF9800]">
                int
              </code>
              (عدد صحيح) لأنها تُرجع
              <code dir="ltr" className="text-[#FF9800]">
                return 0
              </code>
              عند نهايتها كما ترى في السطر الأخير قبل القوسين المعقوفين. (جزئية
              <code dir="ltr" className="text-[#FF9800]">
                return 0
              </code>
              سيتم شرحها أيضًا في درس
              <code dir="ltr" className="text-[#FF9800]">
                functions
              </code>
              ) سنناقش صيغة كتابة
              <code dir="ltr" className="text-[#FF9800]">
                functions
              </code>
              لاحقًا، لكن الآن فقط احتفظ في ذهنك أنها تُكتب بهذه الطريقة.
            </li>

            <li>
              طيب ماذا عن جزء
              <code dir="ltr" className="text-[#FF9800]">
                include
              </code>
              ؟ ملف
              <code dir="ltr" className="text-[#FF9800]">
                stdio.h
              </code>
              هو عبارة عن header file وسنقوم بشرحه لاحقا، لكنه في الاساس يقوم
              بلصق مجموعة من الاكواد الجاهزة داخل برنامجك قبل عملية الترجمة.
              مكتبة
              <code dir="ltr" className="text-[#FF9800]">
                stdio.h
              </code>
              هي مكتبة الادخال والاخراج القياسية، وتحتوي على الكثير من
              <code dir="ltr" className="text-[#FF9800]">
                functions
              </code>
              التي يمكن استخدامها في برامجنا. هل ترى
              <code dir="ltr" className="text-[#FF9800]">
                printf
              </code>
              في برنامجنا؟ حاول ازالة سطر
              <code dir="ltr" className="text-[#FF9800]">
                include
              </code>
              وشاهد ماذا سيحدث. غالبا ستحصل اما على تحذير يطلب منك تضمين
              <code dir="ltr" className="text-[#FF9800]">
                stdio.h
              </code>
              او قد تحصل على خطأ كامل. الفكرة ببساطة انك لا تستطيع استخدام شيء
              غير معرف في برنامجك، ولذلك يظهر الخطأ. وايضا لاحظ الفاصلة المنقوطة
              بعد كل سطر. هذه ضرورية حتى يعرف ال compiler انك انتهيت من سطر
              وبدأت سطرا جديدا. فهي الطريقة التي تميز بها الاوامر داخل البرنامج.
            </li>
          </ul>
        </section>

        <section className="mb-2">
          <h2 id="4" className="text-2xl font-bold text-[#FF9800] mb-4 border-b border-gray-600 pb-2">
            واجب (Assignment)
          </h2>

          <ol className="p-4 bg-yellow-900/40 border-r-4 border-yellow-400 rounded-lg">
            <li className=" ml-1">
              شاهد هذا الفيديو الذي يشرح تاريخ لغات البرمجة ولماذا يوجد الكثير
              منها
              <div className="mt-3 space-y-2 flex flex-col">
                <a
                  href="https://www.youtube.com/watch?v=mhpslN-OD_o"
                  className="text-green-400 hover:text-green-300 underline transition duration-200"
                  target="_blank"
                >
                  The Brief History of Programming Languages
                </a>
              </div>
            </li>

            <li className=" ml-1">
              ايضا شاهد ال
              <code dir="ltr" className="text-[#FF9800]">
                functions
              </code>
              التي توفرها مكتبة
              <code dir="ltr" className="text-[#FF9800]">
                stdio
              </code>
              فقط تصفحها بشكل سريع، لا تحتاج الى حفظها الآن
              <div className="mt-1">
                <a
                  href="https://www.w3schools.com/c/c_ref_stdio.php"
                  className="text-green-400 hover:text-green-300 underline transition duration-200"
                  target="_blank"
                >
                  w3schools stdio reference
                </a>
              </div>
            </li>

            <li className="ml-1">
              قم بمراجعة وحل التمارين الموجودة في نهاية هذا الدرس من w3schools
              <div className="mt-1">
                <a
                  href="https://www.w3schools.com/c/c_newline.php"
                  className="text-green-400 hover:text-green-300 underline transition duration-200"
                  target="_blank"
                >
                  w3schools newline lesson
                </a>
              </div>
            </li>
            <li className=" ml-1">
              حاول كتابة ال boilerplate code بنفسك عدة مرات حتى تعتاد عليه، وجرب
              اللعب قليلا بالصياغة. مثلا حاول ازالة
              <code dir="ltr">return 0;</code>
              وشاهد ماذا سيحدث
            </li>
          </ol>
          <div className="w-full flex justify-between text-black text-lg font-semibold">
            <Link
              href={"http://localhost:3000/paths/C-Course/3"}
              className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10"
            >
              الدرس التالي
            </Link>
            <Link
              href={"http://localhost:3000/paths/C-Course/1"}
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
