import React from "react";

export const MainContent = () => {
    const head = "A Simple\n Bookmark\n Manager";
    const content = "A clean and simple interface to organize\n your favourite websites. Open a new\n browser tab and see your sites load\n instantly. Try it for free."
    return (
        <div className="flex justify-around">
            <div>
                <div className="m-3">
                    {head.split("\n").map((i, key) => (
                        <div className="text-5xl p-1 font-bold translate-x-28" key={key}>{i}</div>
                    )
                    )}
                </div>
                <div className="m-4">
                    {content.split("\n").map((i, key) => (
                        <div className="text-2xl text-gray-500 translate-x-28" key={key}>{i}</div>
                    )
                    )}
                </div>
                <div className="p-2">
                    <button className="translate-x-28 bg-blue-700 hover:bg-white hover:text-black text-white text-bold text-xl rounded-lg p-3">Get it on Chrome</button>
                    <button className="translate-x-28 bg-gray-400 text-white text-bold text-xl rounded-lg p-3">Get it on FireFox</button>
                </div>

            </div>
            <div>
                <div className="bg-blue-700 rounded-full w-3xl h-64 translate-y-50 translate-x-64">

                </div>
                <img className="-translate-y-54 translate-x-32 w-lg" src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg" />
            </div>
        </div>
    )
}