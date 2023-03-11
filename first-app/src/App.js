
import './App.css';
import Adress from './component/profile/Adress';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <header >

        <div style={{background:'GrayText',  display:'Flex',flexDirection:'columnReverse', justifyContent:'center', height:'750px',width:'100%',paddingTop:'100px'}}>
      <ProfilePhoto/>
      <div style={{alignSelf:'center', height:'150px',width:'400px',fontSize:'20px'}}>
      <div style={{FontSize:'70px',height:'100px',width:'400px',fontSize:'30px'}}> <FullName/></div>
      <div style={{FontSize:'20px',height:'100px',width:'400px',fontSize:'30px'}}> <Adress/></div>
      </div>
     
        </div>

      </header>
      </div>
  );
}

export default App;
