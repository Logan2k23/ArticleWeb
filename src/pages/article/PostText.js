import { useState } from "react";
import "./PostText.css";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom";

const Postuser=()=>{
    const[formData,setFormData]=useState({
        name:"",
        text:""
    })

    const handleInputChange=(event)=>{
        const{name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);

        try {
            const response=await fetch("http://localhost:8080/api/article",{
                method:"Post",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(formData)
            });
            const data=await response.json();
            console.log("Employee created",data);
            navigate("/")
        } catch (error) {
            console.log("Error creating employee",error.message);
        }
       
    }

    return(
        <>
        <div>
           
        </div>
            <div className="center-form">
                <h1 style={{color:"white"}}>Post New Article</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                <Form.Label>Enter the name of article</Form.Label>
                    <Form.Control 
                        type="text"
                    
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3}
                         type="text"
                        name="text"
                        placeholder="Enter text"
                         value={formData.text}
                        onChange={handleInputChange}
                         />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">Post Article</Button>
                </Form>
            </div>
        </>
    )
}

export default Postuser;