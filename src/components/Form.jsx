// import hook
import { useState } from 'react';

// set up input field
const Form = ({ locationSearch }) => {
    // set state
    const [inputData, setInputData] = useState({location: ''});

    // set up handler for changing state
    function handleChange(event) {
        setInputData({...inputData, [event.target.name]: event.target.value });
    };

    // set up handler for submitting location
    function handleSubmit (event) {
        event.preventDefault();
        locationSearch(inputData.location);
        // clear input after submission
        setInputData({ location: '' });
    };

    // display the following: 
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" name="location" placeholder="Enter zip or city name" onChange={handleChange} value={inputData.location} />
                <input type="submit" value="Get Weather" />
            </form>
        </div>
    )
};

export default Form 