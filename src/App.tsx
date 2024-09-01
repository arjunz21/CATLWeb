import "./App.css";
import { Fragment } from "react";
// import { Link, Route, Switch } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/Home";
import InviteIncome from "./components/InviteIncome";

import Support from "./components/common/Support";
import MyPersonalCenter from "./components/MyPersonalCenter";
import NotFound from "./components/common/NotFound";
import Aboutus from "./components/common/Aboutus";
import Footer from "./components/common/Footer";
import Login from "./components/common/Login";
import AuthProvider from "./contexts/AuthContext";
import Registeracc from "./components/Registeracc";
import Invested from "./components/Invested";
import Invest from "./components/Invest";
import PlanProvider from "./contexts/PlanContext";

export default function App() {
  return (
    <Fragment>
      <AuthProvider>
        <PlanProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<Invest></Invest>}></Route>
            <Route path="/invested" element={<Invested></Invested>}></Route>
            <Route path="/about" element={<Aboutus></Aboutus>}></Route>
            <Route path="/support" element={<Support></Support>}></Route>
          </Route>
          <Route path="/register/">
            <Route index element={<Registeracc></Registeracc>}></Route>
            <Route path=":invCode" element={<Registeracc></Registeracc>}
            ></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/inviteincome" element={<InviteIncome amt="100"></InviteIncome>}
          ></Route>
          <Route path="/myinfo" element={<MyPersonalCenter></MyPersonalCenter>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        </PlanProvider>
      </AuthProvider>
    </Fragment>
  );
}
