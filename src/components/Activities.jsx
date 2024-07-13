import React from 'react'
import '../App.css'

function Activities() {
    return (
        <div>
            <div className="bg-black text-white p-20 max-sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">NATIONAL RECOGNITION</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight">
                            National <span className="text-yellow-500">Entrepreneurship</span> Challenge 2023
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            The team's dedication to nurturing aspiring entrepreneurs has translated into a remarkable accomplishment: a 27th place at prestigious <span className="text-yellow-500">National Entrepreneurship Challenge 2023</span>
                        </p>
                    </div>
                    <div className="bg-gradient-to-b from-green-700 to-green-900 rounded-lg h-64"></div>
                </div>
                <hr style={{color:'black'}}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="bg-gradient-to-b from-green-700 to-green-900 rounded-lg h-64"></div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">ENGAGING EVENTS</span>
                        </div>
                        <h2 className="text-3xl font-bold leading-tight">
                            Events to encourage <span className="text-yellow-500">Entrepreneurships</span>
                        </h2>
                        <p className="mt-4 text-zinc-400">
                            The team hasn't stopped at forging partnerships; they've also transformed into a powerhouse of engaging events and workshops:
                        </p>
                        <ul className="mt-4 space-y-2 text-zinc-400">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> E-Summit
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> Achiever Talk
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> The Entrepreneurship Show
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> Mock IPL Auction
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='center-diamond' />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">NATIONAL RECOGNITION</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight">
                            National <span className="text-yellow-500">Entrepreneurship</span> Challenge 2023
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            The team's dedication to nurturing aspiring entrepreneurs has translated into a remarkable accomplishment: a 27th place at prestigious <span className="text-yellow-500">National Entrepreneurship Challenge 2023</span>
                        </p>
                    </div>
                    <div className="bg-gradient-to-b from-green-700 to-green-900 rounded-lg h-64"></div>
                </div>
            </div>
        </div>
    )
}

export default Activities