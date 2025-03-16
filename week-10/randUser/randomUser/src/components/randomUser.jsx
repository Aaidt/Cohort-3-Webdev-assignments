import React, { useEffect, useState } from "react";
import axios from "axios";

export const RandomUsers = () => {
    const [user, setUser] = useState([])
    const [fetchTrigger, setFetchTrigger] = useState(false);
    
    useEffect(() => {
        if (fetchTrigger === false) return;

        async function fetchUsers() {
            let fetchedUsers = [];
            for (let i = 0; i < 10; i++) {
                const response = await axios.get("https://randomuser.me/api");
                const data = response.data.results[0];
                const name = `${data.name.title} ${data.name.first} ${data.name.last}`
                fetchedUsers.push(name);
            }
            setUser(fetchedUsers);
        }
        fetchUsers();
    }, [fetchTrigger])

    return (
        <div>
            <button onClick={() => setFetchTrigger(true)}>Load Users</button>
            {user.length > 0 ? (    
                user.map((u, index) => (
                    <div key={index}>{u}</div>
                ))
            ) : (
                <p>No users fetched yet...</p>
            )}
        </div>
    )
}