"use client";
import AllHousePieChart from "@/components/modules/dashboard/admin/chart/AllHousePieChart";
import OrderStatusChart from "@/components/modules/dashboard/admin/chart/OrderStatusChart";
import RequestSummary from "@/components/modules/dashboard/admin/chart/RequestSummary";
import { UserSummaryPieChart } from "@/components/modules/dashboard/admin/chart/UserSummaryPieChart";
import NavDashboard from "@/components/shared/NavDashboard";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllOrderByAdmin } from "@/services/Admin";
import { useEffect, useState } from "react";

interface RentalSummary {
  pending: number;
  accepted: number;
  rejected: number;
  approved: number;
  total: number;
}

const AdminHomePage = () => {
  const [orders, setOrders] = useState<any[]>([]); // Start with an empty array
  console.log(orders); // Log the orders data
  const [summary, setSummary] = useState<RentalSummary | null>(null);
  //  for order status chart
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllOrderByAdmin();
      console.log(data, "inside off use effact"); // Inspect the API response here
      setOrders(data.data || []); // Set orders to the array inside data.data
    };
    fetchData();
  }, []);

  // for rental request status chart
  useEffect(() => {
    const fetchTotalPosts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/tenants/rental-request/summary/admin`
      );
      const data = await res.json();
      setSummary(data.data as RentalSummary); // Set the summary with correct type
    };

    fetchTotalPosts();
  }, []);
  return (
    <div className="space-y-6">
      <div className=" flex items-center">
        <h2 className="text-2xl font-bold w-4/12 text-black">
          Admin Dashboard
        </h2>
        <NavDashboard />
      </div>
      {/* --- DASHBOARD CONTENT --- */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted">
          <UserSummaryPieChart />
        </div>
        <div className="aspect-video rounded-xl bg-muted p-4 flex flex-col justify-center">
          <AllHousePieChart />
        </div>
        <div className="aspect-video rounded-xl bg-muted p-4 flex flex-col justify-center">
          {summary ? (
            <RequestSummary summary={summary} />
          ) : (
            <Skeleton className="w-full h-full rounded-xl" />
          )}
        </div>
      </div>

      <div className="min-h-[100vh] rounded-xl bg-muted mt-4">
        {/* <h4 className="px-4 pt-4 text-lg font-medium">OrderSummaryChart</h4> */}
        {orders && orders.length > 0 ? (
          <OrderStatusChart orders={orders} />
        ) : (
          <Skeleton className="w-full h-full rounded-xl" />
        )}
      </div>
    </div>
  );
};

export default AdminHomePage;
