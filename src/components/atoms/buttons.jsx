import React from "react";
import { useHistory } from "react-router-dom";

export const SignUpButton = () => {
  const hitory = useHistory();

  const goToAddBill = () => {
    hitory.push("/addBill");
  };

  return (
    <button
      onClick={goToAddBill}
      className="w-full bg-light_blue text-center text-extrabold text-white p-4 rounded"
    >
      Sign up
    </button>
  );
};
