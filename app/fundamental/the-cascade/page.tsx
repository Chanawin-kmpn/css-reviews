import React from "react";

const CSSCascadePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
        The Cascade ใน CSS
      </h1>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Cascade Algorithm คืออะไร?
        </h2>
        <p className="mb-4">
          Cascade Algorithm เป็นกระบวนการที่เบราว์เซอร์ใช้ในการตัดสินใจว่าจะใช้
          style ใดกับ element HTML เมื่อมีหลาย style rules ที่อาจขัดแย้งกัน
        </p>
        <ol className="mb-4 list-inside list-decimal space-y-2">
          <li>เบราว์เซอร์รวบรวม rules ที่เกี่ยวข้องทั้งหมด</li>
          <li>จัดลำดับความสำคัญของ rules ตาม specificity</li>
          <li>แก้ไขความขัดแย้งโดยใช้ rule ที่มี specificity สูงกว่า</li>
        </ol>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">ตัวอย่าง:</h3>
        <div className="rounded-md bg-white p-4">
          <pre className="text-sm">
            <code>
              {`p {
  font-weight: bold;
  color: hsl(0deg 0% 10%);
}
.introduction {
  color: violet;
}`}
            </code>
          </pre>
        </div>
        <p className="mt-4">ผลลัพธ์:</p>
        <ul className="mt-2 list-inside list-disc space-y-2">
          <li>ข้อความจะเป็นตัวหนา (จาก tag selector)</li>
          <li>
            สีของข้อความจะเป็นสีม่วง (จาก class selector ที่มี specificity
            สูงกว่า)
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Specificity ใน CSS
        </h2>
        <p className="mb-4">
          Specificity คือค่าความสำคัญของ selector ที่ใช้ในการตัดสินว่า style
          ใดจะถูกนำมาใช้ เมื่อมีความขัดแย้ง
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>Inline styles มี specificity สูงสุด</li>
          <li>ID selectors มี specificity สูงกว่า class selectors</li>
          <li>Class selectors มี specificity สูงกว่า tag selectors</li>
        </ul>
      </div>

      {/* <div className="mt-8 rounded-lg bg-blue-50 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">
          เปรียบเทียบกับ JavaScript:
        </h3>
        <p className="mb-4">
          กระบวนการ cascade ใน CSS คล้ายกับการใช้ spread syntax ใน JavaScript:
        </p>
        <div className="rounded-md bg-white p-4">
          <pre className="text-sm">
            <code>
              {`const appliedStyles = {
  ...inheritedStyles,
  ...tagStyles,
  ...classStyles,
  ...idStyles,
  ...inlineStyles,
  ...importantStyles
};`}
            </code>
          </pre>
        </div>
        <p className="mt-4">
          Styles ที่มี specificity สูงกว่าจะ override styles ที่มี specificity
          ต่ำกว่า เช่นเดียวกับการ spread objects ใน JavaScript
        </p>
      </div> */}
    </div>
  );
};

export default CSSCascadePage;
