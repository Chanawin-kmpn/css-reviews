"use client";

import React, { useState } from "react";

const GridInteractive = () => {
  const [columns, setColumns] = useState(2);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(10);

  return (
    <div className="mt-8 rounded-lg bg-gray-800 p-4">
      <h3 className="mb-4 text-xl font-semibold text-blue-300">
        Grid Interactive
      </h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Columns: {columns}
          <input
            type="range"
            min="1"
            max="5"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Rows: {rows}
          <input
            type="range"
            min="1"
            max="5"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Gap: {gap}px
          <input
            type="range"
            min="0"
            max="20"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
      <div
        className="grid rounded bg-gray-700 p-4"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => (
          <div
            key={index}
            className="rounded bg-blue-500 p-2 text-center text-white"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridInteractive;
