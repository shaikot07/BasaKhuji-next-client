'use client';
import { useUser } from '@/context/UserContext';
import { LanloadGetWonRentalHouse } from '@/services/Lanload';
import { useEffect, useState } from 'react';


const LanloadAllRentalHouse = () => {
    const {user}=useUser();

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user?.userId) return; // Prevent fetching if userId is not available

        const fetchData = async () => {
            try {
                const response = await LanloadGetWonRentalHouse(user.userId);
                
                if (response.success === false) {
                    throw new Error(response.message);
                }

                setData(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.userId]); // Fetch data when userId changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    console.log(data);
    return (
        <div>
            lanload all aRental house chi chi re noni chi 
            <h4>{data.length}</h4>
        </div>
    );
};

export default LanloadAllRentalHouse;