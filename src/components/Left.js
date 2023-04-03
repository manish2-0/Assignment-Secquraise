import React,{useState,useEffect} from 'react'

import useSearch from '../hooks/useSearch';
import moment from 'moment';

const Left = () => {

    

    const { display, setdisplay } = useSearch();
    const [url, seturl] = useState("https://first-bucket-manish.s3.eu-north-1.amazonaws.com/EVT0050.jpg}");

    useEffect(() => {
        let u="https://first-bucket-manish.s3.eu-north-1.amazonaws.com/"+display.Name+".jpg";
        seturl(u);
    }, [display]);


    return (
        <>
            <div className='h-full w-1/3 flex flex-col pt-12  p-8'>
                <h2 className='text-2xl font-semibold font-sans p-0 m-0 text-fix'>{display.ID}</h2>
                <h2 className='text-base font-sans p-0 m-0 font-bold text-fix'>Person Detected</h2>

                <div className='mt-4 font-sans text-fix'>
                    <p><span className='w-[90px] inline-block'>Name</span>: {display.Name }</p>
                    <p><span className='w-[90px] inline-block'>Location</span>: {display.Location}</p>
                    <p><span className='w-[90px] inline-block'>Date</span>: {display.Date}</p>
                    <p><span className='w-[90px] inline-block'>Time</span>: {display.Time}</p>
                </div>

                <div className='mt-4 font-sans text-fix'>
                    <p>Description:</p>
                    <p>{display.Name} detected at</p>
                    <p>{display.Location} on {moment(display.Date).format('Do MMMM,YYYY')}</p>
                </div>

            </div>


            <div className='h-full w-1/3'>
                <img className='w-full h-full' src={url} />
            </div>
        </>
    )
}

export default Left