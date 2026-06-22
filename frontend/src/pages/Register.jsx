import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });


    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{

            const response = await API.post(
                "/auth/register",
                formData
            );

            alert(response.data.message);
            navigate("/login");
        }
        catch(error){

            alert(error.response.data.message);

        }

    };


    return(
        <div>

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <br/>

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br/>

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <br/>

                <button>
                    Register
                </button>

            </form>

        </div>
    );

}


export default Register;