import { useState } from "react";

export const Filter = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
        </div>
    )
}
