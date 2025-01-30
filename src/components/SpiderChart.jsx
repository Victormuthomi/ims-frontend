import React from 'react';
import { Radar, RadarChart, PolarGrid, 
	PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const SpiderChart = () => {

	// Sample data
	const data = [
		{ name: 'A', x: 21 },
		{ name: 'B', x: 22 },
		{ name: 'C', x: -32 },
		{ name: 'D', x: -14 },
		{ name: 'E', x: -51 },
		{ name: 'F', x: 16 },
		{ name: 'G', x: 7 },
		{ name: 'H', x: -8 },
		{ name: 'I', x: 9 },
	];

	return (
    <div className='h-48 content-right font-lato'>
		<RadarChart height={180} width={200} 
			outerRadius="80%" data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="name" />
			<PolarRadiusAxis />
			<Radar dataKey="x" stroke="green"
				fill="green" fillOpacity={0.5} />
		</RadarChart>
    </div>
	);
}

export default SpiderChart;

