import React from "react";

export default function CharacterCard({ character }) {
  const { name, status, species, type, gender, location, image } = character;
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Type: {type}</p>
      <p>Gender: {gender}</p>
      <p>Location: {location.name}</p>
      <img src={image} alt={name} />
    </div>
  );
}
