import React, { useEffect, useState } from "react";
import axios from "axios";

export const RandomUsers = () => {
    const [user, setUser] = useState([])
    // const [fetchCount, setFetchCount] = useState(0);
    // const [inputNo, setInputNo] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (page === 0) return;
        async function fetchUsers() {
            setLoading(true);
            try{
                const response = await axios.get(`https://randomuser.me/api?page=${page}&results=5`);
                setUser((prevUsers) => [...prevUsers, ...response.data.results]);   
            }catch(err){
                console.log(err);
            }
            setLoading(false);
        }
        fetchUsers();
    }, [page])

    // const handleChange = (event) => {
    //     setInputNo(Number(event.target.value));
    // }

    return (
        <>
            {/* <input
                type="number"
                onChange={handleChange}
                placeholder="Enter the number of users required:"
            /> */}

            <div style={styles.container}>
                <div style={styles.list}>
                    {loading ? <p>Loading...</p> : (
                        user.length > 0 ? (
                            user.map((user, index) => (
                                <div key={index} style={styles.userCard}>
                                    <img style={{ padding: 10 }} src={user.picture.large} alt={user.title} />
                                    {user.name.title}{user.name.first}{user.name.last}
                                </div>
                            ))
                        ) : (
                            <p style={styles.noUsers}>No users fetched.</p>
                        )
                    )}

                </div>
                <button style={styles.button} onClick={() => setPage((prev) => prev + 1)}>
                    Fetch Users
                </button>
            </div>
        </>
    )
}

const styles = {
    container: {
        textAlign: "center",
        padding: "30px",
    },
    input: {
        padding: "8px",
        fontSize: "16px",
        margin: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 20px",
        marginTop: "20px",
        fontSize: "16px",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        padding: "10px",
    },
    noUsers: {
        fontSize: "18px",
        color: "#777",
    }
};

export default RandomUsers