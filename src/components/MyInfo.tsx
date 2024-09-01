import { Link } from "react-router-dom";

interface Props { dailyAmt: string; totAmt: string; name: string; email: string; refCode: string; }

function MyInfo({name, email, dailyAmt, totAmt, refCode}:Props) {
  return (
    <>
      <div className="m-2 container row">

        <div className="text-center row">
          <div className="row">
            <div className="col">
              <h5>Name: <span className="badge fs-5 text-bg-secondary">{name}</span></h5>
            </div>
            <div className="col">
              <h5>Email ID: <span className="badge fs-5 text-bg-secondary">{email}</span></h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h5>Today, Rs: <span className="badge fs-5 text-bg-secondary">{dailyAmt}</span></h5>
              <h5>Total Earned, Rs: <span className="badge fs-5 text-bg-secondary">{totAmt}</span></h5>
            </div>
            <div className="col">
              <h5>Invite Friends: <Link to={"/register/" + refCode}>Link</Link></h5>
              <h5>Referral Code: <span className="badge fs-5 text-bg-secondary">{refCode}</span></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInfo;
