
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllHouse } from "@/services/Lanload";

const AllHousePage = async() => {
    const allHouse = await   getAllHouse();
          console.log('user data  data',allHouse);
          const allHouseData = allHouse?.data || []; 

  return (
    <NMContainer>

      <div className=" bg-pink">
      <h2>this is all house  page</h2>
      <h1> all house data {allHouseData.length}</h1>
      
      </div>
    </NMContainer>
  );
};

export default AllHousePage;
