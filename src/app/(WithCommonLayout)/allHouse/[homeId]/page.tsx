// import { getSingleHome } from "@/services/Lanload";

import HomeDetailsCart from "@/components/modules/allHome/HomeDetailsCart";
import { getSingleHomeById } from "@/services/Lanload";



// const homeDetailsPage =async ({ params}: {params: Promise<{ homeId: string }>;}) => {
//     const {homeId } = await params;
//     console.log('updated page',homeId);
//     const { data: homeData} = await  getSingleHome (homeId);
//     console.log('this is single home', homeData);
//     return (
//         <div>
//             <h2>id is {homeId}</h2>
//         </div>
//     );
// };

// export default homeDetailsPage;




const homeDetailsPage = async ({ params }: { params: { homeId: string } }) => {
    const { homeId } = params; 
    
    console.log("updated page", homeId);

    const homeData = await getSingleHomeById(homeId); 
    console.log("this is single home", homeData);

    return (
        <div>
          <HomeDetailsCart  homeData={homeData?.data} />
        </div>
    );
};

export default homeDetailsPage;