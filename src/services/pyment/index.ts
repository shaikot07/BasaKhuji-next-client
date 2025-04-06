'use server'

import { cookies } from "next/headers";


export const  createPyment = async (modifiedData: any): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/orders/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Indicate that you're sending JSON
          },
          body: JSON.stringify(modifiedData), // Send the modifiedData object as JSON
        }
      );
  
      // Return the response as JSON
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };


  export const verifyPayment = async (order_id: string): Promise<any> => {
    try {
      const cookieStore = await cookies(); // Await the cookies
          const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining
      
          if (!accessToken) {
            throw new Error("Access token not found");
          }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/orders/verify-payment?order_id=${order_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
            "Content-Type": "application/json",
          },
        }
      );
  
      // Return the response as JSON
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  }