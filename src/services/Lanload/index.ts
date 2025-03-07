"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


// // get all products
// export const getAllProducts = async (page?: string, limit?: string) => {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_API}/product?limit=${limit}&page=${page}`,
//         {
//           next: {
//             tags: ["house"],
//           },
//         }
//       );
//       const data = await res.json();
//       return data;
//     } catch (error: any) {
//       return Error(error.message);
//     }
//   };



  
  // get single house By is for updated 
  // export const getSingleProduct = async (productId: string) => {
  //   try {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
  //       {
  //         next: {
  //           tags: ["house"],
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     return data;
  //   } catch (error: any) {
  //     return Error(error.message);
  //   }
  // };

// add rental house 
export const addRentalHouse = async (modifiedData: any): Promise<any> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicate that you're sending JSON
        },
        body: JSON.stringify(modifiedData), // Send the modifiedData object as JSON
      });
  
      // Return the response as JSON
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };
  
  // get all rental house  lanload won
  export const LanloadGetWonRentalHouse = async (id: string): Promise<any> => {
    try {
      const cookieStore = await cookies(); // Await the cookies
      const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining
  
      if (!accessToken) {
        throw new Error("Access token not found");
      }
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/won/${id}`, {
        method: "GET", // Correct capitalization
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
  
      return await res.json();
    } catch (error: any) {
      console.error("Error fetching landlord rental houses:", error);
      return { success: false, message: error.message };
    }
  };
  
  // get single rental house
  export const getSingleRentalHouse = async (houseIdId: string) => {
    try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${houseIdId}`,
            {
              next: { 
                tags: ["house"],
              },
            }
          );
          const data = await res.json();
          return data;
        } catch (error: any) {
          return Error(error.message);
        }
  };
  

  // update rental house 
  export const updateRentalHouse = async (rentalHouseData: any, houseId: string): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${houseId}`,
        {
          method: "PATCH",
          body: rentalHouseData,
        }
      );
      revalidateTag("house");
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };