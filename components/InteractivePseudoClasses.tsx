"use client";
import React, { useState } from "react";

interface CheckedItems {
  [key: string]: boolean;
}

const InteractivePseudoClasses = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const toppings = ["เห็ด", "แฮม", "สับปะรด", "พริก"];

  const CSSExample = ({ code }: any) => (
    <pre className="overflow-x-auto rounded-md bg-stone-800 p-2 text-sm">
      <code>{code}</code>
    </pre>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="mb-6 text-2xl font-bold text-blue-300">
        Interactive Pseudo-classes Demo
      </p>

      <style>{`
        .demo-button {
          background-color: #3498db;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-right: 10px;
        }
        .demo-button:hover {
          background-color: #2980b9;
        }
        .demo-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
        }
        .demo-checkbox {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        .demo-checkbox:checked {
          width: 24px;
          height: 24px;
          outline: 2px solid #3498db;
        }
        .demo-list {
          list-style-type: none;
          padding: 0;
        }
        .demo-list-item {
          padding: 10px;
          background-color: #ecf0f1;
          margin-bottom: 5px;
        }
        .demo-list-item:first-child {
          background-color: #e74c3c;
          color: white;
        }
        .demo-list-item:last-child {
          background-color: #3498db;
          color: white;
        }
      `}</style>

      <div className="mb-8">
        <p className="mb-4 text-xl font-semibold text-blue-200">
          :hover และ :focus
        </p>
        <div className="flex flex-wrap">
          <div className="w-full pr-4 md:w-1/2">
            <p className="mb-4">
              ลองนำเมาส์ไปชี้ที่ปุ่มหรือคลิกเพื่อให้ปุ่มได้รับโฟกัส:
            </p>
            <button className="demo-button">Hover หรือ Focus ที่นี่</button>
            <button className="demo-button">ลองปุ่มนี้ด้วย</button>
          </div>
          <div className="mt-4 w-full md:mt-0 md:w-1/2">
            <CSSExample
              code={`
.demo-button:hover {
  background-color: #2980b9;
}
.demo-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
}
            `}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-4 text-xl font-semibold text-blue-200">:checked</p>
        <div className="flex flex-wrap">
          <div className="w-full pr-4 md:w-1/2">
            <p className="mb-4">เลือกท็อปปิ้งพิซซ่าที่คุณชอบ:</p>
            <div className="space-y-2">
              {toppings.map((topping) => (
                <label key={topping} className="flex items-center">
                  <input
                    type="checkbox"
                    name={topping}
                    checked={checkedItems[topping] || false}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{topping}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4 w-full md:mt-0 md:w-1/2">
            <CSSExample
              code={`
.demo-checkbox:checked {
  width: 24px;
  height: 24px;
  outline: 2px solid #3498db;
}
            `}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-4 text-xl font-semibold text-blue-200">
          :first-child และ :last-child
        </p>
        <div className="flex flex-wrap">
          <div className="w-full pr-4 md:w-1/2">
            <p className="mb-4">สังเกตสีของรายการแรกและรายการสุดท้าย:</p>
            <ul className="demo-list text-black">
              <li className="demo-list-item">รายการที่ 1</li>
              <li className="demo-list-item">รายการที่ 2</li>
              <li className="demo-list-item">รายการที่ 3</li>
              <li className="demo-list-item">รายการที่ 4</li>
            </ul>
          </div>
          <div className="mt-4 w-full md:mt-0 md:w-1/2">
            <CSSExample
              code={`
.demo-list-item:first-child {
  background-color: #e74c3c;
  color: white;
}
.demo-list-item:last-child {
  background-color: #3498db;
  color: white;
}
            `}
            />
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-md bg-stone-800 p-4">
        <p className="mb-2 text-lg font-semibold text-blue-200">คำอธิบาย:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>:hover</strong> - เปลี่ยนสีพื้นหลังเมื่อนำเมาส์ไปชี้
          </li>
          <li>
            <strong>:focus</strong> - แสดง box-shadow รอบปุ่มเมื่อได้รับโฟกัส
          </li>
          <li>
            <strong>:checked</strong> - เพิ่มขนาดและเปลี่ยนสีขอบของ checkbox
            เมื่อถูกเลือก
          </li>
          <li>
            <strong>:first-child</strong> - กำหนดสีแดงให้กับรายการแรกในลิสต์
          </li>
          <li>
            <strong>:last-child</strong> -
            กำหนดสีน้ำเงินให้กับรายการสุดท้ายในลิสต์
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InteractivePseudoClasses;
