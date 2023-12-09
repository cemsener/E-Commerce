"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Cart = () => {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );
  console.log(items, totalAmount, totalQuantity);

  return (
    <div className="container">
      {items.map((item, index) => {
        return (
          <div className="grid grid-cols-6 p-4 my-4 border rounded bg-slate-200 border-slate-100 text-slate-600">
            <div className="col-span-4">{item.title}</div>
            <div className="col-span-1 text-right">{item.quantity}</div>
            <div className="col-span-1 text-right">{item.price}</div>
          </div>
        );
      })}
      <div className="mt-4 text-xl font-bold text-right">
        Total Amount: ${totalAmount}
      </div>
    </div>
  );
};

export default Cart;
