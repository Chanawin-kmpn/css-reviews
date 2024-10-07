import React from "react";

const CSSBoxModelBorder = () => {
  return (
    <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-blue-700">Border:</h3>
      <p className="mb-4">
        Border คือเส้นขอบที่อยู่รอบ padding และเนื้อหาของ element
      </p>
      <ul className="mb-4 list-inside list-disc space-y-2">
        <li>ใช้ property: border, border-width, border-style, border-color</li>
        <li>สามารถกำหนดรูปแบบได้หลากหลาย เช่น solid, dashed, dotted</li>
        <li>ช่วยแบ่งแยกหรือเน้น element จากส่วนอื่นๆ ของหน้าเว็บ</li>
      </ul>
      <div className="mb-4 bg-gray-100 p-4">
        <div style={{ border: "5px solid red", padding: "10px" }}>
          This element has a 5px solid red border
        </div>
      </div>

      <h4 className="mb-2 mt-6 font-semibold">Border Syntax:</h4>
      <p className="mb-2">Border มี 3 ส่วนหลัก: width, style, และ color</p>
      <pre className="mb-4 rounded bg-gray-100 p-3">
        {`/* Longhand */
border-width: 2px;
border-style: solid;
border-color: black;

/* Shorthand */
border: 2px solid black;`}
      </pre>
      <p className="mb-2">ตัวอย่างการใช้งาน Border styles ต่างๆ:</p>
      <div className="mb-4 flex space-x-4">
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Solid
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px dashed red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Dashed
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px dotted blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Dotted
        </div>
      </div>

      <h4 className="mb-2 mt-6 font-semibold">Border Radius:</h4>
      <p className="mb-2">Border radius ใช้สำหรับทำมุมโค้งให้กับ element</p>
      <pre className="mb-4 rounded bg-gray-100 p-3">
        {`/* ทุกมุมเท่ากัน */
border-radius: 10px;

/* แต่ละมุมไม่เท่ากัน (บนซ้าย, บนขวา, ล่างขวา, ล่างซ้าย) */
border-radius: 10px 20px 30px 40px;

/* ทำเป็นวงกลม */
border-radius: 50%;`}
      </pre>
      <p className="mb-2">ตัวอย่างการใช้งาน Border radius:</p>
      <div className="mb-4 flex space-x-4">
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          10px
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            borderRadius: "10px 20px 30px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Mixed
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Circle
        </div>
      </div>

      <h4 className="mb-2 mt-6 font-semibold">Border vs Outline:</h4>
      <p className="mb-4">
        Border และ Outline มีความคล้ายคลึงกัน แต่มีความแตกต่างที่สำคัญ:
      </p>
      <ul className="mb-4 list-inside list-disc">
        <li>Border มีผลต่อ layout, Outline ไม่มี</li>
        <li>Outline อยู่ด้านนอกของ Border</li>
        <li>Outline มี outline-offset property</li>
      </ul>
      <pre className="mb-4 rounded bg-gray-100 p-3">
        {`/* Border */
border: 2px solid black;

/* Outline */
outline: 2px solid red;
outline-offset: 2px;`}
      </pre>
      <p className="mb-2">ตัวอย่างการใช้งาน Border vs Outline:</p>
      <div className="flex space-x-4">
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Border
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            outline: "2px solid red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Outline
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            border: "2px solid black",
            outline: "2px solid red",
            outlineOffset: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Both
        </div>
      </div>
    </div>
  );
};

export default CSSBoxModelBorder;
