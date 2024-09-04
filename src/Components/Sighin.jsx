import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Sighin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password,

    }

    await axios.post("http://localhost:4001/user/sighup", userInfo).then((res)=>{
      console.log(res.data);
      if(res.data){
        alert("Sighup Successful");
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        alert("Error: "+err.response.data.message);
      }
    })
  
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div>
          <div className="modal-box bg-white  md:px-20">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <NavLink
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </NavLink>

              <h3 className="font-bold text-black">Sign Up</h3>
              <div className="mt-4">
                <p>Name</p>
                <input
                  className="bg-white w-80 px-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("fullname", {required: true})}
                />
                <br />
                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4">
                <p>Email</p>
                <input
                  className="bg-white w-80 px-3 border rounded-md outline-none"
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {required: true})}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4">
                <p>Password</p>
                <input
                  className="bg-white w-80 px-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter Your Password"
                  {...register("password", {required: true})}
                />
                <br />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-center">
                <button className="mt-4 px-3 py-1 border rounded-md hover:text-white hover:bg-pink-500 duration-200">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sighin;
