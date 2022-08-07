import React, {useState} from 'react';
import axios from 'axios';
import './Content.css';

function Content(props) {
    const[photograph, setPhotograph] = useState("");
    const[clientId, setClientId] = useState(
        "YqUbu0iTCu2cgFTczyNQBdkUOlSA1DZIs1VME8qm_0w"
    );
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setPhotograph(event.target.value);
    }
    const handleSubmit = (event) => {
        setClientId("YqUbu0iTCu2cgFTczyNQBdkUOlSA1DZIs1VME8qm_0w");
        const url = `https://api.unsplash.com/search/photos?page=1&query=${photograph}&client_id=${clientId}`;
        axios.get(url)
        .then((res) => {
            console.log(res.data);
            setResult(res.data.results);
        })
    }
    return (
        <>
            <div className="headings">
                <h1>{props.heading}</h1>
            </div>
            <div className="container">
                <input type="text" name="photo" onChange={handleChange} placeholder="Enter image name" />
                <button type="submit" onClick={handleSubmit}>Search</button>
            </div>
            <div className="photo">
                {result.map( (key) => (
                    <img src={key.urls.small} alt="reqPhoto"/>
                ))}
            </div>
        </>
    )
}

export default Content;