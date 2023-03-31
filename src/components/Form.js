import {  useState } from "react";

function Form(props) {
    const { movieSearch, setMovie} = props;
    // formData is an object
    const [formData, setFormData] = useState({searchTerm: ""} );

    // handle change on the input
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // handle the on submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await movieSearch(formData.searchTerm);
        setMovie(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={formData.searchTerm} 
                name="searchTerm" 
                placeholder="Enter movie title" 
                onChange={handleChange}
                />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;