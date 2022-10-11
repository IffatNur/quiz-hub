import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from 'react-toastify';

export const rightAnswer = () =>
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 1,
    theme: "dark",
  });
const Navbar = () => {
  
    return (
      <div>
        <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500  text-white w-full mx-auto">
          <div className="flex-1">
            <h2 className="font-bold text-4xl flex lg:ml-32">
              <BookOpenIcon className="h-11 w-10 text-yellow-400 flex mr-3" />
              Quiz Hub
            </h2>
          </div>
          <div className="invisible lg:visible flex-none">
            <ul className="menu menu-horizontal p-0 font-bold text-xl ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Topics</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="visible lg:invisible collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <Bars3Icon className="h-11 w-10 text-yellow-400 flex mr-3" />
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <ul className="menu menu-vertical p-0 font-bold text-xl ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Topics</Link>
                </li>
                <li>
                  <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Navbar;