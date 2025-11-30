import NavBar from "@/app/components/Nav";
import Link from "next/link";

export default function Lesson7Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-lg bg-[#003366] text-gray-100 py-12 px-6 w-full"
    >
      <NavBar />

      <div className="max-w-4xl mx-auto bg-[#00284d] border-t-8 border-[#FF9800] rounded-2xl p-12 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#FF9800] mb-8 tracking-wide border-b border-[#FF9800]/50 pb-4">
          الدرس 7: الحلقات (<span dir="ltr">Loops</span>)
        </h1>

        <section className="mb-12">
          <h2
            id="1"
            className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-6"
          >
            مقدمة عن الحلقات
          </h2>
          <p className="text-gray-200 leading-8 mb-6">
            الحلقات (<span dir="ltr">Loops</span>) تسمح لنا بتنفيذ قطعة من الكود
            بشكل **متكرر** تحت شروط معينة.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            تخيل أنك تريد طباعة شيء ما 10 مرات قد تعتقد أنني سأقوم فقط بالنسخ
            واللصق بسيط حقًا.. ماذا عن 100 لا 10000 مرة! النسخ واللصق لذلك
            سيستغرق الكثير من الجهد ويجعل الكود الخاص بك ضخمًا وغير قابل للقراءة
            **بدلاً من ذلك** نستخدم الحلقات!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-6">
            حلقة <span dir="ltr">while</span>
          </h2>

          <pre
            id="2"
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              while(condition) &#123;
              <br />
              / block of code
              <br />
              &#125;
            </code>
          </pre>

          <p className="text-gray-200 leading-8 mb-6">
            ترى حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            تستمر في تنفيذ كتلة الكود **طالما أن الشرط هو، لقد خمنت ذلك: صحيح!**
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            مثال:
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              int x = 0;
              <br />
              while(x &lt; 10) &#123;
              <br />
              &nbsp;&nbsp;printf(&quot;%d\n&quot;, x);
              <br />
              &nbsp;&nbsp;x++;
              <br />
              &#125;
              <br />
              printf(&quot;x after the loop: x =%d\n&quot;, x);
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            تتحقق من الشرط أولاً وإذا كان صحيحًا تنفذ كتلة الكود بداخلها، هذه
            الكتلة تطبع قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            ثم تزيد{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            بمقدار 1.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            تذكر أن قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            الجديدة هي الآن 1.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            الآن تتحقق حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            من الشرط مرة أخرى،{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            (والتي هي 1) لا تزال أقل من 10 لذا تدخل كتلة الكود تطبع قيمتها
            وتزيدها مرة أخرى{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            هي الآن 2 وهكذا.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            حتى تصل{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            إلى 10 تتحقق حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            من الشرط وبما أنه الآن **خاطئ** فلن تدخل كتلة الكود بعد الآن ويستمر
            برنامجك بشكل طبيعي.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            إنها تعمل مثل عبارات{" "}
            <code dir="ltr" className="text-[#FF9800]">
              if
            </code>{" "}
            لذا إذا كان الشرط الذي تحصل عليه **خاطئًا** فلن تنفذ كتلة الكود
            بداخلها.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            ملاحظة: الحلقات اللانهائية
          </h3>
          <p className="text-gray-200 leading-8 mb-6">
            **الحلقات اللانهائية** هي شيء، إذا أدخلت شرطًا سيكون صحيحًا إلى
            الأبد فلن تتوقف الحلقة عن التنفيذ حتى تجبر البرنامج على الإغلاق عن
            طريق كتابة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              ctrl + c
            </code>{" "}
            في الطرفية.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            إليك مثال على حلقة لانهائية:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              int x = 0;
              <br />
              while(x &lt; 10) &#123;
              <br />
              &nbsp;&nbsp;printf(&quot;%d\n&quot;, x);
              <br />
              &#125;
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            هذه الحلقة تعمل إلى الأبد لأننا **لا** نزيد{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            في أي مكان أو نغير قيمتها بحيث تجعل الشرط **خاطئًا** وبما أن{" "}
            <code dir="ltr" className="text-[#FF9800]">
              x
            </code>{" "}
            ستبقى كذلك فإن الشرط يكون دائمًا صحيحًا مما يجعلها حلقة لانهائية.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-6">
            حلقة <span dir="ltr">do while</span>
          </h2>
          <p className="text-gray-200 leading-8 mb-6">
            قلنا أن حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            تتحقق من الشرط أولاً ثم تنفذ كتلة الكود إذا كان هذا الشرط صحيحًا.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            ولكن إذا كان الشرط الذي تتحقق منه خاطئًا في البداية فلن تنفذ حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            أبدًا. هنا تبرز حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              do-while
            </code>
            .
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              do while
            </code>{" "}
            تنفذ كتلة الكود أولاً **لمرة واحدة** ثم تتحقق من الشرط لتقرر ما إذا
            كانت تريد تنفيذه مرة أخرى.
          </p>

          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              do &#123;
              <br />
              &nbsp;&nbsp;// some code here
              <br />
              &#125; while(condition);
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            تُستخدم حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              do while
            </code>{" "}
            عندما لا تكون متأكدًا مما إذا كان الشرط الذي تتحقق منه صحيحًا أم لا
            ولكنك لا تزال تريد تنفيذ كتلة من الكود بشكل متكرر.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            مثال:
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              int x = 10;
              <br />
              do &#123;
              <br />
              &nbsp;&nbsp;printf(&quot;%d\n&quot;, x);
              <br />
              &#125; while(x &lt; 10);
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            شاهد، إذا كنت تستخدم حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            في هذا السيناريو فلن يتم تنفيذ كتلة الكود أبدًا لأنها تتحقق من الشرط
            أولاً ولكن بما أن هذه حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              do while
            </code>{" "}
            فإنها تنفذها لمرة واحدة ثم تتحقق من الشرط وبما أنه خاطئ فلن تنفذه
            مرة أخرى.
          </p>
        </section>

        <section className="mb-12" id="3">
          <h2 className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-6">
            حلقة <span dir="ltr">for</span>
          </h2>
          <p className="text-gray-200 leading-8 mb-6">
            تُستخدم حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            إذا كنت تريد التحكم في عدد المرات التي يجب أن تتكرر فيها الحلقة.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            تأخذ حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            3 تعابير كل واحد مفصول بفاصلة منقوطة.
          </p>

          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              for(expression1 ; expression2; expression3) &#123;
              <br />
              &nbsp;&nbsp;// block of code
              <br />
              &#125;
            </code>
          </pre>
          <ul className="list-disc list-inside pr-4 text-gray-200 leading-8 mb-6 space-y-2">
            <li>
              <code dir="ltr" className="text-[#FF9800]">
                Expression 1
              </code>{" "}
              يتم تنفيذه (مرة واحدة) قبل تنفيذ كتلة الكود.
            </li>
            <li>
              <code dir="ltr" className="text-[#FF9800]">
                Expression 2
              </code>{" "}
              يحدد الشرط لتنفيذ كتلة الكود.
            </li>
            <li>
              <code dir="ltr" className="text-[#FF9800]">
                Expression 3
              </code>{" "}
              يتم تنفيذه (في كل مرة) بعد تنفيذ كتلة الكود.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            إليك مثال:
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              int i, sum = 0;
              <br />
              for(i = 1 ; i &lt;= 100 ; i++) &#123;
              <br />
              &nbsp;&nbsp;sum += i;
              <br />
              &#125;
              <br />
              printf(&quot;sum = %d\n&quot;, sum);
            </code>
          </pre>

          <p className="text-gray-200 leading-8 mb-6">
            التعبير الأول يعمل مرة واحدة لتعيين{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            إلى 1، والثاني هو الشرط الذي يتم التحقق منه بعد كل تكرار، والتعبير
            الثالث يتم تشغيله بعد كل تكرار وبعد كل تحقق من الشرط.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            الكود الذي كتبناه يحسب المجموع من 1 إلى 100 عن طريق إضافة قيمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            إلى متغير يسمى{" "}
            <code dir="ltr" className="text-[#FF9800]">
              sum
            </code>{" "}
            ثم زيادة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            بمقدار 1 بعد كل تكرار.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            تخطي التعبير الأول:
          </h3>
          <p className="text-gray-200 leading-8 mb-6">
            **لا** يُطلب منك كتابة كل تعبير في حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            ولكن يجب كتابة المساحة المخصصة للتعبير هكذا:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              for( ; i &lt; 10; i++) &#123;
              <br />
              &nbsp;&nbsp;// code here
              <br />
              &#125;
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            نحن **لم** نعطها التعبير الأول، ولكننا ما زلنا كتبنا الفاصلة
            المنقوطة لها، فحلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            تستخدمها أساسًا لتحديد أي تعبير هو أي.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            يمكنك التسبب في حلقة لانهائية باستخدام حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            أيضًا هكذا:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              for(;;) &#123;
              <br />
              &nbsp;&nbsp;// code here that runs infinitely
              <br />
              &#125;
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            **لا** تحتوي على شرط للتحقق مما يجعلها تعمل إلى الأبد.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            يمكنك أيضًا استخدام حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            كسطر واحد:
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>for(i = 0; i &lt; 100 ; i++);</code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            هذا **لا** يأخذ كتلة من الكود ويقوم فقط بزيادة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            إلى 100.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            حلقات{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            مثل هذه يمكن استخدامها لعمل انتظار مشغول حيث تكتب حلقة كبيرة جدًا
            لعمل تأثير تأخير.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            حلقة <span dir="ltr">for</span> مقابل حلقة{" "}
            <span dir="ltr">while</span>:
          </h3>
          <p className="text-gray-200 leading-8 mb-6">
            يمكنك استخدام كليهما لأي مهمة تتطلب منك التكرار ولكن الفرق الرئيسي
            هو القراءة. تُستخدم حلقات{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            بشكل عام عندما تعرف عدد المرات التي ستعمل فيها الحلقة نوعًا ما مثل
            مؤقت، أما حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            فهي عندما **لا** تعرف عدد المرات التي ستعمل فيها الحلقة ولكن لديك
            شرط متى تتوقف. ولكن هناك حالات محددة عندما يؤدي استخدام إحداها في
            السيناريو الصحيح إلى كود أكثر قابلية للقراءة أثناء كتابة أسطر أقل من
            الكود.
          </p>
        </section>

        <section id="break-continue" className="mb-12">
          <h2 className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-6">
            كلمتا <span dir="ltr">break</span> و <span dir="ltr">continue</span>
          </h2>
          <p className="text-gray-200 leading-8 mb-6">
            <code dir="ltr" className="text-[#FF9800]">
              break
            </code>{" "}
            و{" "}
            <code dir="ltr" className="text-[#FF9800]">
              continue
            </code>{" "}
            تسمح لنا بإجبار الحلقات إما على التوقف تمامًا أو تخطي تكرار.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            كلمة <span dir="ltr">break</span>:
          </h3>
          <p className="text-gray-200 leading-8 mb-6">
            ربما تكون قد رأيت كلمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              break
            </code>{" "}
            من قبل وذلك في عبارة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              switch-case
            </code>
            . تُستخدم كلمة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              break
            </code>{" "}
            في الحلقات لإغلاقها بالكامل.
          </p>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              int i = 0;
              <br />
              while(true) &#123;
              <br />
              &nbsp;&nbsp;if(i == 10) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;printf(&quot;i has reached %d\n&quot;, i);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;break;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;i++;
              <br />
              &#125;
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            ترى هنا هذه الحلقة يجب أن تستمر إلى الأبد بما أن حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              while
            </code>{" "}
            تحصل دائمًا على عبارة **صحيحة** ولكن يمكنك استخدام{" "}
            <code dir="ltr" className="text-[#FF9800]">
              break
            </code>{" "}
            لـ &quot;كسر الحلقة&quot; حرفيًا. وضعنا شرط{" "}
            <code dir="ltr" className="text-[#FF9800]">
              if
            </code>{" "}
            يقول أنه عندما تصل{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            إلى 10 يجب أن أطبع رسالة ثم أخرج أو أكسر الحلقة.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
            كلمة <span dir="ltr">continue</span>:
          </h3>
          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              int i;
              <br />
              for( i = 1; i &lt;= 20 ; i++) &#123;
              <br />
              &nbsp;&nbsp;if(i % 2 != 0 ) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;continue;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;printf(&quot;%d \n&quot;, i);
              <br />
              &#125;
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            لنمشي خلال هذا الكود، أولاً نقوم بإنشاء حلقة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              for
            </code>{" "}
            تعمل من 1 إلى 20.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            ثم نتحقق من متغير{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            الخاص بنا إذا كان عددًا فرديًا (غير قابل للقسمة على 2) فإننا نتابع.
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            <code dir="ltr" className="text-[#FF9800]">
              Continue
            </code>{" "}
            تقول للحلقة أن تتخطى هذا التكرار، لذلك عندما يكون{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            عددًا فرديًا يتم تنفيذ شرط{" "}
            <code dir="ltr" className="text-[#FF9800]">
              if
            </code>{" "}
            ونتابع تخطي التكرار وطباعة{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>
            .
          </p>
          <p className="text-gray-200 leading-8 mb-6">
            إذا كان{" "}
            <code dir="ltr" className="text-[#FF9800]">
              i
            </code>{" "}
            عددًا زوجيًا فإن شرط{" "}
            <code dir="ltr" className="text-[#FF9800]">
              if
            </code>{" "}
            **لا** يتم تنفيذه أبدًا ويمكننا طباعة الرقم.
          </p>

          <pre
            dir="ltr"
            className="bg-[#001f3d] text-[#FF9800] border border-[#FF9800]/40 p-3 rounded-lg mt-2 overflow-auto"
          >
            <code>
              / block of code here
              <br />
              continue;
              <br />/ this block of code never executes!
            </code>
          </pre>
          <p className="text-gray-200 leading-8 mb-6">
            <code dir="ltr" className="text-[#FF9800]">
              Continue
            </code>{" "}
            هي مثل القول للحلقة أن هذه هي نهاية التكرار اذهب إلى التكرار التالي.
          </p>
        </section>

        <section id="4" className="mb-12">
          <h2 className="text-2xl font-semibold text-[#FF9800] border-r-4 pr-2 border-[#FF9800] mt-6 mb-6">
            الواجب (<span dir="ltr">Assignment</span>)
          </h2>
          <p className="text-gray-200 leading-8 mb-4">
            اقرأ وقم بالترميز (code along) من خلال كل هذه **ولا تنس** القيام
            بالتمارين في النهاية!
          </p>
          <div className="p-4 bg-yellow-900/40 border-r-4 border-[#FF9800] rounded-lg">
            <ul className="list-disc list-inside pr-4 mb-6 space-y-2">
              <li className="text-gray-200 leading-8">
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
              <li className="text-gray-200 leading-8">
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
              <li className="text-gray-200 leading-8">
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
              <li className="text-gray-200 leading-8">
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
              <li className="text-gray-200 leading-8">
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
              <li className="text-gray-200 leading-8">
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
              <li className="text-gray-200 leading-8">
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
          <p className="text-gray-200 leading-8 mt-6 mb-4">
            أريدك أن تكتب برنامجًا يتحقق مما إذا كان الرقم هو **رقم أولي**
          </p>
          <p className="text-gray-200 leading-8 mb-4">
            حاول أن تجد طريقة لمعرفة ما إذا كان يمكن قسمته على أي رقم آخر.
          </p>
          <p className="text-gray-200 leading-8 mb-4">
            تذكير سريع بأنه **يجب عليك** التكرار فقط حتى نصف هذا الرقم لأن أي
            شيء أكبر من النصف سيؤدي إلى رقم كسري ولا يمكن قسمته بالكامل.
          </p>
        </section>

        <div className="w-full flex justify-between text-black text-lg font-semibold border-t border-[#FF9800]/40 pt-6 mt-6">
          <Link
            href={"http://localhost:3000/paths/C-Course/8"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10 hover:bg-[#FFB84D] transition"
          >
            الدرس التالي
          </Link>
          <Link
            href={"http://localhost:3000/paths/C-Course/6"}
            className="mt-4 text-center rounded-md mx-auto w-90 bg-[#FF9800] py-2 px-10 hover:bg-[#FFB84D] transition opacity-80"
          >
            الدرس السابق
          </Link>
        </div>
      </div>
    </main>
  );
}
