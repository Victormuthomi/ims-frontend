import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
	{
		name: "MongoDb",
		student: 11,
		fees: 120,
	},
	{
		name: "Javascript",
		student: 15,
		fees: 12,
	},
	{
		name: "PHP",
		student: 5,
		fees: 10,
	},
	{
		name: "Java",
		student: 10,
		fees: 5,
	},
	{
		name: "C#",
		student: 9,
		fees: 4,
	},
	{
		name: "C++",
		student: 10,
		fees: 8,
	},
];

function Linechart() {
	return (
		<>
			<h1 className="bg-yellow-500 text-white font-lato font-semibold pl-4 rounded-sm">Line Chart Using Rechart</h1>
			<ResponsiveContainer width="100%" aspect={3} className="mt-4 mb-8">
				<LineChart data={pdata} margin={{ top:10, right: 50 }}>
					<CartesianGrid />
					<XAxis dataKey="name" interval={"preserveStartEnd"} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line
						dataKey="student"
						stroke="black"
						activeDot={{ r: 8 }}
					/>
					<Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default Linechart;

