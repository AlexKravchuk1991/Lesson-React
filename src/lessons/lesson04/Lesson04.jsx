import { useState } from "react"
import MyButton from "../../components/myButton/MyButton"


function Lesson04(){

        // let count = 0;
        // const handlePlus= ()=>{
        //     count = count+1;
        // }
        // const handleMinus=()=>{
        //     count=count-1;
        // }
       let [count, setCount] = useState(0)

       const handlePlus= ()=>{
           setCount(prev=> prev+1)
        }
        const handleMinus=()=>{
             setCount(prev=>prev-1)
            }

       
         const[name, setName]= useState('John')
       
       
       const handleUppercase =()=>{
        setName(name=>name.toUpperCase())
       }

       const [items, setItems]= useState([1,2,3])



       const handleChangeArray =()=>{
        setItems(arr=>[...arr,4])
       }
       
       
       


    return(
        <div className="lesson-container">
            <h2>Lesson 04</h2>
            <p>React hook useState</p>
            <div className="counter">
            <MyButton func={handleMinus} text="-"/>
            <span>{count}</span>
           <MyButton func={handlePlus} text="+" isDanger={true}/>

            </div>
            <p>Что бы хранить и отоброжать на странице изменяющиеся данные в React мы используем 'состояние '(state)-это особая переменная в REACT, которая приходит в результате выполнения функции useState().Если эта переменная изменяется- то это сигнал к обновлению страницы</p>
            <p>Что бы изменит значения мы используем функцию, которая приходит вторым элементом в массиве из useState()-она перезаписывает состояние. Изменение состояния вызывает ререндер с новыми данными</p>
          
        <h3>React Practice</h3>
            <p>Изменение строки</p>
            <div className="state-practice">

                <div>
                <span > {name} </span>
                
                <MyButton text="Изменить" func={handleUppercase}/>
                </div>
 
            </div>
            
           <div className="state-practice">
        <h2>Изменение массива</h2>
                <div>
                    
                <span > {items[0]},{items[1]},{items[2]},{items[3]} </span>
                
                <MyButton text="Изменить" func={handleChangeArray}/>
                </div>
 
            </div>

        </div>
        
        
       
    )
}

export default Lesson04