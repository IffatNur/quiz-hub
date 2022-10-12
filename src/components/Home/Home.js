import React from 'react';
import './Home.css';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';


const Home = () => {
  const topics = useLoaderData().data;
  console.log(topics);
    return (
      <div className="bg-amber-100">
        <div className="main-container w-2/4 flex items-center justify-center ">
          <div className="text-center text-stone-600">
            <p className="text-3xl">Welcome To,</p>
            <h1 className="text-7xl font-extrabold text-amber-500">QUIZ HUB</h1>
            <p>
              Test your knowledge by participating on quiz test of Quiz Hub!{" "}
              <br />
              Explore more to know about Quiz Hub.
            </p>
            <button className=" flex text-white font-bold border-0 px-4 py-2 rounded-lg bg-sky-600 mx-auto my-4">
              <a href="#topics">Explore More</a>
              <ArrowRightIcon className="h-6 w-6 flex mr-3" />
            </button>
          </div>
        </div>
        <div id='topics' className="grid gap-4 lg:grid-cols-2 mx-auto mt-5 w-4/6 ">
          {topics.map((topic) => (
            <Topics key={topic.id} topic={topic}></Topics>
          ))}
        </div>
      </div>
    );
};

export default Home;