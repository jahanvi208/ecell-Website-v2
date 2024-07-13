import React from 'react'

function ContactUs() {
    return (
        <div className="min-h-screen flex items-center flex-col gap-20 justify-center bg-background text-foreground bg-black text-white">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between p-6">
                <div className="mb-8 md:mb-0 md:mr-8">
                    <h1 className="text-7xl font-bold mb-4">Contact Us</h1>
                    <p className="text-muted-foreground">Need assistance or have questions? Don't hesitate to reach out to us. Our dedicated team is here to help.</p>
                </div>
                <div className="w-full max-w-md bg-card p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#20211F' }}>
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <input type="text" placeholder="Name" className="w-1/2 p-3 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
                            <input type="email" placeholder="Email" className="w-1/2 p-3 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                        <textarea placeholder="Message" className="w-full p-3 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring h-32"></textarea>
                        <button type="submit" className="w-full p-3 rounded-lg bg-yellow-500 text-black text-primary-foreground hover:bg-primary/80">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-20 bg-black text-white p-6 space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-1">
                    {/* <MapContainer/> */}
                    <div className=' bg-gray-500' style={{width:'20rem', height:'20rem'}}></div>
                </div>
                <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-4">
                        <img undefinedhidden="true" alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📧" />
                        <div>
                            <p className="text-lg font-semibold">Email</p>
                            <p className="text-muted-foreground">shubhansh.mh@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img undefinedhidden="true" alt="social-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💬" />
                        <div>
                            <p className="text-lg font-semibold">Social</p>
                            <p className="text-muted-foreground">@ecellabsec</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img undefinedhidden="true" alt="phone-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" />
                        <div>
                            <p className="text-lg font-semibold">Phone</p>
                            <p className="text-muted-foreground">+91 7011520548</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs