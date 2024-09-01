import MyBank from "./MyBank";

interface Props {
  amt: string;
}

export default function InviteIncome({ amt }: Props) {

  return (
    <div className="container">
      <h3 className="container text-center text-white p-3 bg-primary mt-2 rounded-5">InviteIncome</h3>
      <div className="container text-center row">
        <div className="col p-1">
          <h5>Level 1 - <span className="badge fs-5 text-bg-secondary">5%</span></h5>
        </div>
        <div className="col p-1">
          <h5>Level 2 - <span className="badge fs-5 text-bg-secondary">2%</span></h5>
        </div>
      </div>
      
      <h4 className="container text-center text-white p-2 bg-primary rounded-5">Widthdrawal Time</h4>
      <h5 className="container text-center p-1">
        Minimum Withdrawal Amount <span className="badge fs-5 text-bg-secondary">Rs: {amt}</span> <b>One-Day One Withdrawal</b>
      </h5>
      <h5 className="container text-center p-1">Bank Withdrawal Time <span className="badge fs-5 text-bg-secondary">9:AM to 6:PM</span></h5>
      <h5 className="container text-center p-1">Arrival Time 5 Hours to 48 Hours, <span className="badge fs-5 text-bg-secondary">TAX (12%)</span></h5>

      <MyBank></MyBank>
    </div>
  );
}
