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
        <div style={styles.container}>

            <div style={styles.list}>
                {user.length > 0 ? (
                    user.map((user, index) => (
                        <div key={index} style={styles.userCard}>
                            {user}
                        </div>
                    ))
                ) : (
                    <p style={styles.noUsers}>No users fetched yet.</p>
                )}
            </div>
            <button style={styles.button} onClick={() => setFetchTrigger(true)}>
                Fetch Users
            </button>
        </div>
    )
}

const styles = {
    container: {
        textAlign: "center",
        padding: "30px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        marginTop: "10px",
        marginBottom: "20px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
    },
    userCard: {
        padding: "10px 15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    noUsers: {
        fontSize: "18px",
        color: "#777",
    }
};
export default RandomUsers