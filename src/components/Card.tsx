import React from "react";
import "./Card.css";

type Props = {
  children: any;
};

const Card = ({ children }: Props) => {
  return <div className="card">{children}</div>;
};

export default Card;
