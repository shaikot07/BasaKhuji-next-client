// "use client";
// import WeeklyRentalChart from "@/components/modules/dashboard/lanloadManageRentalHouse/Chart/WeeklyRentalChart";
// import NavDashboard from "@/components/shared/NavDashboard";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useUser } from "@/context/UserContext";
// import { useEffect, useState } from "react";

// export default function LanloadDashboard() {
//   const { user } = useUser();
//   console.log(user);
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     if (!user?.userId) return;

//     const fetchStats = async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_API}/landlords/weekly-stats/${user?.userId}`,

//       );
//       const data = await res.json();
//       setStats(data.data);
//     };

//     fetchStats();
//   }, [user?.userId]);
//   return (
//     <div>
//       <h1>this is lanload deshboard</h1>
//       <NavDashboard />
//       <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//         <div className="aspect-video rounded-xl bg-muted">
//           <h4>hii</h4>
//           {stats?.length > 0 ? (
//             <WeeklyRentalChart data={stats} />
//           ) : (
//             <Skeleton className="w-full h-full rounded-xl" />
//           )}
//         </div>
//         <div className="aspect-video rounded-xl bg-muted" />
//         <div className="aspect-video rounded-xl bg-muted" />
//       </div>
//       <div className="min-h-[100vh] rounded-xl bg-muted mt-4" />
//     </div>
//   );
// }

"use client";

interface RentalSummary {
  pending: number;
  accepted: number;
  rejected: number;
  approved: number;
  total: number;
}

import LanloadOrderSummarry from "@/components/modules/dashboard/lanloadManageRentalHouse/Chart/LanloadOrderSummarry";
import MonthlyRentalChart from "@/components/modules/dashboard/lanloadManageRentalHouse/Chart/MonthlyRentalChart";
import RequstSummaryChartByLanload from "@/components/modules/dashboard/lanloadManageRentalHouse/Chart/RequstSummaryChartByLanload";
import NavDashboard from "@/components/shared/NavDashboard";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";

export default function LandlordDashboard() {
  const { user } = useUser();
  const [stats, setStats] = useState([]);
  const [totalPosts, setTotalPosts] = useState<number | null>(null);
  const [summary, setSummary] = useState<RentalSummary | null>(null);
  const [orderSummary, setOrderSummary] = useState<any>(null);
  // console.log(totalPosts, "this is data for lanload");
  // console.log(summary, "this is request data for lanload");
  // console.log(orderSummary, "this is order summary data for lanload");
  console.log(orderSummary, "this is order summary data for lanload");

  // monthly status
  useEffect(() => {
    if (!user?.userId) return;

    const fetchStats = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/landlords/weekly-stats/${user?.userId}`
      );
      const data = await res.json();
      setStats(data.data); // Assuming this returns the monthly stats
    };

    fetchStats();
  }, [user?.userId]);

  // gel all posted rental house

  useEffect(() => {
    if (!user?.userId) return;

    const fetchTotalPosts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/all/${user?.userId}`
      );
      const data = await res.json();
      setTotalPosts(data.data); // Set the total posts
    };

    fetchTotalPosts();
  }, [user?.userId]);

  // for all request
  useEffect(() => {
    if (!user?.userId) return;

    const fetchTotalPosts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/landlords/lanload-summary/${user?.userId}`
      );
      const data = await res.json();
      setSummary(data.data as RentalSummary); // Set the summary with correct type
    };

    fetchTotalPosts();
  }, [user?.userId]);
  // for lanload order summary
  useEffect(() => {
    const fetchOrderSummary = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/orders/lanload-order-summary/${user?.userId}`
      );
      const data = await res.json();
      setOrderSummary(data.data);
    };

    if (user?.userId) fetchOrderSummary();
  }, [user?.userId]);

  return (
    <div>
      <div className=" flex items-center">
        <h2 className="text-2xl font-bold w-4/12 text-black">Lanload Dashboard</h2>
        <NavDashboard />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className=" rounded-xl bg-muted p-6 flex flex-col justify-center items-center shadow-md">
          <h2 className="text-xl font-semibold text-muted-foreground mb-2">
            Total Posts
          </h2>
          {totalPosts !== null ? (
            <p className="text-4xl font-bold text-primary">{totalPosts} +</p>
          ) : (
            <p className="text-lg text-gray-500">Loading...</p>
          )}
        </div>
        <div className="aspect-video rounded-xl bg-muted">
          {orderSummary ? (
            <LanloadOrderSummarry orderSummary={orderSummary} />
          ) : (
            <Skeleton className="w-full h-full rounded-xl" />
          )}
        </div>
        <div className="aspect-video rounded-xl bg-muted">
          {summary ? (
            <RequstSummaryChartByLanload summary={summary} />
          ) : (
            <Skeleton className="w-full h-full rounded-xl" />
          )}
        </div>
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4">
        {stats?.length > 0 ? (
          <MonthlyRentalChart data={stats} />
        ) : (
          <Skeleton className="w-full h-full rounded-xl" />
        )}
      </div>
    </div>
  );
}
