import React from 'react'

function Card() {
    return (
        <div>
            <div className="bg-zinc-800 p-6 rounded-lg">
                <p className="mb-4">"As an IT manager, security is a top priority for me. Saasta's robust security measures and compliance standards give me peace of mind knowing that our undefined is safe and protected."</p>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://placehold.co/40x40" alt="David Johnson" />
                    <div>
                        <p className="text-sm font-semibold">David Johnson</p>
                        <p className="text-sm text-zinc-400">Marketing Director, Sparkle Brands</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card