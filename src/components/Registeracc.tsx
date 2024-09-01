import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "./api";
import { useState } from "react";


export default function Registeracc() {
  const {invCode} = useParams();
  const nav = useNavigate()
  const [otp, setOtp] = useState({"email": "", "code": ""})
  const [pwd, setPwd] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { 
      "number": "", "invitecode": invCode,
      "firstname": "", "otpcode": "",
      "lastname": "", "imagefile": "",
      "email": "", "hashed_password": ""
     },
  });


  return (
    <div className="card container mt-2 rounded-5">
      <h4 className="bg-primary text-center text-white rounded-5 p-3">
        Registration
      </h4>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data.otpcode +' '+ otp.code)
          //console.log(data.hashed_password +' '+ pwd)
          if (data.otpcode == otp.code && data.hashed_password == pwd)
          {
            api.put("/users/register/", data);
            nav("/login")
          } else { alert("Check OTP or Password Entered ...") }
        })}
        action=""
        className="p-2">
        <div className="m-1 form-check">
          <label className="form-check-label fs-5">Mobile Number</label>
          <input
            {...register("number", {
              required: "This is required",
              maxLength: { value: 12, message: "Max Length is 10" },
            })}
            type="text"
            placeholder="Enter your Mobile Number"
            className="form-control"/>
          <p className="text-danger">{errors.number?.message}</p>
        </div>
        <div className="row">
          <div className="col">
            <div className="m-1 form-check">
              <label className="form-check-label fs-5">First Name</label>
              <input
                {...register("firstname", { required: "This is required" })}
                type="text"
                placeholder="Enter your First Name"
                className="form-control"/>
              <p className="text-danger">{errors.firstname?.message}</p>
            </div>
          </div>
          <div className="col">
            <div className="m-1 form-check">
              <label className="form-check-label fs-5">Last Name</label>
              <input
                {...register("lastname", { required: "This is required" })}
                type="text"
                placeholder="Enter your Last Name"
                className="form-control"/>
              <p className="text-danger">{errors.lastname?.message}</p>
            </div>
          </div>
        </div>
        <div className="m-1 form-check">
          <label className="form-check-label fs-5">Email ID</label>
          <input
            {...register("email", { required: "This is required" })}
            type="text"
            onChange={(e) => setOtp({'email': e.target.value, 'code': ''}) }
            placeholder="Enter your Email ID"
            className="form-control"/>
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="row">
          <div className="col">
            <div className="m-1 form-check">
              <label className="form-check-label fs-5">Password</label>
              <input
                {...register("hashed_password", { required: "This is required" })}
                type="password"
                placeholder="Enter your Password"
                className="form-control"/>
              <p className="text-danger">{errors.hashed_password?.message}</p>
            </div>
          </div>
          <div className="col">
            <div className="m-1 form-check">
              <label className="form-check-label fs-5">Confirm Password</label>
              <input
                type="password"
                onChange={(e) => setPwd(e.target.value) }
                placeholder="Enter your Password again"
                className="form-control"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="m-1 form-check">
              <label className="form-check-label fs-5">OTP Code:</label>
              <input
                {...register("otpcode")}
                type="text"
                placeholder="Enter OTP Code sent"
                className="form-control"/>
                <p className="text-danger">{errors.otpcode?.message}</p>
            </div>
          </div>
          <div className="col">
            <div className="m-1 form-check">
              <label className="form-check-label fs-5">Invite Code</label>
              <input
                {...register("invitecode")}
                type="text"
                placeholder="Enter Invite Code"
                className="form-control"
                value={invCode}/>
              <p className="text-danger">{errors.invitecode?.message}</p>
            </div>
          </div>
          <div className="m-1 form-check">
            <label className="form-check-label fs-5">Image File</label>
            <input
              {...register("imagefile")}
              type="text"
              placeholder="Enter your Imagefile"
              className="form-control"/>
            <p className="text-danger">{errors.imagefile?.message}</p>
          </div>
        </div>

        <div className="container">
          <div className="d-flex flex-row justify-content-evenly align-items-center">
            <a 
              onClick={() => {
                api.get("/users/generateotp?email=" + otp.email)
                .then((res) => {
                  //console.log(res.data)
                  setOtp(res.data)
                  alert("OTP Sent ...")
                });
                return false
              }}
              className="fs-5 m-3 btn btn-success rounded-4">
              Generate OTP
            </a>
            <button
              type="submit"
              className="fs-5 m-3 btn btn-success rounded-4">
              Register
            </button>
            <Link to="/" className="fs-5 m-3 btn btn-danger rounded-4">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
