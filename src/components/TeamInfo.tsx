import { useEffect, useState } from "react";
import { Auth } from "../contexts/AuthContext";
import api from "./api";
import Loader from "./common/Loader";

interface Props {
  "plan": "", "number":"", "name": "", "email": "", "level": "", "dated": ""
}

function TeamInfo() {
  const {authVal} = Auth();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/userfinteam/", {
        headers: {
          accept: "application/json",
          Authorization:
            authVal.token_type + " " + authVal.access_token,
        },
      })
      .then((res) => {
        setTeams(res.data);
        setLoading(false);
      });

    return () => {};
  }, [authVal]);

  return (
    <>
      <div className="card rounded-5 m-4 container row">
        <div className="row">
          <h4 className="bg-primary rounded-5 p-2 text-center text-white">
            TeamList
          </h4>
        </div>
        <div className="row table-responsive">
          <table className="table table-hover table-sm table-warning table-striped">
            <thead className="table-primary">
              <tr>
                <th scope="col">Registration Time</th>
                <th scope="col">Plan</th>
                <th scope="col">Account</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Level</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {loading ? (<Loader></Loader>) : (
                teams.map((item: Props, index) => (
                <tr key={index}>
                  <td>{item?.dated}</td>
                  <td>{item?.plan}</td>
                  <td>{item?.number}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.level}</td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TeamInfo;
