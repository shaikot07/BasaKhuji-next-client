/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


// get all request by admin 
export const  getAllUserByAdmin= async (): Promise<any> => {
  try {
    const cookieStore = await cookies(); // Await the cookies
    const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users`,
      {
        method: "GET", // Correct capitalization
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json",
        },
        next: {
          tags: ["USER"], // Add the "house" tag here
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



export const blockUser = async (
  // status:boolean,
  userId: string
): Promise<any> => {
  try {
    const cookieStore = await cookies(); // Await the cookies
    const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining

    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/${ userId}/block`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json", // Ensure JSON format
        },
        // body: JSON.stringify({ status }),
      }
    );
    revalidateTag("USER");
    return res.json();
  } catch (error: any) {
    return new Error(error);
  }
};
// admin updated user roll 
export const updatedRole = async (
role:any,
  userId: string
): Promise<any> => {
  try {
    const cookieStore = await cookies(); // Await the cookies
    const accessToken = cookieStore.get("accessToken")!.value; // Use optional chaining

    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}/role`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add "Bearer" if required
          "Content-Type": "application/json", // Ensure JSON format
        },
        body: JSON.stringify({ role }),
      }
    );
    revalidateTag("USER");
    return res.json();
  } catch (error: any) {
    return new Error(error);
  }
};