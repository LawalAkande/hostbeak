import React from "react";
import sign_up from "../../../images/image-2.png";
import { SignUpButton } from "../../atoms/buttons";

const CreatAccount = () => {
  return (
    <div className="flex">
      <div class="flex items-center justify-center">
        <figure class="relative  cursor-pointer">
          <img
            class=" rounded-lg shadow-xl hover:shadow-2xl"
            src={sign_up}
            alt="sign up img"
          />
          <span className="absolute text-lg -mt-60 text-white px-4">
            <div>
              Building exceptional <br /> services with Back Office <br />{" "}
              Support and Business <br /> Perfomance
            </div>
          </span>
        </figure>
      </div>
      <div className="m-20">
        <h4 className="text-midnight_blue text-36px font-bold">
          Create Account
        </h4>
        <p className="text-light text-grey">Build an exceptional business</p>
        <div className="form">
          <div className="">
            <br />
            <div class="flex items-center space-x-20">
              <div class="">
                <label htmlFor="First Name">First Name</label> <br />
                <input
                  type="text"
                  id="firstName"
                  class="w-full border-b py-1 focus:outline-none focus:border-midnight_blue focus:border-b-2  peer"
                  autocomplete="off"
                  placeholder="Enter your first name"
                />
              </div>
              <div class="">
                <label htmlFor="Last Name">Last Name</label> <br />
                <input
                  type="text"
                  id="firstName"
                  class="w-full border-b py-1 focus:outline-none focus:border-midnight_blue focus:border-b-2  peer"
                  autocomplete="off"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <br />
            <br />
            <div class="">
              <label htmlFor="Last Name">Phone Number</label> <br />
              <input
                type="text"
                id="phoneNumber"
                class="w-full border-b py-1 focus:outline-none focus:border-midnight_blue focus:border-b-2  peer w-40"
                autocomplete="off"
                placeholder="Enter your phone number"
              />
            </div>
            <br />
            <br />
            <div class="">
              <label htmlFor="Last Name">Email Address</label> <br />
              <input
                type="text"
                id="emailAddress"
                class="w-full border-b py-1 focus:outline-none focus:border-midnight_blue focus:border-b-2  peer"
                autocomplete="off"
                placeholder="Enter your email address name"
              />
            </div>
            <br />
            <br />
            <div class="">
              <label htmlFor="Password">Password</label> <br />
              <input
                type="password"
                id="password"
                class="w-full border-b py-1 focus:outline-none focus:border-midnight_blue focus:border-b-2  peer"
                autocomplete="off"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="flex space-x-60">
            <div>
              <input type="checkbox" name="" id="" /> Remember me
            </div>
            <div>
              <a href="./forgot_password" className="text-light_blue">
                forgot password?
              </a>
            </div>
          </div>
          <br />
          <SignUpButton />
          <div className="flex justify-center">
            <span>
              Got an account?{" "}
              <a href="./sign_in" className="text-light_blue">
                sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatAccount;
