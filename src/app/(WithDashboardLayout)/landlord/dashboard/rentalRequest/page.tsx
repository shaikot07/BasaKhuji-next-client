export const dynamic = "force-dynamic"; //it''s  i added here for solve build error

import RequestManagement from "@/components/modules/dashboard/lanloadManageRentalHouse/RequestManagement";
import { getAllRentalRequest } from "@/services/Lanload";


const RequestManagementPage = async () => {
    const requestData = await getAllRentalRequest();
    console.log('request data',  requestData);
    const requestArray = requestData?.data || []; 
    
    return (
      <div>
       <RequestManagement request={requestArray} />
      </div>
    );
  };
      
  export default RequestManagementPage;
  


