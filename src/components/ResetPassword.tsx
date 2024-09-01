import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "./api";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { "oldpassword": "", "newpassword":"", "otpcode":"" } });

  return (
    <>
      <div className="m-4 container row">
        <div className="card container rounded-5 row">
          <h4 className="bg-primary rounded-5 p-2 text-center text-white">
            Reset Password
          </h4>
          <form
            onSubmit={handleSubmit((data) => {
              api.patch("/users/resetpassword/", data);
            })}
            className="p-3">
            <div className="form-check">
              <label className="form-check-label fs-5">Old Password:</label>
              <input
                {...register("oldpassword", {
                  required: "This is required",
                })}
                type="text"
                placeholder="Enter Old Password"
                className="form-control"/>
                <p className="text-danger">{errors.oldpassword?.message}</p>
            </div>
            <div className="form-check">
              <label className="form-check-label fs-5">New Password:</label>
              <input
                {...register("newpassword", {
                  required: "This is required",
                })}
                type="text"
                placeholder="Enter New Password"
                className="form-control"/>
                <p className="text-danger">{errors.newpassword?.message}</p>
            </div>
            <div className="form-check">
              <label className="form-check-label fs-5">OTP:</label>
              <input
                {...register("otpcode", {
                  required: "This is required",
                })}
                type="text"
                placeholder="Enter OTP"
                className="form-control"/>
                <p className="text-danger">{errors.otpcode?.message}</p>
            </div>

            <div className="d-flex flex-row justify-content-evenly align-items-center">
              <Link to="/" className="fs-5 m-3 btn btn-warning rounded-4">
                Generate OTP
              </Link>
              <button type="submit" className="fs-5 m-3 btn btn-warning rounded-4">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
