import { getSingleRentalHouse } from "@/services/Lanload";


const UpdatedRentalHousePage =async ({ params}: {params: Promise<{ houseId: string }>;}) => {
    const {houseId } = await params;
    console.log('updated page',houseId);
    const { data: rentalHouse } = await  getSingleRentalHouse(houseId);
    console.log( "this is" ,rentalHouse);

    return (
        <div>
            ths is updated page by id 
            <h2>this is is {houseId}</h2>
          
        </div>
    );
};

export default UpdatedRentalHousePage;


