// 'use client'

// import RequstSummaryChart from "@/components/modules/dashboard/tenant/chart/RequstSummaryChart";
// import { useUser } from "@/context/UserContext";
// import { useEffect, useState } from "react";

// interface RentalSummary {
//   pending: number;
//   approved: number;
//   rejected: number;
//   total: number;
// }

// export default function UserDashboard() {
//       const { user, isLoading } = useUser();
//   const [summary, setSummary] = useState<RentalSummary | null>(null);

//   useEffect(() => {
//     if (!user?.userId) return; // 👈 protect it

//     const fetchSummary = async () => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tenants/tenant-summary/${user.userId}`);
//       const data = await res.json();
//       setSummary(data.data);
//     };

//     fetchSummary();
//   }, [user?.userId]);

//   if (!summary) return <p>Loading...</p>;
//   return (
//     <div>
//       <h2>this is the tenant dashboard</h2>
//       <div className="grid auto-rows-min gap-4 md:grid-cols-3">

//         <div className="aspect-video rounded-xl bg-muted " >
//         <RequstSummaryChart summary={summary} />
//            </div>
//         <div className="aspect-video rounded-xl bg-muted " ><h4>hi i am tow</h4> </div>
//         <div className="aspect-video rounded-xl bg-muted " ><h4>hi i am there</h4> </div>

//       </div>
//       <div className="min-h-[100vh] rounded-xl bg-muted mt-4" > i am mother</div>
//     </div>
//   );
// }

// ------------new code with navbar----------------

"use client";

import RequstSummaryChart from "@/components/modules/dashboard/tenant/chart/RequstSummaryChart";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";

import OrderSummaryChart from "@/components/modules/dashboard/tenant/chart/OrderSummaryChart";
import { Skeleton } from "@/components/ui/skeleton";
import NavDashboard from "@/components/shared/NavDashboard";


interface RentalSummary {
  pending: number;
  approved: number;
  rejected: number;
  total: number;
}

export default function UserDashboard() {
  const { user,  } = useUser();
  const [summary, setSummary] = useState<RentalSummary | null>(null);
  const [orderSummary, setOrderSummary] = useState(null);

  // rental request summary for tent 
  useEffect(() => {
    if (!user?.userId) return;

    const fetchSummary = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/tenants/tenant-summary/${user?.userId}`
      );
      const data = await res.json();
      setSummary(data.data);
    };

    fetchSummary();
  }, [user?.userId]);

  useEffect(() => {
    const fetchOrderSummary = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/orders/tenant-order-summary/${user?.email}`
      );
      const data = await res.json();
      setOrderSummary(data.data);
    };

    if (user?.email) fetchOrderSummary();
  }, [user?.email]);
  return (
    <div className="space-y-6">
      <NavDashboard/>

      {/* --- DASHBOARD CONTENT --- */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted">
          {summary ? (
            <RequstSummaryChart summary={summary} />
          ) : (
            <Skeleton className="w-full h-full rounded-xl" />
          )}
        </div>
        <div className="aspect-video rounded-xl bg-muted p-4 flex flex-col justify-center">
          {summary ? (
            <h4 className="text-center font-bold">Right now not available</h4>
          ) : (
            <Skeleton className="w-1/2 h-6 rounded" />
          )}
        </div>
        <div className="aspect-video rounded-xl bg-muted p-4 flex flex-col justify-center">
          {summary ? (
             <h4 className="text-center font-bold">Right now not available</h4>
          ) : (
            <Skeleton className="w-1/2 h-6 rounded" />
          )}
        </div>
      </div>

      <div className="min-h-[100vh] rounded-xl bg-muted mt-4">
        <h4 className="px-4 pt-4 text-lg font-medium">OrderSummaryChart</h4>
        {orderSummary ? (
          <OrderSummaryChart summary={orderSummary} />
        ) : (
          <Skeleton className="w-full h-[300px] rounded-xl mt-4" />
        )}
      </div>
    </div>
  );
}
