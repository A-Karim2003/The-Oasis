"use client";

import { Bounce, ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      theme="dark"
      transition={Bounce}
    />
  );
}
