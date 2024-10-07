import React from "react";

const CSSBoxModelMargin = () => {
  return (
    <div className="mt-8 rounded-lg bg-green-50 p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-green-700">Margin:</h3>
      <p className="mb-4">
        Margin คือพื้นที่ว่างรอบนอกของ element ที่ใช้กำหนดระยะห่างจาก element
        อื่นๆ
      </p>
      <ul className="mb-4 list-inside list-disc space-y-2">
        <li>
          ใช้ property: margin, margin-top, margin-right, margin-bottom,
          margin-left
        </li>
        <li>สามารถกำหนดค่าเป็นหน่วยต่างๆ เช่น px, em, % หรือ auto</li>
        <li>ช่วยจัดระยะห่างระหว่าง element และสร้าง layout ที่เหมาะสม</li>
      </ul>
      <div className="mb-4 bg-white p-4">
        <div
          style={{
            backgroundColor: "lightgreen",
            margin: "20px",
            padding: "10px",
          }}
        >
          This element has 20px margin
        </div>
      </div>

      <h4 className="mb-2 mt-6 font-semibold">Shorthand Properties:</h4>
      <p className="mb-2">
        CSS มี shorthand properties สำหรับกำหนด margin ได้หลายรูปแบบ:
      </p>
      <ul className="mb-4 list-inside list-disc">
        <li>margin: 10px; (ทุกด้านเท่ากัน)</li>
        <li>margin: 10px 20px; (บน/ล่าง 10px, ซ้าย/ขวา 20px)</li>
        <li>margin: 10px 20px 30px; (บน 10px, ซ้าย/ขวา 20px, ล่าง 30px)</li>
        <li>margin: 10px 20px 30px 40px; (บน, ขวา, ล่าง, ซ้าย ตามลำดับ)</li>
      </ul>

      <div className="mb-4 bg-white p-4">
        <div
          style={{
            backgroundColor: "lightblue",
            margin: "10px 20px 30px 40px",
            padding: "10px",
          }}
        >
          This element uses shorthand: margin: 10px 20px 30px 40px;
        </div>
      </div>

      <h4 className="mb-2 mt-6 font-semibold">Negative Margin:</h4>
      <p className="mb-2">
        Margin สามารถใช้ค่าติดลบได้ ซึ่งจะทำให้ element
        เคลื่อนที่ในทิศทางตรงข้าม:
      </p>
      <pre className="mb-4 rounded bg-gray-100 p-3">
        {`.box {
  margin-top: -20px; /* เลื่อนขึ้นบน 20px */
  margin-left: -10px; /* เลื่อนไปทางซ้าย 10px */
}

.sibling {
  margin-top: -15px; /* ดึงเข้าใกล้ element ด้านบน */
}`}
      </pre>
      <div className="mb-4 bg-white p-4">
        <div
          style={{
            backgroundColor: "pink",
            padding: "10px",
            marginBottom: "-20px",
          }}
        >
          This box has negative bottom margin
        </div>
        <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
          This box is pulled up by the negative margin above
        </div>
      </div>

      <p className="mt-4">Negative margin สามารถใช้เพื่อ:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>ดึง element ออกนอก parent</li>
        <li>ดึง sibling elements เข้าใกล้กัน</li>
        <li>สร้าง overlap effects</li>
      </ul>

      <p className="mt-4">
        ควรใช้ negative margin อย่างระมัดระวัง เนื่องจากอาจส่งผลกระทบต่อ layout
        ที่ไม่คาดคิดได้
      </p>
    </div>
  );
};

export default CSSBoxModelMargin;
