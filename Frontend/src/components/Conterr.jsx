import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Records from "../dummy/data.json";

export default function ImageUpload() {
  const url = "http://localhost:3000/details/";
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const myref = useRef();
  useEffect(() => {
    // This effect runs when 'id' changes
    axios
      .get("http://localhost:4001/sekar", {
        params: { did: location }, // Send 'id' as a query parameter
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [location]); // Only re-run the effect when 'id' changes

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const upload = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("location", location);
    formData.append("description", description);

    axios
      .post("http://localhost:4001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);

        // Clear input fields and reset image state after successful upload
        setLocation("");
        setDescription("");
        setImage(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="px-10 py-8" style={{color:"white"}}>
      <h1 className="text-3xl text-center">Admin Dashboard</h1>
      <div
        className="border-2 rounded-md border-dashed max-w-4xl h-52 mx-auto mt-6 flex justify-center items-center cursor-pointer"
        onClick={() => myref.current.click()}
      >
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
          ref={myref}
        />
        <p className="font-bold text-xl md:text-3xl">Uploade Your Images</p>
      </div>
      <div className="max-w-3xl mx-auto my-10">
        <div className="flex flex-col md:flex-row w-full gap-6">
          <input
            className="flex-1 py-2 outline-none rounded-md px-2 text-black text-xl"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            className="flex-1 py-2 outline-none rounded-md px-2 text-black text-xl"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-6 my-7">
          <button
            type="button"
            className="flex-1 py-2 outline-none rounded-md px-2 text-xl bg-[#48a3c6]"
            onClick={upload}
          >
            Upload Image
          </button>
          <button
            type="button"
            onClick={() => {
              setImage(null);
              setLocation("");
              setDescription("");
            }}
            className="flex-1 py-2 outline-none rounded-md px-2 text-xl bg-[#48a3c6]"
          >
            Clear All
          </button>
        </div>
      </div>
      <div>
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
              <button
                className="max-w-xs mt-10 py-2 outline-none rounded-md px-2 text-xl bg-[#48a3c6]"
                onClick={(e) => {
                  var base = url + record.id;
                  fetch(base, { method: "DELETE" })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Something went wrong");
                      }
                      // You need to define the 'navigate' function properly for navigation
                      // Example usage with React Router: history.push('/details')
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
