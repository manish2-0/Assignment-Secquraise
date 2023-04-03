import React,{useEffect} from 'react'
import useSearch from '../hooks/useSearch';
import logo from '../logo.png'

const Navbar = () => {

  const { data, setdata, selected, setselected, male, setmale, female, setfemale } = useSearch();

  useEffect(() => {

    let m = 0;
    let f = 0;

    for (let i = 0; i < data.length; i++) {

      if (data[i].Gender == "Male") {
        m = m + 1;

      }
      else if (data[i].Gender == "Female") {
        f = f + 1;

      }

    }

    setmale(m);
    setfemale(f);
  }, []);


  return (
    <div className='flex justify-between items-center p-1 bg-[#001C7B] h-14 w-full'>
      <img className='h-full p-2 w-36' src="" alt="" srcset={ logo } />

      <div className='flex items-center justify-between h-full mr-4 w-36'>
        <div className='cursor-pointer flex items-center justify-center h-10 text-2xl bg-green-500 w-14'>{ male }</div>
        <div className='cursor-pointer flex items-center justify-center h-10 text-2xl text-white bg-red-600 w-14'>{ female }</div>

      </div>

    </div>
  )
}

export default Navbar