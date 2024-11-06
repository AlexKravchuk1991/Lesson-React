import './App.css';
import myImage from './C4A815A3-C911-42E0-88EB-228BFEF3461F.jpeg';

function App() {
  return (
    <div className="App">
     <header className='header-cont'>Kravchuk Alex</header>
     <main>
      <div className='main-cont'>
        <div className='main-cont-img'>
          <div><img src={myImage}  alt="photo" /></div>
          <div className='hobbies-cont'><ul>Hobbies</ul>
          <li>Box</li>
          <li>Мotorcycles</li>
          <li>SnowBoarding</li>
          </div>
        </div>
        <div className='contact-cont'>
          <p>tel: +38 (093) 844-32-05</p>
          <p>E: <a className='mail-info' href="alex_krava@ukr.net"> alex_krava@ukr.net</a></p>
        </div>
      </div>
     </main>
     <footer className='footer-cont'></footer>
    </div>
  );
}

export default App;
