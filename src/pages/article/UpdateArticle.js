
import "./UpdateArticle.css";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateArticle=()=>{


    const {id}=useParams();
    const navigate=useNavigate();

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

    
    useEffect(()=>{
        const fetchEmployee=async()=>{
            try {
                const response=await fetch(`http://localhost:8080/api/article/${id}`);
                const data=await response.json();
                setFormData(data);
            } catch (error) {
                console.error("error fetching user",error.message);
            }
        }
        fetchEmployee();
    },[id])

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response=await fetch(`http://localhost:8080/api/article/${id}`,{
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(formData),
            });

            const data=await response.json();
            console.log("Article updated",data);

            navigate("/");
        }catch(error){
            console.log("error updating article",error.message);
        }
    }

    
    function send(value){

        alert(value.value);
        
        }


    return(
        <>
            {/* <div className="name">
                Name: <input value={formData.name}/>
            </div>
            <div className="text">
                 <h7 className="input"><textarea/></h7>
            </div> */}
            <div className="center-form">
                <h1 className="heading">Edit Article</h1>
                <Form  onSubmit={handleSubmit}>
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
                         oncopy="send(this)" onpaste="send(this)" oncut="send(this)" 
                        onInput={handleInputChange}
                         />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">Edit Article</Button>
                
                </Form>
            </div>
        </>
    )
}

export default UpdateArticle;