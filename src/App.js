import logo from './logo.svg';
import './App.css';
import Tree from './components/Tree';
import Navbar from './components/Navbar';
import Filter from './components/Filter';


function App() {



  return (
    <>
      <div className='w-full '>
        <Navbar />
        <Filter />
        <Tree /> 
      </div>
    </>
  );
}

export default App;
