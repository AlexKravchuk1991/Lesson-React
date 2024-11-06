import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson02 from './lessons/lesson02/lesson_02';
import Homework_02 from './homeworks/homework_02/Homework';
import Lesson03 from './lessons/lesson03/Lesson03';
import Homework03  from './homeworks/homework_03/Homework03'
import Lesson04 from './lessons/lesson04/Lesson04';
import FeedBack from './components/feedback/FeedBack';
import Homework_04 from './homeworks/homework_04/Homework_04';
import Lesson05 from './lessons/lesson05/Lesson_05';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
     {/* <App />   */}
     {/* <Lesson02 />  */}
    {/* <h1>Homework 2</h1>
    <Homework_02/>  */}
    {/* <Lesson03/> */}
    {/* <Homework03/> */}
    {/* <Lesson04/> */}
    {/* <Homework_04/> */}
    <Lesson05/>
    </div>
   
);


