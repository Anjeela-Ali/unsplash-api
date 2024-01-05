import React from 'react'
import { useState, useEffect } from 'react'

const SearchField = () => {
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);


    const fetchRequest = async () => {
        const accessKey = process.env.REACT_APP_ACCESS_KEY;
        console.log('accessKey', accessKey)
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${accessKey}`
        );
        console.log('data',data)
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log('result',result);
        setRes(result);
      };
      useEffect(() => {
        fetchRequest();
      }, []);
    return (
        <>

            <div className='my-4 text-center '>
                <input
                    className=' border border-gray-300 text-black outline-none text-sm rounded py-2 px-3 focus: border border-gray-50'
                    type='input'
                    placeholder='Search anything ...'
                    value={img}
                    onChange={(e) => setImg(e.target.value)}

                />
                <button className='border border-white mx-5 py-2 px-5 rounded focus: bg-white text-gray-900 '>
                    Search
                </button>
            </div>

        </>
    )
}

export default SearchField
