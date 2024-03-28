import React from 'react'
import { useState, useEffect } from 'react'

const SearchField = () => {
    const [img, setImg] = useState("office");
    const [res, setRes] = useState([]);
 
    const fetchRequest = async () => {
        const accessKey = process.env.REACT_APP_ACCESS_KEY;
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${accessKey}`
        );
        console.log('data', data)
        const dataJ = await data.json();
        const result = dataJ.results;
        setRes(result);
    };
    
    // useEffect Hook
    useEffect(() => {
        console.log('Useeffect is working')
        fetchRequest();
        // setImg('')
    }, []);

    const handleInputChange = (e) => {
        // e.preventDefault()
        setImg(e.target.value);
    };

    const Submit = () => {
        fetchRequest(img);
    };
    return (
        <>
            <div className='my-4 text-center '>
                <input
                    className=' border border-gray-300 text-black outline-none text-sm rounded py-2 px-3 focus: border border-gray-50'
                    type='input'
                    placeholder='Search anything ...'
                    // value={img}
                    onChange={handleInputChange}

                />
                <button onClick={Submit} className='border border-white mx-5 py-2 px-5 rounded focus: bg-white text-gray-900 '>
                    Search
                </button>
            </div>

            <div className="border p-5 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-rows-0 gap-5 justify-evenly">
                {res.map((val) => {
                    return (
                        <>
                            <div key={val.id} className=' '>
                                <img
                                    className="col-3 img-fluid img-thumbnail"
                                    src={val.urls.small}
                                    alt="val.alt_description"
                                    width='100%'
                                />
                            </div>
                        </>
                    );
                })}
            </div>

        </>
    )
}

export default SearchField
