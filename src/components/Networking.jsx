import React from 'react'
import NetworkCards from './NetworkCards'
import { Slide } from 'react-awesome-reveal'

function Networking() {
    return (
        <div>
            <div className="bg-black text-white p-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10" style={{alignItems:'center'}}>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">NETWORKING</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Strategic Partnerships</h1>
                        <p className="text-lg">
                            Recognizing the power of synergy, E-Cell has forged strategic partnerships with premier institutes like IIIT Delhi, KIET, RLAC, and IMS Ghaziabad.
                        </p>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Slide direction="right" cascade triggerOnce="true">
                            <NetworkCards />
                            <NetworkCards />
                            <NetworkCards />
                            <NetworkCards />
                            <NetworkCards />
                            <NetworkCards />
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Networking