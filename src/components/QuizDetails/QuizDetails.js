import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from 'react-toastify';
import { rightAnswer } from '../Navbar/Navbar';


const QuizDetails = ({quiz}) => {
    const {correctAnswer, id, options, question} = quiz;
    const questionMain = question.slice(3, question.length-4);
    return (
      <div>
        <div className="card w-full bg-cyan-200 text-primary-content my-5">
          <div className="card-body">
            <div className="flex justify-between">
              <p className="text-black font-semibold text-xl">{questionMain}</p>
              <button onClick={rightAnswer}>
                <EyeIcon className="h-6 w-6 flex mr-3 text-sky-800"></EyeIcon>
              </button>
            </div>
            <div className="card-actions grid grid-cols-1 md:grid-cols-2 mt-8">
              {options.map((option) => (
                <div className="form-control">
                  <label className="label cursor-pointer border-2 border-sky-800">
                    <input type="radio" name="radio-6" className="radio" />
                    <span className="label-text m-0 mx-auto font-medium">
                      {option}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuizDetails;