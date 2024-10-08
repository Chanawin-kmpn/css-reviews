import FlexboxGrowingShrinking from "@/components/FlexboxGrowingShrinking";
import FlexboxInteractive from "@/components/FlexboxInteractive";
import React from "react";

const FlexboxIntroPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-300">
        Flexbox (Flexible Box Layout)
      </h1>

      <div className="rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          เกริ่นนำเกี่ยวกับ Flexbox
        </h2>
        <p className="mb-4">
          Flexbox เป็นโมเดลการจัดวางใน CSS
          ที่ช่วยให้เราจัดการกับการกระจายพื้นที่และการจัดเรียงองค์ประกอบภายในคอนเทนเนอร์ได้อย่างยืดหยุ่น
          โดยมีจุดเด่นดังนี้:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">ควบคุมแกนหลัก:</strong> Flexbox
            ใช้สำหรับควบคุมการกระจายองค์ประกอบตามแกนหลัก (primary axis)
            ทั้งแนวนอนหรือแนวตั้ง
          </li>
          <li>
            <strong className="text-blue-300">ยังคงมีความสำคัญ:</strong> แม้ว่า
            CSS Grid จะได้รับการสนับสนุนอย่างกว้างขวาง แต่ Flexbox
            ก็ยังคงมีบทบาทสำคัญในการจัดวาง layout
          </li>
          <li>
            <strong className="text-blue-300">เหมาะสำหรับมิติเดียว:</strong>{" "}
            Flexbox เหมาะสำหรับการจัดวางในมิติเดียว ในขณะที่ CSS Grid
            เหมาะกับการจัดวางแบบสองมิติ
          </li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-blue-200">
          แนวคิดหลักของ Flexbox
        </h3>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">แกนหลัก (Main Axis):</strong>{" "}
            คือแกนที่ items จัดเรียงตัวตาม direction หลัก
          </li>
          <li>
            <strong className="text-blue-300">แกนรอง (Cross Axis):</strong>{" "}
            คือแกนที่ตั้งฉากกับแกนหลัก
          </li>
          <li>
            <strong className="text-blue-300">Flex Container:</strong> คือ
            element ที่ใช้ display: flex
          </li>
          <li>
            <strong className="text-blue-300">Flex Items:</strong> คือ children
            ของ Flex Container
          </li>
        </ul>
      </div>

      <FlexboxInteractive />

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          คุณสมบัติหลักของ Flexbox:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">justify-content:</strong>{" "}
            ใช้จัดการการกระจายของ items ตามแกนหลัก
          </li>
          <li>
            <strong className="text-blue-300">align-items:</strong>{" "}
            ใช้จัดการการวาง items ตามแกนรอง
          </li>
          <li>
            <strong className="text-blue-300">flex-direction:</strong>{" "}
            กำหนดทิศทางของแกนหลัก (row หรือ column)
          </li>
          <li>
            <strong className="text-blue-300">flex-wrap:</strong>{" "}
            ควบคุมการขึ้นบรรทัดใหม่ของ items
          </li>
          <li>
            <strong className="text-blue-300">flex-grow:</strong>{" "}
            กำหนดอัตราส่วนการขยายตัวของ item เมื่อมีพื้นที่เหลือ
          </li>
          <li>
            <strong className="text-blue-300">flex-shrink:</strong>{" "}
            กำหนดอัตราส่วนการหดตัวของ item เมื่อพื้นที่ไม่พอ
          </li>
          <li>
            <strong className="text-blue-300">flex-basis:</strong>{" "}
            กำหนดขนาดเริ่มต้นของ item ก่อนการขยายหรือหดตัว
          </li>
        </ul>
      </div>

      <FlexboxGrowingShrinking />

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          เทคนิคเพิ่มเติม:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">gap:</strong> สร้างช่องว่างระหว่าง
            Flex Items
          </li>
          <li>
            <strong className="text-blue-300">margin: auto:</strong>{" "}
            ใช้จัดการพื้นที่ว่างที่เหลือระหว่าง Flex Items
          </li>
          <li>
            <strong className="text-blue-300">align-content:</strong>{" "}
            ใช้จัดการการกระจายของ wrapped lines ตามแกนรอง
          </li>
          <li>
            <strong className="text-blue-300">min-width: 0:</strong> ป้องกันการ
            overflow ของ Flex Items ที่มีเนื้อหายาว
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlexboxIntroPage;
