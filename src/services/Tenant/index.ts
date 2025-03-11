"use server";


// get all rental house by lanload spacefice

export const getRequestTentSpecific = async (tenantId: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests/${tenantId}`,
        {
          next: {
            tags: ["REQUEST"], // Add tags for revalidation
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };

  export const addRentalRequest = async (requestData: any): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Indicate that you're sending JSON
          },
          body: JSON.stringify(requestData), // Send the modifiedData object as JSON
        }
      );
  
      // Return the response as JSON
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };



