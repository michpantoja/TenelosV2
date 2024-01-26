import React from "react";

// Example data
const data = [
  { label: "Ground Strokes", values: [174, 174] },
  { label: "Overheads", values: [2, 0] },
  { label: "Passing Shots", values: [0, 2] },
  { label: "Volleys", values: [1, 5] },
  // ... other data points
];

const BarChart = () => {
  // Find the maximum value in the data array to normalize bar lengths
  const maxValue = Math.max(...data.flatMap((d) => d.values));

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      {data.map((item, index) => (
        <div key={index} className="w-full flex justify-between text-sm">
          <span className="w-1/12 text-right pr-2">{item.values[0]}</span>
          <div
            className="w-full h-6 bg-green "
            style={{ width: `${(item.values[0] / maxValue) * 100}%` }}
          ></div>
          <span className="w-[100px] text-center px-4">{item.label}</span>
          <div
            className="w-full h-6 bg-gray"
            style={{ width: `${(item.values[1] / maxValue) * 100}%` }}
          ></div>
          <span className="w-1/12 text-left pl-2">{item.values[1]}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
