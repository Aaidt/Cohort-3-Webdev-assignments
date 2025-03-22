import React from "react";

export const NavBar = () => {
    return (
        <div className="p-14 text-xl flex justify-around">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                <span>Bookmark</span>
            </div>
            <div className="flex justify-around">
                <span className="px-4">Features</span>
                <span className="px-4">Downloads</span>
                <span className="px-4">FAQ's</span>
                <button className="bg-red-400 font-bold rounded-xl -translate-y-3 px-6 py-3">Login</button>
            </div>

        </div>
    )
}