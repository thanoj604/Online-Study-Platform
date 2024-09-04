import React from "react";

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.Category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline ">${item.Price}</div>
              <div className="badge badge-outline hover:text-white hover:bg-pink-500">View</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
