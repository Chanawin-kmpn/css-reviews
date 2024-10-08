import GridAlignment from "@/components/GridAlignment";
import GridInteractive from "@/components/GridInteractive";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const CSSGridIntroPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-300">
        CSS Grid Layout
      </h1>

      <div className="rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          เกริ่นนำเกี่ยวกับ CSS Grid
        </h2>
        <p className="mb-4">
          CSS Grid เป็นระบบการจัดวางที่ทรงพลังที่สุดใน CSS ช่วยให้เราสามารถสร้าง
          layout ที่ซับซ้อนและยืดหยุ่นได้อย่างง่ายดาย โดยมีจุดเด่นดังนี้:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-300">ควบคุมสองมิติ:</strong> CSS Grid
            ช่วยให้เราจัดการกับการวางองค์ประกอบทั้งในแนวนอนและแนวตั้งพร้อมกัน
          </li>
          <li>
            <strong className="text-blue-300">โครงสร้างที่ยืดหยุ่น:</strong>
            สามารถกำหนดขนาดของแถวและคอลัมน์ได้อย่างอิสระ รวมถึงการใช้หน่วย fr
            เพื่อการกระจายพื้นที่อย่างยืดหยุ่น
          </li>
          <li>
            <strong className="text-blue-300">การจัดวางที่แม่นยำ:</strong>
            สามารถกำหนดตำแหน่งขององค์ประกอบภายใน grid ได้อย่างแม่นยำ
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          Mental Model ของ CSS Grid
        </h2>
        <p className="mb-4">
          ใน CSS Grid เราสามารถมองว่าพื้นที่ของ element ถูกตัดเป็นแถวและคอลัมน์
          โดยที่:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>แถวและคอลัมน์ไม่จำเป็นต้องมีขนาดเท่ากัน แต่ต้องมีความสม่ำเสมอ</li>
          <li>ทุกเซลล์ในคอลัมน์เดียวกันจะมีความกว้างเท่ากัน</li>
          <li>ทุกเซลล์ในแถวเดียวกันจะมีความสูงเท่ากัน</li>
          <li>
            แถวและคอลัมน์เป็นเหมือน "เส้นที่วาดบนพื้นลานจอดรถ" ที่มองไม่เห็น
            แต่ใช้เป็นเครื่องมือในการจัดวางองค์ประกอบ
          </li>
        </ul>
      </div>

      <GridInteractive />

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          หลักการสำคัญของ CSS Grid:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            ใช้ <strong>display: grid</strong> เพื่อเปิดใช้งาน Grid layout
          </li>
          <li>
            กำหนดโครงสร้างของ grid ด้วย <strong>grid-template-columns</strong>{" "}
            และ <strong>grid-template-rows</strong>
          </li>
          <li>
            ใช้ <strong>grid-column</strong> และ <strong>grid-row</strong>{" "}
            เพื่อจัดวางองค์ประกอบภายใน grid
          </li>
          <li>
            สามารถใช้ <strong>grid-template-areas</strong> เพื่อสร้าง layout
            แบบมีชื่อกำกับ
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-blue-200">
          การเขียน Grid:
        </h3>
        <p className="mb-4">เราสามารถกำหนด Grid ได้หลายวิธี:</p>

        {/* grid-template-columns example */}
        <div className="mb-8">
          <h4 className="mb-2 text-lg font-semibold text-blue-300">
            1. ใช้ grid-template-columns:
          </h4>
          <code className="mb-2 block text-green-300">
            grid-template-columns: 1fr 2fr 1fr;
          </code>
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 rounded bg-gray-700 p-2">
            <div className="bg-blue-500 p-2 text-center">1fr</div>
            <div className="bg-blue-500 p-2 text-center">2fr</div>
            <div className="bg-blue-500 p-2 text-center">1fr</div>
          </div>
        </div>

        {/* repeat() function example */}
        <div className="mb-8">
          <h4 className="mb-2 text-lg font-semibold text-blue-300">
            2. ใช้ฟังก์ชัน repeat():
          </h4>
          <code className="mb-2 block text-green-300">
            grid-template-columns: repeat(3, 1fr);
          </code>
          <div className="grid grid-cols-3 gap-2 rounded bg-gray-700 p-2">
            <div className="bg-green-500 p-2 text-center">1fr</div>
            <div className="bg-green-500 p-2 text-center">1fr</div>
            <div className="bg-green-500 p-2 text-center">1fr</div>
          </div>
        </div>

        {/* grid-template-areas example */}
        <div>
          <h4 className="mb-2 text-lg font-semibold text-blue-300">
            3. ใช้ grid-template-areas:
          </h4>
          <pre className="mb-2 text-green-300">
            {`grid-template-areas:  
  'header header header'  
  'sidebar main main'  
  'footer footer footer';`}
          </pre>
          <div className="grid h-64 grid-cols-[200px_1fr_1fr] grid-rows-[50px_1fr_50px] gap-2 rounded bg-gray-700 p-2">
            <div className="col-span-3 bg-red-500 p-2 text-center">Header</div>
            <div className="bg-yellow-500 p-2 text-center">Sidebar</div>
            <div className="col-span-2 bg-purple-500 p-2 text-center">
              Main Content
            </div>
            <div className="col-span-3 bg-red-500 p-2 text-center">Footer</div>
          </div>
        </div>
      </div>

      {/* <GridAlignment /> */}

      <div className="mt-8 flex items-center gap-8">
        <div className="flex items-center gap-4">
          <p className="font-bold text-red-600">อ่านเพิ่มเติมได้ที่</p>
          <ArrowRightIcon className="size-6" />
        </div>
        <div className="flex flex-col gap-8">
          <Link
            href={"https://www.joshwcomeau.com/css/interactive-guide-to-grid/"}
            target="_blank"
            className="text-2xl font-bold"
          >
            An Interactive Guide to CSS Grid
          </Link>
          <Link
            href={"https://www.w3schools.com/css/css_grid.asp"}
            target="_blank"
            className="text-2xl font-bold"
          >
            W3School Grid
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CSSGridIntroPage;
