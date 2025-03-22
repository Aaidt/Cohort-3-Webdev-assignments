import { useState } from "react";

export const Features = () => {
    const [simpleOpen, setSimpleOpen] = useState(true);
    const [speedyOpen, setSpeedyOpen] = useState(false);
    const [easyOpen, setEasyOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-around">
                <button
                    className="font-bold"
                    onClick={() => {setSimpleOpen(true)
                        setSpeedyOpen(false)
                        setEasyOpen(false)
                    }}>
                    Simple Bookmarking
                </button>
                <button
                    className="font-bold"
                    onClick={() => {setSpeedyOpen(true)
                        setSimpleOpen(false)
                        setEasyOpen(false)
                    }}>
                    Speedy Searching
                </button>
                <button
                    className="font-bold"
                    onClick={() => {setEasyOpen(true)
                        setSimpleOpen(false)
                        setSpeedyOpen(false)
                    }}>
                    Easy Sharing
                </button>
            </div>
            <div className="bg-blue-700 rounded-full w-3xl h-64 translate-y-70 -translate-x-64"></div>

            <div>{simpleOpen ? (<img className="translate-x-20 -translate-y-40" src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg" />) : undefined}</div>
            <div>{speedyOpen ? (<img className="translate-x-20 -translate-y-40" src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg" />) : undefined}</div>
            <div>{easyOpen ? (<img className="translate-x-20 -translate-y-40" src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg" />) : undefined}</div>
            
        </div>
    )
}