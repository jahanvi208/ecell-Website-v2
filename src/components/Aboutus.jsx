import React from 'react'
import '../App.css'

function Aboutus() {
    return (
        <div>
            <div className="bg-black text-white p-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">About US</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight">
                        Fast Tracking <span className="text-yellow-500">the idea into reality </span> with E-Cell ABESEC
                        </h1>
                        <p className="mt-4 text-zinc-400">
                        At E-Cell ABESEC, our journey began with a simple but powerful idea: to fast track and nuture the ideas devlopming in the mind of young brains. Frustrated by the complexities and limitations of existing solutions, we set out to create a platform that would empower teams to collaborate more effectively, streamline workflows, and drive success.</p>
                        <p className="mt-4 text-zinc-400">With a team of passionate developers and project management experts, we embarked on a journey of innovation and iteration. We listened to the needs of our users, gathered feedback, and continuously refined our platform to meet the evolving demands of modern businesses.</p>
                    </div>
                    <div className="bg-gradient-to-b from-green-700 to-green-900 rounded-lg h-64"></div>
                </div>
                <hr style={{color:'black'}}/>
                
                <hr className='center-diamond' />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div class="flex flex-col">

                <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">ACHIEVEMENTS</span>
                        </div>

    <h1 class="text-4xl font-bold leading-tight">
        Highlight <span class="text-yellow-500">achievements</span> by the<span class="text-yellow-500"> numbers</span>
    </h1>

    <div class="mt-4 grid grid-cols-2 gap-4">
        <div class="flex flex-col text-white p-4 rounded-lg">
            <p class="text-2xl font-bold mb-2">500+</p>
            <p>Project Completed</p>
        </div>

        <div class="flex flex-col text-white p-4 rounded-lg">
            <p class="text-2xl font-bold mb-2">500+</p>
            <p>Project Completed</p>
        </div>
        <div class="flex flex-col text-white p-4 rounded-lg ">
            <p class="text-2xl font-bold mb-2">500+</p>
            <p>Project Completed</p>
        </div>

        <div class="flex flex-col text-white p-4 rounded-lg ">
            <p class="text-2xl font-bold mb-2">500+</p>
            <p>Project Completed</p>
        </div>
    </div>
</div>


                    <div className="bg-gradient-to-b rounded-lg h-80 relative">
                        <img src="https://img.freepik.com/premium-photo/digital-colorful-wallpaper-transparent_57262-269.jpg?w=1380" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aboutus