import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
    </div>
  );
}
