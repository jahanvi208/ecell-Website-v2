import React from 'react'

function NetworkCards() {
    return (
        <div>
            <div style={{backgroundColor:'#131412'}} className="p-4 rounded-lg flex flex-col justify-center items-center my-3 w-72">
                <img src="https://placehold.co/100x100" alt="Asana" className="" />
                <div className='text-center my-2'>
                    <h2 className="text-2xl mb-1 font-semibold">Figma</h2>
                    <p className="text-l text-zinc-400">Notion is a versatile all-in-one workspace application</p>
                </div>
            </div>
        </div>
    )
}

export default NetworkCards