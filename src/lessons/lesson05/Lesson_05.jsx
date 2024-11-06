import {heroes} from './data'
import './lesson05.css'


function Lesson05(){
    console.log({heroes});
    
    return <div className="lesson-container">
        <h2>Lesson 05</h2>
        <p>React MAP components</p>
       <section className='grid-container'>

        {heroes.map((hero,index)=>(
            //     <li key={index}>{hero.name} is {hero.age} year old</li>
            // ))}
         <article className={hero.isDark ? 'hero-dark':'hero-light' }key={index}>
            <h3>{hero.name}</h3>
            <p>{hero.name} is {hero.age} year old</p>
            <img src={hero.image} alt="hero photo" />
           <p>Hero weapons:
             {hero.weapons.map((weapon,index)=>(<span key={index}>
                |{weapon}  
            </span>))}

           </p>
           
         </article>   
         ))}
       </section>
            
        
       
        
    </div>
}

export default Lesson05