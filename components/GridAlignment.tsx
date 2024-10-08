"use client";
import React, { useState } from "react";

const GridAlignment = () => {
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignContent, setAlignContent] = useState("start");
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [alignItems, setAlignItems] = useState("stretch");

  const alignmentOptions = [
    "start",
    "center",
    "end",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
  ];

  return (
    <div className="mt-8 rounded-lg bg-gray-800 p-4">
      <h3 className="mb-4 text-xl font-semibold text-blue-300">
        Grid Alignment
      </h3>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            justify-content:
            <select
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
              className="ml-2 rounded bg-gray-700 text-white"
            >
              {alignmentOptions
                .filter((option) => option !== "stretch")
                .map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            align-content:
            <select
              value={alignContent}
              onChange={(e) => setAlignContent(e.target.value)}
              className="ml-2 rounded bg-gray-700 text-white"
            >
              {alignmentOptions
                .filter((option) => option !== "stretch")
                .map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            justify-items:
            <select
              value={justifyItems}
              onChange={(e) => setJustifyItems(e.target.value)}
              className="ml-2 rounded bg-gray-700 text-white"
            >
              {alignmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            align-items:
            <select
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
              className="ml-2 rounded bg-gray-700 text-white"
            >
              {alignmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div
        className="grid h-64 rounded bg-gray-700 p-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          justifyContent,
          alignContent,
          justifyItems,
          alignItems,
        }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="flex h-16 w-16 items-center justify-center rounded bg-blue-500 p-2 text-center text-white"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridAlignment;
