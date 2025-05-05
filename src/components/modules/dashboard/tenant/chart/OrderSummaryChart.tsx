"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  summary: {
    Pending: number;
    Paid: number;
    Shipped: number;
    Completed: number;
    Cancelled: number;
  };
}
const OrderSummaryChart = ({ summary }: Props) => {
  const data = Object.entries(summary).map(([key, value]) => ({
    status: key,
    count: value,
  }));
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF6725" barSize={70}/>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSummaryChart;
