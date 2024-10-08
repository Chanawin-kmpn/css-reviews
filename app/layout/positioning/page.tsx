import React from "react";

const PositionExamplesDetailed = () => {
  return (
    <div className="mt-8 rounded-lg bg-stone-800 p-6 text-white shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-blue-200">
        ประเภทของ Position ใน CSS:
      </h3>

      {/* Static Position */}
      <div className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-blue-300">
          1. Static Position:
        </h4>
        <p className="mb-2">
          เป็นค่าเริ่มต้นของทุกอีลิเมนต์ โดยจะวางตำแหน่งตามลำดับปกติใน document
          flow
        </p>
        <code className="mb-2 block text-green-300">position: static;</code>
        <div className="rounded bg-gray-700 p-4">
          <div className="mb-2 bg-blue-500 p-2">Element 1 (Static)</div>
          <div className="bg-green-500 p-2">Element 2 (Static)</div>
        </div>
        <p className="mt-2">
          อีลิเมนต์ที่มี position: static จะไม่สามารถใช้ properties เช่น top,
          right, bottom, left ได้
        </p>
      </div>

      {/* Relative Position */}
      <div className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-blue-300">
          2. Relative Position:
        </h4>
        <p className="mb-2">
          วางตำแหน่งสัมพันธ์กับตำแหน่งปกติของตัวเอง สามารถใช้ top, right,
          bottom, left เพื่อปรับตำแหน่งได้
        </p>
        <code className="mb-2 block text-green-300">
          {`position: relative;
top: 20px;
left: 20px;`}
        </code>
        <div className="relative h-32 rounded bg-gray-700 p-4">
          <div className="mb-2 bg-blue-500 p-2">Element 1 (Static)</div>
          <div className="absolute left-8 top-8 bg-green-500 p-2">
            Element 2 (Relative)
          </div>
        </div>
        <p className="mt-2">
          Relative positioning ไม่ส่งผลกระทบต่อ layout ของอีลิเมนต์อื่นๆ
          และยังคงอยู่ใน document flow
        </p>
      </div>

      {/* Absolute Position */}
      <div className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-blue-300">
          3. Absolute Position:
        </h4>
        <p className="mb-2">
          วางตำแหน่งสัมพันธ์กับ parent element ที่มี position ไม่ใช่ static
          ที่ใกล้ที่สุด
        </p>
        <code className="mb-2 block text-green-300">
          {`position: absolute;
top: 0;
right: 0;`}
        </code>
        <div className="relative h-32 rounded bg-gray-700 p-4">
          <div className="mb-2 bg-blue-500 p-2">Element 1</div>
          <div className="absolute right-0 top-0 bg-green-500 p-2">
            Element 2 (Absolute)
          </div>
        </div>
        <p className="mt-2">
          Absolute positioning ทำให้อีลิเมนต์ถูกนำออกจาก document flow
          และไม่ส่งผลต่อตำแหน่งของอีลิเมนต์อื่น
        </p>
      </div>

      {/* Fixed Position */}
      <div className="mb-8">
        <h4 className="mb-2 text-lg font-semibold text-blue-300">
          4. Fixed Position:
        </h4>
        <p className="mb-2">
          วางตำแหน่งสัมพันธ์กับ viewport ไม่เปลี่ยนตำแหน่งเมื่อเลื่อนหน้าจอ
        </p>
        <code className="mb-2 block text-green-300">
          {`position: fixed;
bottom: 20px;
right: 20px;`}
        </code>
        <div className="relative h-48 overflow-auto rounded bg-gray-700 p-4">
          <div className="h-96 bg-gray-600 p-4">
            <p className="mb-4">เนื้อหาที่สามารถเลื่อนได้...</p>
            <p className="mb-4">ลองเลื่อนดูและสังเกตปุ่ม Help</p>
            <p>เนื้อหาเพิ่มเติม...</p>
            <button className="fixed bottom-8 right-8 rounded bg-green-500 px-4 py-2 text-white">
              Help
            </button>
          </div>
        </div>
        <p className="mt-2">
          Fixed positioning
          เหมาะสำหรับอีลิเมนต์ที่ต้องการให้อยู่ในตำแหน่งเดิมเสมอ
          แม้จะเลื่อนหน้าจอ
        </p>
      </div>

      {/* Sticky Position */}
      <div>
        <h4 className="mb-2 text-lg font-semibold text-blue-300">
          5. Sticky Position:
        </h4>
        <p className="mb-2">
          ผสมผสานระหว่าง relative และ fixed โดยจะเปลี่ยนเป็น fixed
          เมื่อเลื่อนถึงจุดที่กำหนด
        </p>
        <code className="mb-2 block text-green-300">
          {`position: sticky;
top: 0;`}
        </code>
        <div className="h-48 overflow-auto rounded bg-gray-700 p-4">
          <div className="h-96">
            <div className="sticky top-0 bg-blue-500 p-2">Sticky Header</div>
            <div className="mt-4">เนื้อหาที่สามารถเลื่อนได้...</div>
            <p className="my-4">ลองเลื่อนดูและสังเกต Sticky Header</p>
            <p>เนื้อหาเพิ่มเติม...</p>
          </div>
        </div>
        <p className="mt-2">
          Sticky positioning เหมาะสำหรับการทำ headers หรือ navigation
          ที่ต้องการให้ติดอยู่ด้านบนเมื่อเลื่อนหน้าจอ
        </p>
      </div>

      <div className="mt-8">
        <h4 className="mb-2 text-lg font-semibold text-blue-300">
          ข้อควรระวังเพิ่มเติม:
        </h4>
        <ul className="list-inside list-disc space-y-2">
          <li>
            การใช้ transform, filter, หรือ will-change บน ancestor elements
            อาจส่งผลต่อการทำงานของ Fixed Position
          </li>
          <li>
            Absolute และ Fixed Position จะทำให้อีลิเมนต์ถูกนำออกจาก document
            flow ซึ่งอาจส่งผลต่อ layout ของหน้าเว็บ
          </li>
          <li>
            Sticky Position อาจไม่ทำงานใน table elements บางกรณีใน browser เก่า
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PositionExamplesDetailed;
