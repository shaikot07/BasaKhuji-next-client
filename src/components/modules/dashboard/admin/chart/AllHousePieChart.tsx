"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { getAllHouse } from "@/services/Lanload";

// Define two colors: Pink and Blue
const COLORS = ["#FF6725", "#4169E1"]; // Pink, Blue

const AllHousePieChart = () => {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
    []
  );
  console.log(chartData, "chartData");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllHouse();
      console.log(response, "response from getAllHouse");

      const houseArray = Array.isArray(response?.data)
        ? response.data
        : response;

      if (!Array.isArray(houseArray)) {
        console.error("Expected an array but got:", houseArray);
        return;
      }

      const total = houseArray.length;
      const available = houseArray.filter(
        (item: any) => item?.isAvailable !== false
      ).length;
      const unavailable = total - available;

      const formatted = [
        { name: "Available", value: available },
        { name: "Unavailable", value: unavailable },
      ];

      setChartData(formatted);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        House Availability
      </h2>
      <ResponsiveContainer width="100%" height={270}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AllHousePieChart;
