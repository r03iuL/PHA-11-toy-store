import React from "react";

const Footer = () => {
  return (
    <footer className="footer justify-items-center items-center text-lg text-base-content px-20 py-5 bg-rose-600">
      <div className="text-white ">
        <img
          width={"200px"}
          height={"200px"}
          src="https://i.ibb.co/ysvmrph/Icon.png"
          alt=""
        />
        <p>
          &copy;The Toy Store (1990-2023).
          <br />
          Delighting Children Since 1990.
          <br />
          All Rights Reserved.
        </p>
      </div>
      <div className="text-white ">
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className="text-white ">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div className="text-white ">
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-rose-800 absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
