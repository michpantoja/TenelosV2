import React from "react";

// Example data
const data = [
  { label: "Overall Wins", values: [2, 3] },
  { label: "Hard Wins", values: [0, 2] },
  { label: "Clay Wins", values: [1, 1] },
  { label: "Grass Wins", values: [1, 0] },
  // ... other data points
];

export default function BarChart() {
  // Find the maximum value in the data array to normalize bar lengths
  const maxValue = Math.max(...data.flatMap((d) => d.values));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {data.map((item, index) => (
        <div key={index} className="w-full flex items-center gap-2">
          {/* Bar for the first value */}
          <p className="font-medium text-darkerGray select-none">
            {item.values[0]}
          </p>
          <div className="flex-1 flex items-center gap-1 justify-end">
            <div
              className="h-6 bg-green"
              style={{ width: `${(item.values[0] / maxValue) * 100}%` }}
            />
          </div>
          {/* Label */}
          <p className="w-32 text-center font-medium uppercase select-none">
            {item.label}
          </p>
          {/* Bar for the second value */}
          <div className="flex-1 flex items-center gap-1 justify-start">
            <div
              className="h-6 bg-gray"
              style={{ width: `${(item.values[1] / maxValue) * 100}%` }}
            />
          </div>
          <p className="font-medium text-darkerGray select-none">
            {item.values[1]}
          </p>
        </div>
      ))}
    </div>
  );
}
