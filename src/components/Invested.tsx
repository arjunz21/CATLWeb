import { useEffect, useState } from "react";
import api from "./api";
// import { Link, useNavigate } from "react-router-dom";
import Loader from "./common/Loader";
import { Auth } from "../contexts/AuthContext";

interface Props {
  "planname": "", "price": "",
  "dailyincome": "", "days": ""
  "totalincome": "", "fid": ""
}

export default function Invested() {
  const {authVal} = Auth()
  const [userplans, setUserplans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState(false);


  useEffect(() => {
    setLoading(true);
    api.get("/userfinteam/user", 
    {
      headers: {
        accept: "application/json",
        Authorization:
          authVal?.token_type + " " + authVal?.access_token,
      },
    }).then((res) => {
      setUserplans(res.data);
      setLoading(false);
      
    });
  }, [test]);

  function handleRemove(id: any){
    api.delete("/userfinteam/"+id, 
    {
      headers: {
        accept: "application/json",
        Authorization:
          authVal?.token_type + " " + authVal?.access_token,
      },
    }).then(() => { setTest(!test) });
  }

  return (
    <>
      <div className="container p-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {loading ? ( <Loader></Loader> ) : (
            userplans.map((item: Props) => (
              <div key={item?.planname} className="col">
                <div className="card">
                  {/* <img
                    src="https://www.dsspaper.com/pics/p.jpg"
                    className="card-img-top"
                    alt="..."/> */}
                  <h4 className="text-center bg-primary text-white">{item?.planname} Plan </h4>
                  <div className="card-body">
                    <div className="row">
                      <div className="text-center bg-info col rounded-4 m-1">
                        <h5>PRICE</h5>
                        <h5>{item?.price}</h5>
                      </div>
                      <div className="text-center bg-info col rounded-4 m-1">
                        <h5>DAILY INCOME</h5>
                        <h5>{item?.dailyincome}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-center bg-info col rounded-4 m-1">
                        <h5>DAYS</h5>
                        <h5>{item?.days}</h5>
                      </div>
                      <div className="text-center bg-info col rounded-4 m-1">
                        <h5>TOTAL INCOME</h5>
                        <h5>{}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <button onClick={() => handleRemove(item?.fid)} type="submit" className="fs-5 btn btn-warning rounded-4">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

