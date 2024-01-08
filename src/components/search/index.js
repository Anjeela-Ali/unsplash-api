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
        const dataJ = await data.json();
        const result = dataJ.results;
        setRes(result);
    };
    useEffect(() => {
        fetchRequest();
    }, []);

    const Submit = () => {
        fetchRequest();
        setImg("");
    };
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
                <button onClick={Submit} className='border border-white mx-5 py-2 px-5 rounded focus: bg-white text-gray-900 '>
                    Search
                </button>
            </div>

            <div className="border p-5 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-row-3 gap-5 justify-evenly">
                {res.map((val) => {
                    return (
                        <>
                            <div className=' '>
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
