import React from "react";

const CSSAnatomyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
        ส่วนประกอบของ CSS
      </h1>

      <div className="mb-8">
        <img
          src="https://www.w3schools.com/css/img_selector.gif"
          alt="CSS Syntax"
          className="mx-auto rounded-lg shadow-lg"
        />
        <p className="mt-2 text-center text-sm text-gray-600">
          Cr. https://www.w3schools.com/css/css_syntax.asp
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Anatomy of a Style Rule
        </h2>
        <p className="mb-4">
          CSS (Cascading Style Sheets) ประกอบด้วยชุดของกฎ (rules)
          ที่กำหนดวิธีการแสดงผลของเอกสาร HTML แต่ละกฎประกอบด้วยส่วนสำคัญดังนี้:
        </p>
        <ol className="mb-4 list-inside list-decimal space-y-2">
          <li>
            <strong className="text-blue-600">Selector:</strong> เลือกองค์ประกอบ
            HTML ที่จะใช้สไตล์
          </li>
          <li>
            <strong className="text-blue-600">Declaration Block:</strong>{" "}
            ประกอบด้วยหนึ่งหรือหลาย declarations ที่อยู่ภายในวงเล็บปีกกา {}
          </li>
          <li>
            <strong className="text-blue-600">Declaration:</strong> ประกอบด้วย
            property และ value คั่นด้วยเครื่องหมายทวิภาค (:)
            และจบด้วยเครื่องหมายอัฒภาค (;)
          </li>
        </ol>
        <div className="rounded-md bg-gray-100 p-4">
          <pre className="text-sm">
            <code>
              selector {"{"}
              property1: value1; property2: value2;
              {"}"}
            </code>
          </pre>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">ตัวอย่าง:</h3>
        <div className="rounded-md bg-white p-4">
          <pre className="text-sm">
            <code>
              p {"{"}
              color: red; font-size: 16px; text-align: center;
              {"}"}
            </code>
          </pre>
        </div>
        <p className="mt-4">ในตัวอย่างนี้:</p>
        <ul className="mt-2 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-600">Selector:</strong> p (เลือกทุก
            paragraph elements)
          </li>
          <li>
            <strong className="text-blue-600">Declaration Block:</strong>{" "}
            ทุกอย่างภายในวงเล็บปีกกา {"{}"}
          </li>
          <li>
            <strong className="text-blue-600">Declarations:</strong>
            <ul className="ml-4 list-inside list-disc">
              <li>color: red;</li>
              <li>font-size: 16px;</li>
              <li>text-align: center;</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSAnatomyPage;
