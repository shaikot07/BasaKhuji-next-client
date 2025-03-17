// types/request.ts

export interface RentalHouse {
    _id: string;
    location: string;
    description: string;
    rentAmount: number;
    bedrooms: number;
    images: string[];
    landlordId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface Request {
    _id: string;
    rentalHouseId: RentalHouse;
    tenantId: string;
    status: string;
    additionalMessage: string;
    createdAt: string;
    updatedAt: string;
    moveInDate:string;
    rentalDuration:string;

    __v: number;
  }
  
  // Export the IRequest interface for use in other files
  export interface IRequest {
    request: Request[]; // Array of Request objects
  }
  