import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img7 from '../images/img7.jpg'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" relative container m-auto p-3 sm:w-80 bg-slate-100 overflow-hidden sm:rounded-3xl">
          <h1 className="absolute top-4 text-xl font-semibold text-black">
            META<span className="text-stone-500">MATCH</span>
          </h1>
          <img
            className="absolute top-2 right-4 w-32 h-32 rounded-full"
            src={img1}
            alt="3d human face illustator"
          />
          <img
            className="absolute top-20 left-5 w-32 h-32 rounded-full"
            src={img2}
            alt="3d human face illustator"
          />
          <img
            className="absolute top-32 right-24 w-16 h-16 rounded-full"
            src={img3}
            alt="3d human face illustator"
          />
          <img
            className="absolute top-32 -right-16 w-36 h-36 rounded-full"
            src={img4}
            alt="3d human face illustator"
          />
          <img
            className="absolute top-48 -left-16 w-32 h-32 rounded-full"
            src={img5}
            alt="3d human face illustator"
          />
          <img
            className="w-44 h-44 rounded-full mb-4 mt-48 mx-auto"
            src={img7}
            alt="3d human face illustator"
          />
          <img
            className="absolute top-72 -right-12 w-28 h-28 rounded-full"
            src={img1}
            alt="3d human face illustator"
          />
          <h2 className=" font-bold text-4xl px-4 text-center mb-1">
            Find Your <span className="text-red-400">first Meta</span> matches.
          </h2>
          <p className=" text-stone-700 font-medium px-12 text-center">
            Join us and socialize with millions of meta humans
          </p>

          <div className=" mt-6 mb-4 text-center">
            <Link to={"/profile"}>
              <button className="bg-stone-800 text-white p-3 rounded-xl mr-2">
                Get started <i className="fa-solid fa-arrow-right ml-5"></i>
              </button>
            </Link>
            <button className="bg-gray-200 p-3 px-4 mr-2 rounded-xl">
              <i className="fa-brands fa-apple text-2xl"></i>
            </button>
            <button className="bg-gray-200 p-3 px-4 rounded-xl">
              <i className="fa-brands fa-google text-2xl text-red-400"></i>
            </button>
          </div>
          <p className="text-stone-500 font-normal text-center">
            Already have an account?{" "}
            <span className="text-red-800">Sign in</span>
          </p>
      </div>
    </>
  );
}

export default Home;
