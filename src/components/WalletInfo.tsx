import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../contexts/AuthContext";
import api from "./api";
import Loader from "./common/Loader";

interface Props { "wid": "", "dated": "", "type": "", "walletamt": "", "status": {"code": "", "color": ""} }

function WalletInfo() {
  const {authVal} = Auth();
  const [wallet, setWallet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/wallet/", {
        headers: {
          'accept': "application/json",
          'Authorization': authVal?.token_type + " " + authVal?.access_token,
        },
      })
      .then((res) => {
        setWallet(res.data);
        setLoading(false);
      });

    return () => {};
  }, [authVal]);


  return (
    <>
      <div className="card rounded-5 m-4 container row">
        <div className="row">
          <h4 className="bg-primary rounded-5 p-2 text-center text-white">
            Wallet Records
          </h4>
        </div>
        <div className="row table-responsive">
          <table className="table table-hover table-sm table-warning table-striped">
            <thead className="table-primary">
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {loading ? (<Loader></Loader>) : (
                wallet.map((val: Props, index) => (
                  <tr key={index}>
                    <td>{val?.dated}</td>
                    <td>{val?.type}</td>
                    <td>{val?.walletamt}</td>
                    <td>
                      <span className={"badge fs-5 text-bg-" + val?.status?.color}>
                        {val?.status?.code}</span>
                    </td>
                    <td><Link to="/" className="btn btn-secondary">View</Link></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WalletInfo;
