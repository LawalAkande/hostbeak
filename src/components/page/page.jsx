import React from "react";
import CreatAccount from "../templates/createAccount/createAccount";
import AddBill from "../templates/addBill/addBill";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Page = () => {
  return (
    <div>
      {/* <CreatAccount /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/addBill" component={AddBill} />
          <Route path="/" exact component={CreatAccount} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Page;
