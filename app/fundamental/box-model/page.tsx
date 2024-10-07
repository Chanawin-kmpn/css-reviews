import CSSBoxModelBorder from "@/components/CSSBoxModelBorder";
import CSSBoxModelMargin from "@/components/CSSBoxModelMargin";
import React from "react";

const CSSBoxModelPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
        CSS Box Model
      </h1>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Box Model คืออะไร?
        </h2>
        <p className="mb-4">
          Box Model เป็นแนวคิดพื้นฐานใน CSS ที่อธิบายว่าทุก element ใน HTML
          ถูกมองเป็นกล่องสี่เหลี่ยม ประกอบด้วยส่วนประกอบหลัก 4 ส่วน:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>Content: เนื้อหาของ element</li>
          <li>Padding: พื้นที่ว่างรอบเนื้อหา</li>
          <li>Border: เส้นขอบรอบ padding</li>
          <li>Margin: พื้นที่ว่างภายนอกรอบ border</li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">Padding:</h3>
        <p className="mb-4">
          Padding คือพื้นที่ว่างระหว่างเนื้อหาและ border ของ element
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            ใช้ property: padding, padding-top, padding-right, padding-bottom,
            padding-left
          </li>
          <li>สามารถกำหนดค่าเป็นหน่วยต่างๆ เช่น px, em, % เป็นต้น</li>
          <li>ช่วยเพิ่มความสวยงามและอ่านง่ายให้กับเนื้อหา</li>
        </ul>
        <div className="mb-4 bg-white p-4">
          <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
            This element has 20px padding
          </div>
        </div>

        <h4 className="mb-2 mt-6 font-semibold">Shorthand Properties:</h4>
        <p className="mb-2">
          CSS มี shorthand properties สำหรับกำหนด padding ได้หลายรูปแบบ:
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>padding: 10px; (ทุกด้านเท่ากัน)</li>
          <li>padding: 10px 20px; (บน/ล่าง 10px, ซ้าย/ขวา 20px)</li>
          <li>padding: 10px 20px 30px; (บน 10px, ซ้าย/ขวา 20px, ล่าง 30px)</li>
          <li>padding: 10px 20px 30px 40px; (บน, ขวา, ล่าง, ซ้าย ตามลำดับ)</li>
        </ul>

        <div className="mb-4 bg-white p-4">
          <div
            style={{
              backgroundColor: "lightgreen",
              padding: "10px 20px 30px 40px",
            }}
          >
            This element uses shorthand: padding: 10px 20px 30px 40px;
          </div>
        </div>

        <p className="mt-4">
          การจำลำดับ: คิดเหมือนนาฬิกา เริ่มจาก 12 นาฬิกา (บน)
          แล้วเดินตามเข็มนาฬิกา
        </p>

        <h4 className="mb-2 mt-6 font-semibold">Overwriting Values:</h4>
        <p className="mb-2">
          เราสามารถใช้ long-form properties เพื่อ overwrite ค่าบางส่วนได้:
        </p>
        <pre className="rounded bg-gray-100 p-2">
          {`.box {  
  padding: 48px;  
  padding-bottom: 0;  
}`}
        </pre>
        <p className="mt-2">
          นี่จะทำให้ element มี padding 48px ทุกด้าน ยกเว้นด้านล่างที่ไม่มี
          padding
        </p>
      </div>

      <CSSBoxModelBorder />

      <CSSBoxModelMargin />

      <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">
          Box-sizing:
        </h3>
        <p className="mb-4">
          Box-sizing กำหนดวิธีการคำนวณขนาดทั้งหมดของ element
        </p>
        <h4 className="mt-4 font-semibold">content-box (default):</h4>
        <p>
          ขนาดที่กำหนดจะเป็นขนาดของ content เท่านั้น ไม่รวม padding และ border
        </p>
        <div className="mb-4 bg-white p-4">
          <div
            style={{
              boxSizing: "content-box",
              width: "200px",
              padding: "20px",
              border: "5px solid blue",
            }}
          >
            This element has content-box sizing. Total width = 200px + 40px
            (padding) + 10px (border) = 250px
          </div>
        </div>
        <h4 className="mt-4 font-semibold">border-box:</h4>
        <p>ขนาดที่กำหนดจะเป็นขนาดทั้งหมดของ element รวม padding และ border</p>
        <div className="mb-4 bg-white p-4">
          <div
            style={{
              boxSizing: "border-box",
              width: "200px",
              padding: "20px",
              border: "5px solid green",
            }}
          >
            This element has border-box sizing. Total width = 200px (including
            padding and border)
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSBoxModelPage;
