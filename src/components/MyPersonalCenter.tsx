import { Link } from "react-router-dom";
import { Auth } from "../contexts/AuthContext";
import MyInfo from "./MyInfo";
import ResetPassword from "./ResetPassword";
import TeamInfo from "./TeamInfo";
import WalletInfo from "./WalletInfo";
import { useEffect, useState } from "react";
import api from "./api";
import Loader from "./common/Loader";


export default function MyPersonalCenter() {
  const {authVal, setAuthClear} = Auth();
  const [user, setUser] = useState({"firstname": "", "lastname": "", "email": "", "refcode": ""});
  const [loading, setLoading] = useState(false);

  function logout() { setAuthClear(); }

  useEffect(() => {
    setLoading(true);
    api.get("/users/me/info", {
        headers: {
          'accept': 'application/json',
          'Authorization': authVal?.token_type + ' ' + authVal?.access_token
        },
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      });
    
    return (() => {})
  }, [authVal]);

  return (
    <>
    {loading ? (
        <Loader></Loader>
      ) : (<div className="container mt-2 rounded-5">
      <div className="row bg-primary rounded-5 m-2">
        <h3 className="text-center text-white">My</h3>
        <h3 className="text-center text-white">Personal Center</h3>
      </div>

      <MyInfo
        name={user?.firstname + ' ' + user?.lastname}
        email={user?.email}
        dailyAmt="200" totAmt="1000"
        refCode={user?.refcode} />
      <TeamInfo></TeamInfo>
      <WalletInfo></WalletInfo>
      <ResetPassword></ResetPassword>

      <div className="container">
        <div className="d-flex flex-row justify-content-evenly align-items-center">
          <Link to="/" className="fs-3 m-3 btn btn-success rounded-4">Home</Link>
          <Link to="/" onClick={logout}
            className="fs-3 m-3 btn btn-danger rounded-4">Sign-Out</Link>
        </div>
      </div>
    </div>)}
    </>
  );
}
