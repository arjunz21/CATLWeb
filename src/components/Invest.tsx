// import { Link } from "react-router-dom";
import Loader from "./common/Loader";
import PlanCard from "./PlanCard";
import { useEffect, useState } from "react";
import api from "./api";

interface Props {
  "planname": "", "price": "",
  "dailyincome": "", "days": ""
  "totalincome": ""
}

function Invest() {
  const [plans, setPlans] = useState([]);
  const status = "1";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/finplan/?status=" + status).then((res) => {
      setPlans(res.data);
      setLoading(false);
    });
  }, [status]);

  // console.log(plans)
  return (
    <>
    <div className="container p-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
      {loading ? (
        <Loader></Loader>
      ) : (
        plans.map((item: Props) => (
          <PlanCard
            title={item?.planname}
            price={item?.price}
            dailyIncome={item?.dailyincome}
            days={item?.days}
            totalIncome={item?.totalincome}
            key={item?.planname}/>
        ))
      )}
      </div>
    </div>
    </>
  );
}

export default Invest;
