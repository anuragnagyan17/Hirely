import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-xl bg-gray-300 text-[#000000] font-medium'>Discover Opportunities, Apply Easily</span>
                {/* <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p> */}

                <h1 className='text-5xl font-bold leading-tight'>
                    Jobs That <span className='text-[#000000]'>Fit Your Skills</span>
                </h1>
                <p className='mt-4 text-lg text-gray-700'>
                    Connect with top companies and find roles tailored just for you.
                </p>

                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-3xl items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Land Your Dream Job'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-3xl bg-[#000000]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection