import { useEffect, useState } from "react";
import { Auth } from "../contexts/AuthContext";
import api from "./api";
import Loader from "./common/Loader";

function MyBank() {
  const {authVal} = Auth();
  const [banks, setBanks] = useState(
    { "number": "", "name": "", "banks": [{"bankname": "", "bankaccnum": "", "bankifsccode": ""}] },
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/bank/", {
        headers: {
          accept: "application/json",
          Authorization:
            authVal?.token_type + " " + authVal?.access_token,
        },
      })
      .catch((err) => console.log("Error" + err))
      .then((res: any) => {
        setBanks(res.data);
        setLoading(false);
      });

    return () => {};
  }, [authVal]);
  //console.log(banks[0])

  return (
    <div className="card mb-3 rounded-5">
      <div className="card-header text-center text-white fs-3 bg-primary rounded-5">
        My Bank
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <form className="p-3">
            <div className="form-check">
              <label className="form-check-label fs-5">Phone Number</label>
              <input
                disabled
                type="text"
                value={banks.number}
                className="form-control"/>
            </div>
            <div className="form-check">
              <label className="form-check-label fs-5">Full Name</label>
              <input
                disabled
                type="text"
                value={banks.name}
                className="form-control"/>
            </div>
            <div className="form-check">
              <label className="form-check-label fs-5">Bank Name</label>
              <input
                disabled
                type="text"
                value={banks?.banks[0]?.bankname}
                className="form-control"/>
            </div>
            <div className="form-check">
              <label className="form-check-label fs-5">
                Bank Account Number
              </label>
              <input
                disabled
                type="text"
                value={banks?.banks[0]?.bankaccnum}
                className="form-control"/>
            </div>
            <div className="form-check">
              <label className="form-check-label fs-5">Bank IFSC Code</label>
              <input
                disabled
                type="text"
                value={banks?.banks[0]?.bankifsccode}
                className="form-control"/>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default MyBank;
