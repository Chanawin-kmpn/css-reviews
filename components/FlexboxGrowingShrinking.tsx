"use client";
import React, { useState } from "react";

const FlexboxGrowingShrinking = () => {
  const [flexGrow1, setFlexGrow1] = useState(1);
  const [flexGrow2, setFlexGrow2] = useState(1);
  const [flexShrink1, setFlexShrink1] = useState(1);
  const [flexShrink2, setFlexShrink2] = useState(1);
  const [flexBasis1, setFlexBasis1] = useState(100);
  const [flexBasis2, setFlexBasis2] = useState(100);

  return (
    <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-blue-200">
        Growing and Shrinking:
      </h3>
      <p className="mb-4">
        Flexbox ให้คุณควบคุมการขยายและหดตัวของ flex items ได้ด้วย flex-grow,
        flex-shrink, และ flex-basis
      </p>

      <div className="mb-4">
        <label className="mb-2 block">Item 1:</label>
        <input
          type="range"
          min="0"
          max="5"
          value={flexGrow1}
          onChange={(e) => setFlexGrow1(Number(e.target.value))}
          className="mr-2"
        />
        <span>flex-grow: {flexGrow1}</span>
        <input
          type="range"
          min="0"
          max="5"
          value={flexShrink1}
          onChange={(e) => setFlexShrink1(Number(e.target.value))}
          className="ml-4 mr-2"
        />
        <span>flex-shrink: {flexShrink1}</span>
        <input
          type="range"
          min="50"
          max="200"
          value={flexBasis1}
          onChange={(e) => setFlexBasis1(Number(e.target.value))}
          className="ml-4 mr-2"
        />
        <span>flex-basis: {flexBasis1}px</span>
      </div>

      <div className="mb-4">
        <label className="mb-2 block">Item 2:</label>
        <input
          type="range"
          min="0"
          max="5"
          value={flexGrow2}
          onChange={(e) => setFlexGrow2(Number(e.target.value))}
          className="mr-2"
        />
        <span>flex-grow: {flexGrow2}</span>
        <input
          type="range"
          min="0"
          max="5"
          value={flexShrink2}
          onChange={(e) => setFlexShrink2(Number(e.target.value))}
          className="ml-4 mr-2"
        />
        <span>flex-shrink: {flexShrink2}</span>
        <input
          type="range"
          min="50"
          max="200"
          value={flexBasis2}
          onChange={(e) => setFlexBasis2(Number(e.target.value))}
          className="ml-4 mr-2"
        />
        <span>flex-basis: {flexBasis2}px</span>
      </div>

      <div className="flex h-40 rounded bg-stone-700 p-2">
        <div
          className="m-1 rounded bg-blue-500 p-2"
          style={{
            flex: `${flexGrow1} ${flexShrink1} ${flexBasis1}px`,
          }}
        >
          Item 1
        </div>
        <div
          className="m-1 rounded bg-green-500 p-2"
          style={{
            flex: `${flexGrow2} ${flexShrink2} ${flexBasis2}px`,
          }}
        >
          Item 2
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-2 text-lg font-semibold">คำอธิบาย:</h4>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>flex-grow</strong>: กำหนดอัตราส่วนการขยายตัวของ flex item
            เมื่อมีพื้นที่เหลือใน container
          </li>
          <li>
            <strong>flex-shrink</strong>: กำหนดอัตราส่วนการหดตัวของ flex item
            เมื่อ container มีพื้นที่ไม่พอ
          </li>
          <li>
            <strong>flex-basis</strong>: กำหนดขนาดเริ่มต้นของ flex item
            ก่อนที่จะมีการขยายหรือหดตัว
          </li>
          <li>
            <strong>flex shorthand</strong>: เขียนย่อๆ ได้เป็น flex: [flex-grow]
            [flex-shrink] [flex-basis];
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlexboxGrowingShrinking;
