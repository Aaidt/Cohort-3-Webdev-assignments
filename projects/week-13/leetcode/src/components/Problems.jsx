import { useState } from "react";

export const Problems = () => {
    const [easy, setEasy] = useState(true);
    const [medium, setMedium] = useState(true);
    const [hard, setHard] = useState(true);

    return (
        <div className="flex flex-col gap-10">
            <div id="easy" className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white translate-25">
                <p>Q1. solve this linked list problem.</p>
                <p>Easy</p>
            </div>
            <div id="medium" className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white translate-25">
                <p>Q2. solve this linked list problem.</p>
                <p>Medium</p>
            </div>
            <div id="easy" className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white translate-25">
                <p>Q3. solve this linked list problem.</p>
                <p>Easy</p>
            </div>
            <div id="hard" className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white translate-25">
                <p>Q4. solve this linked list problem.</p>
                <p>Hard</p>
            </div>
            <div id="easy" className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white translate-25">
                <p>Q5. solve this linked list problem.</p>
                <p>Easy</p>
            </div>
            <div id="medium" className="flex justify-between p-2 w-110 h-10 bg-gray-700 rounded-lg text-white translate-25">
                <p>Q6. solve this linked list problem.</p>
                <p>Medium</p>
            </div>

        </div>
    )
}