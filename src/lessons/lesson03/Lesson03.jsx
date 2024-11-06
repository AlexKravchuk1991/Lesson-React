import MyButton from "../../components/myButton/MyButton";

function Lesson03() {
  const handlerClick = () => {
    console.log("Set!");
  };
  const handlerSubmit = () => {
    console.log("submit!");
  };

  const handlerReset = () => {
    console.log("reset!");
  };

  return (
    <div className="lesson-container">
      <h2>Lesson 03</h2>
      <p>React props</p>
      <p>Способ передачи данных от компонента родителя к компоненту ребенку</p>
      <p>Мы учимся передавать данные в компоненты</p>
<div>
      <MyButton func={handlerClick} isDanger={true}/>
      <MyButton text={"Submit"} func={handlerSubmit} isDanger={false}/>
      <MyButton text={"Reset"} func={handlerReset} isDanger={false}/>
      <MyButton text={'One More BTN'}/>
</div>
    
    </div>
  );
}

export default Lesson03;
