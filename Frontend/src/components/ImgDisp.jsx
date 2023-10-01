import Records from "../dummy/data.json";

import React from "react"; // Import necessary dependencies

export default function ImageGallery() {
  // Assuming you have imported your data correctly
  // Replace this with the actual data import

  const url = "http://localhost:3000/details/"; // Use 'http://' in the URL

  return (
    <div style={{color:"white"}}>
      <h1 className="text-3xl text-center">Image Gallery</h1>
      <div className="inner p-8 flex flex-col gap-10">
        {Records.details.map((record) => (
          <div className="box flex flex-col md:flex-row gap-10" key={record.id}>
            <img
              src={`/images/${record.imageName}`}
              alt="none"
              className="md:h-52 max-w-sm rounded-md"
            />
            <div className="flex flex-col">
              <p className="text-xl mb-4">Image Name : {record.location}</p>
              <p className="text-xl max-w-xl">
                Description : {record.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
