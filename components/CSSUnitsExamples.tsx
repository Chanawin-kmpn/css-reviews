import React from "react";

const CSSUnitsExamples = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-300">
        ตัวอย่างการใช้งาน CSS Units
      </h1>

      <div className="space-y-8">
        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            1. Pixels (px)
          </h2>
          <p className="mb-4">
            Pixels เป็นหน่วยวัดแบบสัมบูรณ์ที่ใช้บ่อยที่สุดสำหรับการกำหนดขนาด
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>
                {`.box {
  width: 200px;
  height: 100px;
  font-size: 16px;
  padding: 10px;
  margin: 20px;
}`}
              </code>
            </pre>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            2. Ems (em)
          </h2>
          <p className="mb-4">
            Em เป็นหน่วยวัดแบบสัมพัทธ์ที่อ้างอิงจากขนาดตัวอักษรของ element
            ปัจจุบัน
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>
                {`.parent {
  font-size: 16px;
}
.child {
  font-size: 1.5em; /* 24px */
  padding: 1em; /* 24px */
  margin-bottom: 2em; /* 48px */
}`}
              </code>
            </pre>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            3. Rems (rem)
          </h2>
          <p className="mb-4">
            Rem เป็นหน่วยวัดแบบสัมพัทธ์ที่อ้างอิงจากขนาดตัวอักษรของ root element
            (html tag)
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>
                {`html {
  font-size: 16px;
}
.box {
  font-size: 1.25rem; /* 20px */
  padding: 1rem; /* 16px */
  margin: 2rem; /* 32px */
}`}
              </code>
            </pre>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            4. Percentages (%)
          </h2>
          <p className="mb-4">
            Percentages ใช้บ่อยกับความกว้างและความสูง
            เพื่อกำหนดสัดส่วนของพื้นที่ที่มีอยู่
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>
                {`.parent {
  width: 500px;
}
.child {
  width: 50%; /* 250px */
  height: 100%; /* เท่ากับความสูงของ parent */
  padding: 5%; /* 25px (5% ของความกว้าง parent) */
}`}
              </code>
            </pre>
          </div>
        </section>
      </div>

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          คำแนะนำในการเลือกใช้:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            ใช้ <strong>px</strong>{" "}
            เมื่อต้องการความแม่นยำสูงและไม่ต้องการให้ขนาดเปลี่ยนแปลงตามการตั้งค่าของผู้ใช้
          </li>
          <li>
            ใช้ <strong>em</strong> เมื่อต้องการให้ขนาดปรับตามขนาดตัวอักษรของ
            element นั้น ๆ แต่ระวังความซับซ้อนเมื่อใช้กับ element ลูกหลายชั้น
          </li>
          <li>
            ใช้ <strong>rem</strong> สำหรับขนาดตัวอักษรและ layout ทั่วไป
            เพื่อความสอดคล้องและการปรับขนาดที่ดีตามการตั้งค่าของผู้ใช้
          </li>
          <li>
            ใช้ <strong>%</strong>{" "}
            สำหรับความกว้างและความสูงที่ต้องการให้ปรับขนาดตาม parent element
            โดยเฉพาะในการสร้าง responsive layout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSUnitsExamples;
