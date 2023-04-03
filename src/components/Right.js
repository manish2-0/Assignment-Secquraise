import React from 'react'
import useSearch from '../hooks/useSearch'
import moment from 'moment';

const Right = () => {

    const { data, setdata, selected, setselected, display, setdisplay } = useSearch();

    const save = (val) => {
        setdisplay(val);
    }

    return (
        <>

            <div className='w-full h-fit overflow-auto bg-white p-2 rounded'>
                <p className='text-2xl font-[500] underline underline-offset-2'>Events:</p>
                <div className='h-fit overflow-auto'>
                    {
                        data.slice(0).reverse()
                            .filter((val) => {
                                return selected.city == "Show All"
                                    ? val
                                    : val.Location == selected.city

                            })
                            .filter((val) => {
                                return selected.gender == "Show All"
                                    ? val
                                    : val.Gender == selected.gender

                            })
                            .filter((val) => {
                                return selected.date == ""
                                    ? val
                                    : moment(val.Date).format('YYYY-MM-DD') == selected.date

                            })

                            .map((val) =>
                                <div onClick={ () => save(val) } className='rounded mt-2 cursor-pointer p-1 px-2 h-auto bg-slate-400'>
                                    <div className='flex justify-between flex-wrap text-white my-1'>
                                        <h2 className='text-lg'>{ val.ID }: { val.Location }</h2>
                                        <p className='text-sm'>{ val.Date } { val.Time }</p>
                                    </div>

                                    <div className='my-1 text-white text-base'>Person Detected.</div>
                                </div>
                            )
                    }

                </div>




            </div>
        </>
    )
}

export default Right