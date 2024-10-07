import React from "react";
import CSSCombinatorsExamples from "./CSSCombinatorsExamples";

const CSSCombinatorsInfo = () => {
  const combinators = [
    {
      name: "Descendant selector (space)",
      syntax: "element element",
      example: "div p",
      description: "เลือกทุก <p> ที่อยู่ภายใน <div> ไม่ว่าจะอยู่ลึกแค่ไหน",
    },
    {
      name: "Child selector (>)",
      syntax: "element > element",
      example: "div > p",
      description: "เลือกเฉพาะ <p> ที่เป็นลูกโดยตรงของ <div>",
    },
    {
      name: "Adjacent sibling selector (+)",
      syntax: "element + element",
      example: "div + p",
      description: "เลือก <p> แรกที่อยู่ถัดจาก <div> ทันที",
    },
    {
      name: "General sibling selector (~)",
      syntax: "element ~ element",
      example: "p ~ ul",
      description: "เลือกทุก <ul> ที่เป็น siblings ของ <p> และอยู่หลัง <p>",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          CSS Combinators
        </h2>
        <p className="mb-4">
          Combinators ใน CSS ช่วยอธิบายความสัมพันธ์ระหว่าง selectors
          ทำให้เราสามารถเลือก elements ได้อย่างเฉพาะเจาะจงตามโครงสร้างของ DOM
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-stone-800">
            <thead className="bg-stone-950">
              <tr>
                <th className="border-b px-4 py-2 text-left">Combinator</th>
                <th className="border-b px-4 py-2 text-left">Syntax</th>
                <th className="border-b px-4 py-2 text-left">ตัวอย่าง</th>
                <th className="border-b px-4 py-2 text-left">คำอธิบาย</th>
              </tr>
            </thead>
            <tbody>
              {combinators.map((combinator, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-stone-900" : ""}
                >
                  <td className="border-b px-4 py-2 font-medium">
                    {combinator.name}
                  </td>
                  <td className="border-b px-4 py-2">
                    <code className="rounded bg-stone-700 px-2 py-1">
                      {combinator.syntax}
                    </code>
                  </td>
                  <td className="border-b px-4 py-2">
                    <code className="rounded bg-stone-700 px-2 py-1">
                      {combinator.example}
                    </code>
                  </td>
                  <td className="border-b px-4 py-2">
                    {combinator.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          ข้อควรรู้เกี่ยวกับ CSS Combinators:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Combinators ช่วยให้เราเลือก elements
            ตามความสัมพันธ์ระหว่างพวกมันในโครงสร้าง DOM
          </li>
          <li>
            ใช้ Combinators เพื่อสร้าง CSS ที่มีความเฉพาะเจาะจงโดยไม่ต้องเพิ่ม
            classes หรือ IDs มากเกินไป
          </li>
          <li>
            Descendant selector (space) มีความยืดหยุ่นมากที่สุด
            แต่อาจส่งผลกระทบต่อ elements ที่ไม่ต้องการได้
          </li>
          <li>
            Child selector (&gt;) ให้ความแม่นยำมากกว่าในการเลือกเฉพาะ direct
            children
          </li>
          <li>
            Adjacent sibling selector (+) และ General sibling selector (~)
            ช่วยในการจัดการ layout และความสัมพันธ์ระหว่าง elements
            ในระดับเดียวกัน
          </li>
          <li>
            การใช้ Combinators อย่างเหมาะสมช่วยลดความซับซ้อนของ CSS
            และทำให้โค้ดอ่านง่ายขึ้น
          </li>
        </ul>
      </div>
      <CSSCombinatorsExamples />
    </div>
  );
};

export default CSSCombinatorsInfo;
