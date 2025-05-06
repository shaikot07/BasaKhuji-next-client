import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type OrderSummary = {
  pending: number;
  paid: number;
  failed: number;
  total: number;
};

const COLORS = {
  pending: "#FACC15",   // Yellow
  paid: "#4ADE80",      // Green
  failed: "#F87171",    // Red
};

const STATUS_LABELS = ["pending", "paid", "failed"];

const LanloadOrderSummarry = ({ orderSummary }: { orderSummary: OrderSummary }) => {
  const data = STATUS_LABELS.map((status) => ({
    name: status.charAt(0).toUpperCase() + status.slice(1),
    value: orderSummary[status as keyof OrderSummary],
    color: COLORS[status as keyof typeof COLORS],
  }));

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
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
    </Card>
  );
};

export default LanloadOrderSummarry;
