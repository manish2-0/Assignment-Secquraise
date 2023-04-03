import React, { useEffect } from 'react'
import useSearch from '../hooks/useSearch'
import Left from './Left';
import Right from './Right';


const Tree = () => {

    const {selected, setselected}=useSearch();
    useEffect(() => {
       console.log(selected);
       console.log(selected.length);
    }, []);


  return (
    <>
    <div className='p-2 flex h-[85vh] border bg-slate-100'>
      <div className='flex justify-start items-center w-3/4 border'>
        <Left />
      </div>
      <div className='w-1/4 border overflow-auto overflow-x-hidden bg-slate-400 p-2 rounded'>
        <Right />
      </div>
    </div>
    </>
  )
}

export default Tree