import { useState } from "react";

export const Filter = ({ filter, setFilter }) => {
    const [filterOpen, setFilterOpen] = useState(false);
    const toggleDifficulty = (difficulty) => {
        setFilter(prev => ({
            ...prev,
            [difficulty]: !prev[difficulty]
        }))
    }

    return (
        <div className="p-5 md:flex grid col-span-3">
            <button className="text-white p-3 " onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
            {filterOpen ? (
                <div className="text-white flex gap-3 justify-around w-64 h-96 bg-[#323332] rounded-lg p-3">
                    <label>
                        <input
                            type="checkbox"
                            checked={filter.easy}
                            onChange={() => toggleDifficulty("easy")}
                        />Easy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={filter.medium}
                            onChange={() => toggleDifficulty("medium")}
                        />Medium
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={filter.hard}
                            onChange={() => toggleDifficulty("hard")}
                        />Hard
                    </label>
                </div>
            ) : (
                <div>empty  </div>
            )}
        </div>
    )
}
