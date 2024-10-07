import CombinatorsExamples from "@/components/CominatorsExamples";
import InteractivePseudoClasses from "@/components/InteractivePseudoClasses";
import React from "react";

const CSSSelectorsPage = () => {
  const selectors = [
    {
      name: "Element Selector",
      example: "p",
      description: "เลือกทุก <p> elements",
    },
    {
      name: "ID Selector",
      example: "#para1",
      description: "เลือก element ที่มี id='para1'",
    },
    {
      name: "Class Selector",
      example: ".center",
      description: "เลือกทุก elements ที่มี class='center'",
    },
    {
      name: "Universal Selector",
      example: "*",
      description: "เลือกทุก elements บนหน้าเว็บ",
    },
    {
      name: "Grouping Selector",
      example: "h1, h2, p",
      description: "เลือกทุก <h1>, <h2>, และ <p> elements",
    },
  ];

  const pseudoClasses = [
    {
      name: ":hover",
      description: "ใช้เมื่อเมาส์ชี้ที่ element",
      example: "button:hover { color: blue; }",
    },
    {
      name: ":focus",
      description: "ใช้เมื่อ element ได้รับโฟกัส (เช่น คลิกหรือ tab)",
      example: "input:focus { border-color: blue; }",
    },
    {
      name: ":checked",
      description: "ใช้กับ checkbox หรือ radio button ที่ถูกเลือก",
      example: "input:checked { width: 24px; height: 24px; }",
    },
    {
      name: ":first-child",
      description: "เลือก element แรกในกลุ่ม",
      example: "li:first-child { font-weight: bold; }",
    },
    {
      name: ":last-child",
      description: "เลือก element สุดท้ายในกลุ่ม",
      example: "p:last-child { margin-bottom: 0; }",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-300">
        CSS Selectors
      </h1>
      <div className="mb-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <p className="mb-4">
          CSS Selectors ใช้เพื่อเลือก HTML elements ที่คุณต้องการจัดรูปแบบ
          สามารถแบ่งออกเป็น 5 ประเภทหลัก:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>Simple selectors (เลือกตาม name, id, class)</li>
          <li>Combinator selectors (เลือกตามความสัมพันธ์ระหว่าง elements)</li>
          <li>Pseudo-class selectors (เลือกตามสถานะของ element)</li>
          <li>
            Pseudo-elements selectors (เลือกและจัดรูปแบบส่วนหนึ่งของ element)
          </li>
          <li>Attribute selectors (เลือกตาม attribute หรือค่าของ attribute)</li>
        </ol>
      </div>
      <div className="rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          ตัวอย่าง Simple Selectors ที่ใช้บ่อย
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-stone-800">
            <thead className="bg-stone-900">
              <tr>
                <th className="border-b px-4 py-2 text-left">Selector</th>
                <th className="border-b px-4 py-2 text-left">ตัวอย่าง</th>
                <th className="border-b px-4 py-2 text-left">คำอธิบาย</th>
              </tr>
            </thead>
            <tbody>
              {selectors.map((selector, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-stone-900" : ""}
                >
                  <td className="border-b px-4 py-2 font-medium">
                    {selector.name}
                  </td>
                  <td className="border-b px-4 py-2">
                    <code className="rounded bg-stone-800 px-2 py-1">
                      {selector.example}
                    </code>
                  </td>
                  <td className="border-b px-4 py-2">{selector.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          ตัวอย่างการใช้งาน:
        </h3>
        <pre className="overflow-x-auto rounded-md bg-stone-900 p-4">
          <code className="text-sm">
            {`/* Element Selector */
p {
  color: red;
}

/* ID Selector */
#header {
  background-color: blue;
}

/* Class Selector */
.highlight {
  font-weight: bold;
}

/* Universal Selector */
* {
  margin: 0;
  padding: 0;
}

/* Grouping Selector */
h1, h2, h3 {
  font-family: Arial, sans-serif;
}`}
          </code>
        </pre>
      </div>
      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          Pseudo-classes
        </h2>
        <p className="mb-4">
          Pseudo-classes ใน CSS ช่วยให้เราสามารถเลือก elements
          ตามสถานะหรือเงื่อนไขพิเศษได้ ทำให้สามารถสร้าง styles
          ที่ตอบสนองต่อการกระทำของผู้ใช้หรือโครงสร้างของ DOM ได้
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-stone-800">
            <thead className="bg-stone-700">
              <tr>
                <th className="border-b px-4 py-2 text-left">Pseudo-class</th>
                <th className="border-b px-4 py-2 text-left">คำอธิบาย</th>
                <th className="border-b px-4 py-2 text-left">ตัวอย่าง</th>
              </tr>
            </thead>
            <tbody>
              {pseudoClasses.map((pc, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-stone-900" : ""}
                >
                  <td className="border-b px-4 py-2 font-medium">{pc.name}</td>
                  <td className="border-b px-4 py-2">{pc.description}</td>
                  <td className="border-b px-4 py-2">
                    <code className="rounded bg-stone-700 px-2 py-1">
                      {pc.example}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          ข้อควรรู้เกี่ยวกับ Pseudo-classes:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Pseudo-classes ช่วยให้เราสร้าง UI ที่ตอบสนองได้โดยไม่ต้องใช้
            JavaScript
          </li>
          <li>
            สามารถใช้ร่วมกับ selectors อื่นๆ เพื่อสร้าง styles
            ที่เฉพาะเจาะจงมากขึ้น
          </li>
          <li>
            บาง pseudo-classes เช่น :hover และ :focus ช่วยเพิ่ม accessibility
            ให้กับเว็บไซต์
          </li>
          <li>
            :first-child และ :last-child ช่วยในการจัดการ layout โดยไม่ต้องเพิ่ม
            class พิเศษ
          </li>
        </ul>
      </div>
      <InteractivePseudoClasses />
      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <p className="mb-2 text-2xl font-semibold text-blue-200">
          Pseudo-element (soon...)
        </p>
      </div>
      <CombinatorsExamples />
      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <p className="mb-2 text-2xl font-semibold text-blue-200">
          Attribute selectors (soon...)
        </p>
      </div>
    </div>
  );
};

export default CSSSelectorsPage;
