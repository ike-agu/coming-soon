import {Header, Footer} from './Layout'
import Logo from './goodLogo.svg'
import './App.css';


function App() {
  return (

    <>


    <div className="App">
      <Header/>


      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1>
          Grace Empowerment Assembly
        </h1>
         <h3>This is a church where the light of God shines every second</h3>
         <h3> Get in touch:</h3>
         <p>email us at : info@graceempowermentassembly.com</p>
         <p>Pastor Abey: 07984413361</p>
         <p>Min. Ikenna: 07494052360</p>
      </header>
       <Footer/>
    </div>



    </>
  );
}

export default App;
