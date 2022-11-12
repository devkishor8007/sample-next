import React from "react";
import { useSelector } from "react-redux";

export default function shh() {
  const name = useSelector((state) => state.moon);
  return <div>{name.description}</div>;
}
