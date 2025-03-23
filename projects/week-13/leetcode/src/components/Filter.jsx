import { useState } from "react";

export const Filter = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <div className="p-5">
            <button className="text-white p-3 " onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
            {filterOpen ? (
                <div className="text-white flex gap-3 justify-around w-64 h-96 bg-gray-800 rounded-lg p-3">
                    <label>
                        <input 
                        type="checkbox" 
                        onChange={() => handleChange()}
                        checked={checked}
                        />Easy
                    </label>
                    <label>
                        <input type="checkbox" />Medium
                    </label>
                    <label>
                        <input type="checkbox" />Hard
                    </label>
                </div>
            ) : (
                <div>empty  </div>
            )}
        </div>
    )
}
