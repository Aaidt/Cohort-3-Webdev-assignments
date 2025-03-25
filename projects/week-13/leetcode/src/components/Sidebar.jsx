import { useState } from "react";

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    return (
        <div className="md:flex grid col-span-3">
            {sidebarOpen ? (
                <div className="w-3xs bg-[#323332] h-screen" >
                    <svg
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        id="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-white size-6 cursor-pointer transition-all duration-5000">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>
                </div >
            ) : (
                <div>
                    <svg
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        id="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-white size-6 cursor-pointer transition-all duration-5000">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>
                </div>
            )
            }
        </div>
    )
} 