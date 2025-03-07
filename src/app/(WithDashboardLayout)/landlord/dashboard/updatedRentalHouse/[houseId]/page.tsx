import UpdatedRentalHouseForm from "@/components/modules/dashboard/lanloadManageRentalHouse/updatedRentalHouseForm";
import { getSingleRentalHouse } from "@/services/Lanload";


const UpdatedRentalHousePage =async ({ params}: {params: Promise<{ houseId: string }>;}) => {
    const {houseId } = await params;
    console.log('updated page',houseId);
    const { data: rentalHouse } = await  getSingleRentalHouse(houseId);
    console.log( "this is" ,rentalHouse);

    return (
        <div className="flex justify-center items-center">
            <UpdatedRentalHouseForm rentalHouse={rentalHouse} />
          
        </div>
    );
};

export default UpdatedRentalHousePage;


