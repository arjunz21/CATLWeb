import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import api from "../api";
import { Auth } from "../../contexts/AuthContext";

export default function Login() {
  const nav = useNavigate()
  const {setAuthVal} = Auth()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues:  { "username": "", "password": "" }});
  
  return (
    <div className="card container mt-2 rounded-5">
      <h4 className="bg-primary fs-2 text-center text-white p-3 rounded-5">LOGIN</h4>
      <form
        onSubmit={handleSubmit((data) => {
          api.post("/token/", data, { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
             .then(res => {
              res.data.user = data.username
              res.data.login = true
              setAuthVal((prevState:any) => { return {...prevState, ...res.data} })
              nav("/")
            });
            //console.log(res.data})
        })}
        className="p-2">
        <div className="form-check p-2">
          <label className="form-check-label m-2 fs-5">Email ID</label>
          <input
            {...register("username", {
              required: "This is required",
            })}
            type="text"
            placeholder="Enter registered Email ID"
            className="form-control"/>
            <p className="text-danger">{errors.username?.message}</p>
        </div>
        
        <div className="form-check p-2">
          <label className="form-check-label m-2 fs-5">Password</label>
          <input
            {...register("password", {
              required: "This is required",
            })}
            type="password"
            placeholder="Enter Password"
            className="form-control" />
            <p className="text-danger">{errors.password?.message}</p>
        </div>

        <div className="container">
          <div className="d-flex flex-row justify-content-around align-items-center">
            <button type="submit" className="fs-3 m-3 btn btn-success rounded-4">
              Login
            </button>
            <Link to="/" className="fs-3 m-3 btn btn-success rounded-4">
              Cancel
            </Link>
          </div>
        </div>

      </form>
    </div>
  );
}
