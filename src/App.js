
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Home from './page/Home'
import SliderAuto from './components/SliderAuto';

function App() {
  return (
   <>
     <Header/>
     <main className='bg-backgroundColor'>
     <Outlet/>
     <Home/>
     <SliderAuto/>
     </main>
    
   </>
     
  );
}

export default App;
