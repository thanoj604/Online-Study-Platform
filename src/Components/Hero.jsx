import React from "react";
import study from '../../public/study.jpg';

function Hero() {
  return (
    <>
      <div className="max-w-screen-2xl text-black container max-auto md:px-20 px-4 flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 space-y-10">
          <h1 className="text-2xl font-bold">
            Welcome to Course,{" "}
            <span className="text-blue-500">Let's Certify!!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            aut incidunt distinctio tenetur a porro laborum iure, non,
            asperiores neque delectus commodi quasi sit placeat exercitationem.
            Deserunt itaque tempora eum?
          </p>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-accent">Accent</button>
        </div>
        <div className="w-full md:w-1/2">
            <img className="w-9/12" src={study} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
