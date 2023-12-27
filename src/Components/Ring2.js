import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Ring2 = () => {
	const data = [
		{ name: "USDC.e", students: 100 },
		{ name: "USDT", students: 0.001 },
	];
	const colors = ["rgb(47, 134, 205)"];

	return (
		<div
			style={{
				textAlign: "center",
			}}
		>

			<PieChart width={180} height={180}>
				<Tooltip />
				<Pie
					data={data}
					dataKey="students"
					outerRadius={80}
					innerRadius={72}
					fill="blue"

				>        {data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
				))}</Pie>

			</PieChart>
		</div>
	);
};

export default Ring2;
