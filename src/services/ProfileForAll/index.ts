/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

// update rental house
export const updateUserProfileInfo = async (
 userProfileData: any,
  userId: string
): Promise<any> => {
    console.log(userId);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}/profileUpdated`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", // Ensure JSON format
        },
        body: JSON.stringify(userProfileData),
      }
    );
    revalidateTag("profile"); // Revalidate or refresh the list of houses
    return res.json();
  } catch (error: any) {
    return new Error(error);
  }
};