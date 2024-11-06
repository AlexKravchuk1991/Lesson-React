import reactImg from "../../assets/react-img.jpg";
import MyButton from "../../components/myButton/MyButton";

import "./lesson_02.css";

function Lesson02() {
  const element = <li>i am element in variable</li>;
  const text = "text for JSX tag";
  const company = "Facebook";
  const user = {
    firstName: "Brandan",
    lastname: "Eich",
  };

  function formatUser(name) {
    return name.firstName + " " + name.lastname;
  }

  const isLogIn = false;
  return (
    <div className="lesson-container">
      <h1>Lesson 02</h1>
      <p>React JSX component</p>
      <img className="img-cont" src={reactImg} alt="photo" />
      <ul>
        <li>simple text</li>
        {element}
        <li>{text}</li>
        <li>React was created by {company}</li>
        <li>{formatUser(user)} is creator of JS</li>
        <li>Usser {isLogIn ? 'is':'is NOT'} in the system </li>
      </ul>
      <MyButton/>
    </div>
  );
}

export default Lesson02;
