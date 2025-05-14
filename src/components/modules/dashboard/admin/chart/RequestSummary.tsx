"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {  CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type RentalSummary = {
  pending: number;
  approved: number;
  rejected: number;
  total: number;
};

const COLORS = {
  pending: "#FACC15", // Yellow
  approved: "#4ADE80", // Green
  rejected: "#F87171", // Red
};

const STATUS_LABELS = ["pending", "approved", "rejected"];

const RequestSummary = ({ summary }: { summary: RentalSummary }) => {
  const data = STATUS_LABELS.map((status) => ({
    name: status.charAt(0).toUpperCase() + status.slice(1),
    value: summary[status as keyof RentalSummary],
    color: COLORS[status as keyof typeof COLORS],
  }));

  return (
    <div>
      <CardHeader>
        <CardTitle>Rental Request Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={210}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </div>
  );
};

export default RequestSummary;
