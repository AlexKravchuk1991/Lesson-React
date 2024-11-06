import './myButton.css'


function MyButton ({func,text=('Click'),isDanger=false,type='button'}){
   
    

    return <button onClick={func} className={`btn-cont ${isDanger ? `btn-cont-danger`:`btn-primary`}`} type={'type'}> {text} </button>
    
    
}

export default MyButton;