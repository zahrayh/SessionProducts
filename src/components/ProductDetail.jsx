import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = () => {
  const history = useHistory();

  const handleSave = () => {
    history.push("/");
    // When saving move the user to the home router `/` and handle the history correctly, so that we can access the browser back button.
  };

  const params = useParams();
  return (
    <div>
      <h1>Product Details - {params.id} </h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
