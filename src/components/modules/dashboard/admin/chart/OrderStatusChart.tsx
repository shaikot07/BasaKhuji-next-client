"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

// Define the component with a default value for orders to handle undefined cases
const OrderStatusChart = ({ orders = [] }: { orders: any[] }) => {
  // Ensure orders is an array before proceeding with reduce
  if (!Array.isArray(orders)) {
    console.error("Expected 'orders' to be an array but received:", typeof orders);
    return <p>Error: Invalid data</p>;
  }

  // Initialize accumulators for status, paid count, and total price
  const statusCount = orders.reduce((acc: Record<string, number>, order) => {
    const status = order.status || "Unknown";
    acc[status] = (acc[status] || 0) + 1;

    // Accumulate total price for the chart (assuming the price is in `order.totalPrice`)
    if (order.totalPrice) {
      acc[`${status}_totalPrice`] = (acc[`${status}_totalPrice`] || 0) + order.totalPrice;
    }

    // Count paid status
    if (order.isPaid) {
      acc[`${status}_paid`] = (acc[`${status}_paid`] || 0) + 1;
    }

    return acc;
  }, {});

  // Convert to chart data
  const chartData = Object.entries(statusCount).map(([statusKey, value]) => {
    const [status, type] = statusKey.split('_'); // Extract status from key
    return {
      status,
      [type]: value, // Add different values based on type (totalPrice, paid)
    };
  });

  return (
    <Card className="w-full  mx-auto mt-6 shadow-xl rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Order Status Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#32D095" radius={[4, 4, 0, 0]} />
            {/* Bar for paid orders */}
            <Bar dataKey="paid" fill="#32D095" radius={[4, 4, 0, 0]} />
            {/* Bar for total price */}
            <Bar dataKey="totalPrice" fill="#FF6347" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OrderStatusChart;
