import React, { useEffect } from 'react'
import useSearch from '../hooks/useSearch';
import moment from 'moment';

const Filter = () => {



    const { data, setdata, selected, setselected, male, setmale, female, setfemale } = useSearch();

    const handlechange = (e) => {

        let m = 0;
        let f = 0;

        if (e.target.name == "city") {
            setselected({ ...selected, city: e.target.value });

        }

        else if (e.target.name == "gender") {
            setselected({ ...selected, gender: e.target.value });

        }

        else if (e.target.name == "date") {
            setselected({ ...selected, date: e.target.value });

        }

    }

    useEffect(() => {
        let m = 0;
        let f = 0;

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

            .map((val) => {
                if (val.Gender == "Male") {
                    m = m + 1;
                }
                else {
                    f = f + 1;
                }
            }

            )

            setmale(m);
            setfemale(f);

    }, [selected]);



    return (
        <div className='h-12 border p-2 flex justify-end'>
            <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>City:</label>
                <select onChange={ handlechange } name="city" className="border rounded border-slate-300">
                    <option selected className=''>Show All</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                    <option>Bangalore</option>
                </select>
            </div>


            <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>Gender:</label>
                <select onChange={ handlechange } name="gender" className="border rounded border-slate-300">
                    <option selected className=''>Show All</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>


            <div className='flex items-center my-2 mr-2'>
                <label className='pr-2 text-lg'>Date:</label>
                <input onChange={ handlechange } className='border' type="date" name="date" id="date" />
            </div>
        </div>
    )
}

export default Filter