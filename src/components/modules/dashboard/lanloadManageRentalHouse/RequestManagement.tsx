"use client";

import { Request } from "@/types";



// Make sure to accept an array of Request objects
const RequestManagement = ({ request }: { request: Request[] }) => {
  console.log('component request', request);
  
  return (
    <div>
      <h2>Request List</h2>
      {request.map((req) => (
        <div key={req._id}>
          {/* Render request data here */}
          <h3>Request ID: {req._id}</h3>
          <p>Additional Message: {req.additionalMessage}</p>
          <p>Status: {req.status}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RequestManagement;
