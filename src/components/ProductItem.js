import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const ProductItem = (props) => {
  const { productDetails } = props;
  const { title, price, image } = productDetails;

  const dispatch = useDispatch;

  const onClickAdd = (pd) => {
    // console.log(pd);
    dispatch(ADD(pd));
  };

  return (
    <li className="product-item-container">
      <Card style={{ width: "18rem", border: "none", padding: "20px" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "16rem" }}
          className="mt-3"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ fontSize: "20px" }}>Price: ₹ {price}</Card.Text>
          <Button variant="primary" onClick={() => onClickAdd(productDetails)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
};

export default ProductItem;
