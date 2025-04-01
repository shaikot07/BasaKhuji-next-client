'use server'


export const  createPyment = async (modifiedData: any): Promise<any> => {
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