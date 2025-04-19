export const dynamic = "force-dynamic"; //it''s  i added here for solve build error
import UserManagementCart from "@/components/modules/dashboard/admin/UserManagementCart";
import { getAllUserByAdmin } from "@/services/Admin";


const UserManagementPage =async () => {
        const allUserData = await  getAllUserByAdmin();
        console.log('user data  data',  allUserData);
        const userData = allUserData?.data || []; 
    return (
        <div>
           <UserManagementCart userData={userData}/>
        </div>
    );
};

export default UserManagementPage;