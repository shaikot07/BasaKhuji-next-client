import HomeDetailsCart from "@/components/modules/allHome/HomeDetailsCart";
import { getSingleHomeById } from "@/services/Lanload";



const HomeDetailsPage = async ({params}: {params: Promise<{ slug: string }>}) => {
  const { slug } = await params;

  console.log( slug, "this is params in home details page");

  // console.log("updated page", homeId);

  const homeData = await getSingleHomeById(slug);
  // console.log("this is single home", homeData);

  return (
    <div>
      <HomeDetailsCart homeData={homeData?.data} />
    </div>
  );
};

export default HomeDetailsPage;

// "use client";

// import { useParams } from 'next/navigation';
// import HomeDetailsCart from '@/components/modules/allHome/HomeDetailsCart';
// import { getSingleHomeById } from '@/services/Lanload';
// import { useEffect } from 'react';

// const HomeDetailsPage: React.FC = () => {
//   const params = useParams();
//   const homeId = params?.homeId as string;

//   const fetchHomeData = async (homeId: string) => {
//     try {
//       const homeData = await getSingleHomeById(homeId);
//       return homeData?.data; // Adjust this based on your API response structure
//     } catch (error) {
//       console.error('Error fetching home data:', error);
//       return null; // Handle error gracefully
//     }
//   };

//   // Use useEffect for data fetching if needed
//   useEffect(() => {
//     if (homeId) {
//       fetchHomeData(homeId);
//     }
//   }, [homeId]); // Ensure dependency array is correctly set

//   return (
//     <div>
//       {/* Render loading state or handle null homeId case */}
//       {homeId ? (
//         <HomeDetailsCart homeData={fetchHomeData(homeId)} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default HomeDetailsPage;

// export default async function Page({
// params,
// }: {
// params: Promise<{ slug: string }>
// }} {
// const { slug } = await params return <div>My Post: {slug}</div>
