import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = new useState({});
  const [error, setError] = new useState(false);
  const [loading, setLoading] = new useState(false);
  ///... called spread operator
  const handleChange = (e) => {
    // console.log("inside handle change");
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    //prevent refreshing the page when submitting the form
    e.preventDefault();
    console.log(formData);
    //we used help of proxy in this part to act as an intermediate between client and server
    // to facilitate the request and response handling since for now front and backend have diff localhost numbers
    //fetch is a promise function google it
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(true);
        return;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={false}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          {loading ? "Loading..." : "Sign-Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p classname="text-red-700 mt-5">{error && "Somthing went wrong!"}</p>
    </div>
  );
}
