"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MonthlyStat {
  _id: {
    year: number;
    month: number;
  };
  count: number;
}

interface Props {
  data: MonthlyStat[]; // Receive the 'data' prop
}

const MonthlyRentalChart: React.FC<Props> = ({ data }) => {
  // Prepare the data in a readable format (e.g., Month names)
  const formattedData = new Array(12).fill(0).map((_, index) => {
    const monthStat = data.find(item => item._id.month === index + 1);
    return {
      name: new Date(0, index).toLocaleString('default', { month: 'long' }),  // Convert month number to name
      count: monthStat ? monthStat.count : 0,  // Default to 0 if no data exists for that month
    };
  });

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Monthly Rental Houses Posted</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#FF6725" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyRentalChart;
