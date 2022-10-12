import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizes = useLoaderData().data.questions;
    console.log(quizes);
    const [total, setTotal] = useState(0);
    
    return (
      <div className="relative w-4/6 mx-auto">
        <h2 className="text-2xl font-bold">
          Total Marks : <span className='text-red-500'>{total}</span>
        </h2>
        {quizes.map((quiz) => (
          <QuizDetails
            key={quiz.id}
            quiz={quiz}
            total={total}
            setTotal={setTotal}
          ></QuizDetails>
        ))}
      </div>
    );
};

export default Quiz;