"use client";
import React, { useState } from "react";

const FlexboxInteractive = () => {
  const [justifyContent, setJustifyContent] = useState<string>("flex-start");
  const [alignItems, setAlignItems] = useState<string>("stretch");
  return (
    <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-blue-200">
        Directions and Alignment:
      </h3>
      <p className="mb-4">
        Flexbox ให้คุณควบคุมทิศทางและการจัดวางของ elements ได้อย่างยืดหยุ่น
        ลองปรับค่าด้านล่างเพื่อดูผลลัพธ์:
      </p>

      <div className="mb-4">
        <label className="mb-2 block">justify-content:</label>
        <select
          value={justifyContent}
          onChange={(e) => setJustifyContent(e.target.value)}
          className="w-full rounded bg-stone-700 p-2"
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block">align-items:</label>
        <select
          value={alignItems}
          onChange={(e) => setAlignItems(e.target.value)}
          className="w-full rounded bg-stone-700 p-2"
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </select>
      </div>

      <div className="relative h-80 rounded bg-stone-700 p-8">
        <div
          className="flex h-full w-full"
          style={{ justifyContent, alignItems }}
        >
          <div className="m-1 h-16 w-16 rounded bg-blue-500"></div>
          <div className="m-1 h-16 w-16 rounded bg-green-500"></div>
          <div className="m-1 h-16 w-16 rounded bg-red-500"></div>
        </div>

        {/* แกนหลัก (Main Axis) */}
        <svg
          className="absolute inset-x-0 bottom-4 h-12 w-full"
          viewBox="0 0 100 20"
        >
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="10"
            stroke="yellow"
            strokeWidth="2"
          />
          <polygon points="90,10 85,5 85,15" fill="yellow" />
          <text x="50" y="20" textAnchor="middle" fill="yellow" fontSize="5">
            แกนหลัก (Main Axis)
          </text>
        </svg>

        {/* แกนรอง (Cross Axis) */}
        <svg
          className="absolute bottom-0 left-2 h-full w-12"
          viewBox="0 0 20 100"
        >
          <line x1="10" y1="10" x2="10" y2="90" stroke="cyan" strokeWidth="2" />
          <polygon points="10,10 5,15 15,15" fill="cyan" />
          <text
            x="-50"
            y="8"
            transform="rotate(-90)"
            textAnchor="middle"
            fill="cyan"
            fontSize="5"
          >
            แกนรอง (Cross Axis)
          </text>
        </svg>
      </div>

      <p className="mt-4">CSS ที่ใช้:</p>
      <pre className="mt-2 rounded bg-stone-900 p-4 text-sm">
        {`.container {  
display: flex;  
justify-content: ${justifyContent};  
align-items: ${alignItems};  
}`}
      </pre>
      <div>
        <p className="mt-4">ในตัวอย่างนี้:</p>
        <ul className="mt-2 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">display: flex;</strong> เปิดใช้งาน
            Flexbox สำหรับ element นั้น
          </li>
          <li>
            <strong className="text-blue-300">
              justify-content: {justifyContent};
            </strong>{" "}
            {justifyContent === "flex-start" &&
              "จัดวาง child elements ชิดซ้ายตามแกนหลัก"}
            {justifyContent === "flex-end" &&
              "จัดวาง child elements ชิดขวาตามแกนหลัก"}
            {justifyContent === "center" &&
              "จัดวาง child elements ตรงกลางตามแกนหลัก"}
            {justifyContent === "space-between" &&
              "กระจายพื้นที่ระหว่าง child elements ตามแกนหลัก โดยให้ element แรกชิดซ้ายและ element สุดท้ายชิดขวา"}
            {justifyContent === "space-around" &&
              "กระจายพื้นที่รอบ child elements ตามแกนหลัก โดยให้พื้นที่เท่ากันทั้งซ้ายและขวาของแต่ละ element"}
          </li>
          <li>
            <strong className="text-blue-300">
              align-items: {alignItems};
            </strong>{" "}
            {alignItems === "stretch" &&
              "ยืด child elements ให้เต็มความสูงของ container ตามแกนรอง"}
            {alignItems === "flex-start" &&
              "จัดวาง child elements ชิดด้านบนตามแกนรอง"}
            {alignItems === "flex-end" &&
              "จัดวาง child elements ชิดด้านล่างตามแกนรอง"}
            {alignItems === "center" &&
              "จัดวาง child elements ตรงกลางตามแกนรอง"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlexboxInteractive;
