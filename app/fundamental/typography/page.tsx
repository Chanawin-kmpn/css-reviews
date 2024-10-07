import React from "react";

const TypographyExplanation = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-300">
        การจัดการ Typography ใน CSS
      </h1>

      <div className="space-y-8">
        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            1. Font Family
          </h2>
          <p className="mb-4">
            เราสามารถเปลี่ยนฟอนต์ที่ใช้ด้วย property `font-family`
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>{`font-family: 'Roboto', Arial, sans-serif;`}</code>
            </pre>
          </div>
          <p className="mt-2">
            สามารถใช้ web fonts โดยเพิ่ม link ในส่วน HTML และอ้างอิงในส่วน CSS
          </p>
          <div className="mt-4 space-y-2">
            <p style={{ fontFamily: "'Times New Roman', serif" }}>
              ตัวอย่าง: นี่คือข้อความที่ใช้ฟอนต์ Times New Roman (Serif)
            </p>
            <p style={{ fontFamily: "Arial, sans-serif" }}>
              ตัวอย่าง: นี่คือข้อความที่ใช้ฟอนต์ Arial (Sans-serif)
            </p>
            <p style={{ fontFamily: "'Courier New', monospace" }}>
              ตัวอย่าง: นี่คือข้อความที่ใช้ฟอนต์ Courier New (Monospace)
            </p>
            <p style={{ fontFamily: "'Georgia', serif", fontWeight: "bold" }}>
              ตัวอย่าง: นี่คือข้อความที่ใช้ฟอนต์ Georgia ตัวหนา (Bold)
            </p>
            <p
              style={{
                fontFamily: "'Verdana', sans-serif",
                fontStyle: "italic",
              }}
            >
              ตัวอย่าง: นี่คือข้อความที่ใช้ฟอนต์ Verdana ตัวเอียง (Italic)
            </p>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            2. การจัดรูปแบบข้อความ
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>ตัวหนา:</strong> ใช้ `font-weight: bold;` หรือค่าตั้งแต่
              100-900
            </li>
            <li>
              <strong>ตัวเอียง:</strong> ใช้ `font-style: italic;`
            </li>
            <li>
              <strong>ขีดเส้นใต้:</strong> ใช้ `text-decoration: underline;`
            </li>
          </ul>
          <div className="mt-4">
            <p style={{ fontWeight: "bold" }}>ตัวอย่าง: นี่คือข้อความตัวหนา</p>
            <p style={{ fontStyle: "italic" }}>
              ตัวอย่าง: นี่คือข้อความตัวเอียง
            </p>
            <p style={{ textDecoration: "underline" }}>
              ตัวอย่าง: นี่คือข้อความขีดเส้นใต้
            </p>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            3. การจัดตำแหน่งข้อความ
          </h2>
          <p className="mb-4">
            ใช้ `text-align` เพื่อจัดตำแหน่งข้อความ: left, right, center
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>{`text-align: center;`}</code>
            </pre>
          </div>
          <div className="mt-4">
            <p style={{ textAlign: "left" }}>ตัวอย่าง: ข้อความชิดซ้าย</p>
            <p style={{ textAlign: "center" }}>ตัวอย่าง: ข้อความอยู่กึ่งกลาง</p>
            <p style={{ textAlign: "right" }}>ตัวอย่าง: ข้อความชิดขวา</p>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            4. การแปลงข้อความ
          </h2>
          <p className="mb-4">
            ใช้ `text-transform` เพื่อเปลี่ยนรูปแบบตัวอักษร: uppercase,
            lowercase, capitalize
          </p>
          <div className="rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>{`text-transform: uppercase;`}</code>
            </pre>
          </div>
          <div className="mt-4">
            <p style={{ textTransform: "uppercase" }}>
              ตัวอย่าง: ข้อความตัวพิมพ์ใหญ่ทั้งหมด "Hello jsd 8"
            </p>
            <p style={{ textTransform: "lowercase" }}>
              ตัวอย่าง: ข้อความตัวพิมพ์เล็กทั้งหมด "Hello jsd 8"
            </p>
            <p style={{ textTransform: "capitalize" }}>
              ตัวอย่าง: ข้อความขึ้นต้นด้วยตัวพิมพ์ใหญ่ "Hello jsd 8"
            </p>
          </div>
        </section>

        <section className="rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-200">
            5. การจัดระยะห่าง
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>ระยะห่างระหว่างตัวอักษร:</strong> ใช้ `letter-spacing`
            </li>
            <li>
              <strong>ระยะห่างระหว่างบรรทัด:</strong> ใช้ `line-height`
              (ควรใช้ค่าไม่ต่ำกว่า 1.5 เพื่อความเข้าถึงได้)
            </li>
          </ul>
          <div className="mt-2 rounded-md bg-stone-900 p-4">
            <pre className="text-sm">
              <code>
                {`letter-spacing: 2px;
line-height: 1.5;`}
              </code>
            </pre>
          </div>
          <div className="mt-4">
            <p style={{ letterSpacing: "2px" }}>
              ตัวอย่าง: ข้อความที่มีระยะห่างระหว่างตัวอักษรเพิ่มขึ้น
            </p>
            <p style={{ lineHeight: "2" }}>
              ตัวอย่าง: ข้อความที่มีระยะห่างระหว่างบรรทัดเพิ่มขึ้น
              นี่เป็นบรรทัดที่สอง และนี่เป็นบรรทัดที่สาม
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypographyExplanation;
