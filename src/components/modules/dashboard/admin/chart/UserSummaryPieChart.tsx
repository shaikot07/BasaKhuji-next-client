"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getAllUserByAdmin } from "@/services/Admin";


const COLORS = ["#32D095", "#FF8042", "#8884d8"];

export function UserSummaryPieChart() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getAllUserByAdmin();
      const users = response?.data || [];

      const tenants = users.filter((user: any) => user.role === "tenant").length;
      const landlords = users.filter((user: any) => user.role === "landlord").length;
      const total = users.length;

      setData([
        { name: "Tenant", value: tenants },
        { name: "Landlord", value: landlords },
        { name: "Admin", value: total - tenants - landlords }, // optional
      ]);
    }

    fetchUsers();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto bg-transparent border-0 shadow-none">
      <CardHeader>
        <CardTitle>User Role Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
