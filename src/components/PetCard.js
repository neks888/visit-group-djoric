import React from "react";

function PetCard({ pet }) {
  const { id, name, tags } = pet;
  const colors = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
  ];
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <div className="card-header">Featured</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">ID: {id}</li>
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className={`mx-1 badge badge-pill badge-info color-white bg-${
                colors[Math.floor(Math.random() * colors.length)]
              }`}
            >
              {tag.name}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default PetCard;
