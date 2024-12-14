import React, { useState, useEffect } from "react"; 
import axios from "axios";

function CityMgt() {
    const [ctid, setCtId] = useState("");
    const [ctname, setCityName] = useState("");
    const [stid, setStId] = useState("");
    const [ctlist, setCtList] = useState([]);
    const [stlist, setStList] = useState([]);

    useEffect(() => {
        // Get states from DB
        axios.get("http://localhost:9995/state/show/").then((res) => {
            setStList(res.data);
        }).catch((err) => {
            console.error("Error fetching states:", err);
        });

        // Get cities from DB      
        axios.get("http://localhost:9995/city/show/").then((res) => {
            setCtList(res.data);
        }).catch((err) => {
            console.error("Error fetching cities:", err);
        });
    }, []);

    const handleCtNameText = (evt) => { 
        setCityName(evt.target.value);
    };

    const handleStIdSelect = (evt) => { 
        setStId(evt.target.value);
    };

    const handleSaveButton = () => {
        const obj = {
            ctid: ctid,
            ctname: ctname,
            stid: stid
        };
        axios.post("http://localhost:9995/city/save/", obj)
            .then((res) => {
                alert(res.data);
                // Optionally clear form or update state
                setCtId("");
                setCityName("");
                setStId("");
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div>
            <center>
                <h5 style={{ backgroundColor: 'green' }}>
                    City Entry Form
                </h5>

                <table>
                    <tbody>
                        <tr>
                            <td>City ID</td>
                            <td>
                                <input 
                                    type="number" 
                                    value={ctid}
                                    onChange={(evt) => setCtId(evt.target.value)} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City Name</td>
                            <td>
                                <input 
                                    type="text" 
                                    value={ctname} 
                                    onChange={handleCtNameText} 
                                />
                            </td>
                        </tr>

                         
                        <tr>
                            <td>State</td>
                            <td>
                                <select onChange={handleStIdSelect}>
                                    <option value="">Select State</option>
                                    {stlist.map((item) => (
                                        <option key={item.stid} value={item.stid}>
                                            {item.stname}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={handleSaveButton}>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tr>
                        <th>City ID</th>
                        <th>City Name</th>
                        <th>State Id</th>
                    </tr>

                            {Array.isArray(ctlist) && ctlist.length > 0 ? (
                ctlist.map((item) => (
                    <tr key={item.ctid}>
                        <td>{item.ctid}</td>
                        <td>{item.ctname}</td>
                        <td>{item.stid}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="3">No cities available.</td>
                </tr>
            )}
            </table>
            </center>
        </div>
    );
}

export default CityMgt;