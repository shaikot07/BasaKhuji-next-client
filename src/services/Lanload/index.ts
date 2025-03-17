"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// // get all products
export const getAllHouse= async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/landlords/getAll`,
        // `${process.env.NEXT_PUBLIC_BASE_API}/product?limit=${limit}&page=${page}`,
        {
          next: {
            tags: ["HOUSE"],
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };
// export const getAllHouse= async (filters: Record<string, any> = {}) => {
//     try {
//       // Convert search parameters to a query string
//     const queryString = new URLSearchParams(filters).toString();
    
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/landlords/getAll?${queryString}`,
//       { cache: "no-store" } // Ensure fresh data
//     );
//       const data = await res.json();
//       return data;
//     } catch (error: any) {
//       return Error(error.message);
//     }
//   };

// get single house By is for updated
export const getSingleHomeById= async (homeId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${homeId}`,
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

// add rental house
export const addRentalHouse = async (modifiedData: any): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
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

// get all rental house  lanload won
export const LanloadGetWonRentalHouse = async (id: string): Promise<any> => {
  try {
    const cookieStore = await cookies(); // Await the cookies
    const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/won/${id}`,
      {
        method: "GET", // Correct capitalization
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json",
        },
        next: {
          tags: ["HOUSE"], // Add the "house" tag here
        },
      }
    );

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
          tags: ["HOUSE"], // Add tags for revalidation
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
export const updateRentalHouse = async (
  rentalHouseData: any,
  houseId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${houseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Ensure JSON format
        },
        body: JSON.stringify(rentalHouseData),
      }
    );
    revalidateTag("HOUSE");
    return res.json();
  } catch (error: any) {
    return new Error(error);
  }
};

// deleted rental house
export const deleteRentalHouse = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${id}`,
      {
        method: "DELETE", // Change the method to DELETE
        headers: {
          "Content-Type": "application/json", // Ensure JSON format
        },
      }
    );

    revalidateTag("HOUSE"); // Revalidate or refresh the list of houses
    return res.json(); // Return the response from the API
  } catch (error: any) {
    return new Error(error); // Return error if there's any issue
  }
};

// get all rental house by lanload spacefice

export const getAllRentalRequest = async () => {
  try {
    const cookieStore = await cookies(); // Await the cookies
    const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests`,
      {
        method: "GET", // Correct capitalization
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json",
        },
        next: {
          tags: ["REQUEST"], // Add the "house" tag here
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return await res.json();
  } catch (error: any) {
    console.error("Error fetching landlord rental houses:", error);
    return { success: false, message: error.message };
  }
};

// update rental Request
export const updateRentalRequest = async (
  rentalRequestData: any,
  requestId: string
): Promise<any> => {
  try {
    const cookieStore = await cookies(); // Await the cookies
    const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining

    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests/${requestId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json", // Ensure JSON format
        },
        body: JSON.stringify(rentalRequestData),
      }
    );
    revalidateTag("REQUEST");
    return res.json();
  } catch (error: any) {
    return new Error(error);
  }
};
