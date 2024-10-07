import CSSUnitsExamples from "@/components/CSSUnitsExamples";
import React from "react";

const CSSUnitsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-300">
        หน่วยวัดใน CSS (CSS Units)
      </h1>

      <div className="rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          ประเภทของหน่วยวัดใน CSS
        </h2>
        <p className="mb-4">
          CSS มีหน่วยวัดหลายประเภทที่ใช้กำหนดขนาดและระยะต่าง ๆ ในการจัดวาง
          layout ต่อไปนี้เป็นหน่วยวัดที่ใช้บ่อย:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">Pixels (px):</strong>{" "}
            หน่วยวัดแบบสัมบูรณ์ ตรงกับสิ่งที่เห็นบนหน้าจอ
          </li>
          <li>
            <strong className="text-blue-300">Ems (em):</strong>{" "}
            หน่วยวัดแบบสัมพัทธ์ อ้างอิงจากขนาดตัวอักษรของ element ปัจจุบัน
          </li>
          <li>
            <strong className="text-blue-300">Rems (rem):</strong>{" "}
            หน่วยวัดแบบสัมพัทธ์ อ้างอิงจากขนาดตัวอักษรของ root element
          </li>
          <li>
            <strong className="text-blue-300">Percentages (%):</strong>{" "}
            หน่วยวัดแบบสัมพัทธ์ คำนวณจากขนาดของ parent element
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          ตัวอย่างการใช้งาน:
        </h3>
        <div className="rounded-md bg-stone-900 p-4">
          <pre className="text-sm">
            <code>
              {`.box {
  width: 100px;
  font-size: 1rem;
  padding: 1em;
  margin: 10%;
}`}
            </code>
          </pre>
        </div>
        <p className="mt-4">ในตัวอย่างนี้:</p>
        <ul className="mt-2 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">width: 100px;</strong>{" "}
            กำหนดความกว้างแบบสัมบูรณ์
          </li>
          <li>
            <strong className="text-blue-300">font-size: 1rem;</strong>{" "}
            กำหนดขนาดตัวอักษรโดยอ้างอิงจาก root element
          </li>
          <li>
            <strong className="text-blue-300">padding: 1em;</strong> กำหนด
            padding โดยอ้างอิงจากขนาดตัวอักษรของ element นั้น ๆ
          </li>
          <li>
            <strong className="text-blue-300">margin: 10%;</strong> กำหนด margin
            เป็น 10% ของความกว้างของ parent element
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          คำแนะนำในการเลือกใช้:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            ใช้ <strong>px</strong> สำหรับขนาดที่ต้องการความแม่นยำสูง
          </li>
          <li>
            ใช้ <strong>rem</strong> สำหรับขนาดตัวอักษรและ layout ทั่วไป
            เพื่อความสอดคล้องและการปรับขนาดที่ดี
          </li>
          <li>
            ใช้ <strong>em</strong> เมื่อต้องการให้ขนาดปรับตามขนาดตัวอักษรของ
            parent element
          </li>
          <li>
            ใช้ <strong>%</strong>{" "}
            สำหรับความกว้างและความสูงที่ต้องการให้ปรับขนาดตาม parent element
          </li>
        </ul>
      </div>
      <CSSUnitsExamples />
    </div>
  );
};

export default CSSUnitsPage;
