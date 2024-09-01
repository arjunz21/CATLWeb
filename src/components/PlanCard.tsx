import api from "./api";
import { useNavigate } from "react-router-dom";
// import { Plan } from "../contexts/PlanContext";
import { Auth } from "../contexts/AuthContext";

interface Props {
  title: string;
  price: string;
  dailyIncome: string;
  days: string;
  totalIncome: string;
}

export default function PlanCard({
  title,
  price,
  dailyIncome,
  days,
  totalIncome,
}: Props) {
  const {authVal} = Auth();
  //const plan = Plan()
  const nav = useNavigate()

  function handleAdd(name: string) {
    api.get("/userfinteam/register/?finplan=" + name, {
        headers: {
          accept: "application/json",
          Authorization:
            authVal.token_type + " " + authVal.access_token,
        },
      })
      .then(() => {
        nav("/invested")
      });
  }

  return (
    <div className="card rounded-4 mb-3">
      <h5 className="card-title bg-primary fs-3 p-1 text-center text-white rounded-4">
        {title} Plan
      </h5>
      <div className="row g-0">
        {/* <div className="col-md-4">
          <img
            src="https://www.dsspaper.com/pics/p.jpg"
            className="h-100 rounded-3 img-fluid rounded-start"
            alt="..." />
        </div> */}
        <div className="col-md">
          <div className="card-body">
            <div className="row">
              <div className="text-center bg-info col rounded-4 m-1">
                <h5>PRICE</h5>
                <h5>{price}</h5>
              </div>
              <div className="text-center bg-info col rounded-4 m-1">
                <h5>DAILY INCOME</h5>
                <h5>{dailyIncome}</h5>
              </div>
            </div>
            <div className="row">
              <div className="text-center bg-info col rounded-4 m-1">
                <h5>DAYS</h5>
                <h5>{days}</h5>
              </div>
              <div className="text-center bg-info col rounded-4 m-1">
                <h5>TOTAL INCOME</h5>
                <h5>{totalIncome}</h5>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-evenly align-items-center">
              <button
                onClick={() => handleAdd(title)}
                type="submit"
                className="fs-5 btn btn-warning rounded-4">Invest</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
