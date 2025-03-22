import React from "react";

export const Card = () => {

    return (
        <div className="p-3 w-96 h-120 bg-gray-900 rounded-lg translate-x-20 translate-y-15">
            <div className="bg-white w-20 h-20 rounded-lg">
                <img className="w-12 h-12 translate-3.5" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.svg" />
            </div>
            <div className="font-bold text-white text-lg">Favourite</div>
        </div>
    )
} 