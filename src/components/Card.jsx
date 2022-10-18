import { useState } from "react";

function Card() {
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const [title, setTitle] = useState("useState Hook");

  const [btn, setBtn] = useState("Click Me To Change");

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          A Hook is a special function that lets you "hook into" React
          features.For example, useState is a hook that lets you add React state
          to function components.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => {
            return (
              setTitle("Hey! You Changed Title"),
              setBtn("WooHoo! You Changed Button"),
              setImg(
                "https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            );
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Card;
