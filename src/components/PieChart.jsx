import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Text } from 'recharts';

const COLORS = ['#9370DB', '#FFA500'];

const Piechart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = [
    { name: 'Segment 1', value: 60 },
    { name: 'Segment 2', value: 40 },
  ];

  const getPercentage = (data) => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    if (activeIndex !== -1) {
      return `${((data[activeIndex].value / total) * 100).toFixed(1)}%`;
    }
    return '60%'; // Default percentage (assuming Segment 1 is active initially)
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <h2 className="text-md font-lato text-slate-50 pl-4 font-semibold bg-yellow-500 rounded-sm">
        Current Revenue
      </h2>
      <div className="h-40 rounded-sm shadow">
        <div className="flex justify-center items-center">
          <PieChart width={150} height={150}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={0}
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              {/* Center the percentage text */}
              <Text
                x="50%"
                y="50%"
                dy={8} // Adjust vertical offset for better positioning
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={16} // Adjust font size as needed
              >
                {getPercentage(data)}
              </Text>
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default Piechart;
