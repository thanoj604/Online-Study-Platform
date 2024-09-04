import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
          email:data.email,
          password:data.password,
    
        }
    
        await axios.post("http://localhost:4001/user/login", userInfo).then((res)=>{
          console.log(res.data);
          if(res.data){
            alert("Login Successful");
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err)=>{
          if(err.response){
            console.log(err);
            alert("Error: "+err.response.data.message);
          }
        })
      }
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4">
            <p>Email</p>
            <input className="bg-white w-80 px-3 border rounded-md outline-none" type="email" placeholder="Enter Your Email" {...register("email", {required: true})} />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4">
            <p>Password</p>
            <input className="bg-white w-80 px-3 border rounded-md outline-none" type="text" placeholder="Enter Your Password" {...register("password", {required: true})} />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-between">
            <button className="mt-4 px-3 py-1 border rounded-md hover:text-white hover:bg-pink-500 duration-200">Login</button>
            <span className="mt-4 px-3 py-1">Not Registered?{" "}<NavLink className="underline text-blue-500" to="/sighin">Sign In</NavLink></span>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
