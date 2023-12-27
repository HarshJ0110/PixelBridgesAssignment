import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Ring = () => {
	const data = [
		{ name: "BTC", students: 24.76 },
		{ name: "ETH", students: 19.08 },
		{ name: "USDC.e", students: 28.15 },
		{ name: "USDT", students: 27.99 },
	];
  const colors = ["orange", "green", "rgb(47, 134, 205)", "white"];

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

export default Ring;
