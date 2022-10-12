import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topics = ({topic}) => {
    const {id, logo, name, total} = topic;
    const navigate = useNavigate();
    const handler =()=>{
        navigate(`/quiz/${id}`);
    }
    return (
      <div>
        <div className="card lg:card-side bg-base-100 shadow-lg">
          <figure>
            <img className="bg-black w-full h-full" src={logo} alt="Album" />
          </figure>
          <div className="card-body w-3/4">
            <h2 className="card-title text-3xl font-bold">{name}</h2>
            <p>Total question: {total}</p>
            <div className="card-actions justify-end">
              <button
                onClick={handler}
                className="btn bg-sky-600 border-0 px-8"
              >
                View Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topics;