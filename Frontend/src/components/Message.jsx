import React from "react";

export default function Message({ title }) {
  return (
    <p className="text-2xl md:text-4xl font-semibold text-center"> {title} </p>
  );
}
