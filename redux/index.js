// import React from "react";
// import { useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import redix from "../redux/userSlice";

// export default function index() {
//   const todo = useSelector((state) => state.sjana);
//   return <div>{todo.name}</div>;
// }

const store = configureStore({
  reducer: {
    moon: redix,
  },
});

export default store;
