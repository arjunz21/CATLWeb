import { ReactNode, createContext, useContext, useState } from "react";
// import api from "../components/api";
// import { Auth } from "./AuthContext";

const PlanContext = createContext({});

export default function PlanProvider({ children }: { children?: ReactNode }) {
  // const auth = Auth();
  const [planVal, setPlanVal] = useState(() => setplanClear);

//   useEffect(() => {
//     api.get("/finplan/user", {
//         headers: {
//           accept: "application/json",
//           Authorization:
//             auth.authVal?.token_type + " " + auth.authVal?.access_token,
//         },
//       })
//       .then((res) => {
//         setPlanVal(res.data);
//       });
//   }, []);

  function setplanClear() {
    setPlanVal(() => {
      return { planname: "" };
    });
  }

  return (
    <PlanContext.Provider value={{ planVal, setPlanVal, setplanClear }}>
      {children}
    </PlanContext.Provider>
  );
}

export const Plan = () => useContext(PlanContext);
