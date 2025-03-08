"use server";
import { cookies } from "next/headers";


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


