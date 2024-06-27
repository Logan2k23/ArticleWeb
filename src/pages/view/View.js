
import "./View.css";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../images/images.jpeg'

const View=()=>{


    const {id}=useParams();
    
    const[articles,setArticles]=useState([]);
    const navigate=useNavigate();

    const[formData,setFormData]=useState({
        name:"",
        text:""
    })


    
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

    const handleDelete= async(articleId)=>{

        try{
            const response =await fetch(`http://localhost:8080/api/articles/${articleId}`,{
                method: "DELETE",
            });

            if(response.ok){
                setArticles((prevArticles)=>
                prevArticles.filter((article)=>article.id!==articleId)
                )
                
            }
            console.log(`Employee with ID ${articleId} deleted successfully`);
            navigate(`/`);
        }catch(error){
            console.log("Error deleting employee",error.message);
        }
    }
    
    const handleUpdate=(articleId)=>{
        navigate(`/article/${articleId}`);
    }

  

    return(
        <>
        <div>
        <div className="read"  >
        
            <h1 className="header">{formData.name}</h1>

            <para className="data" max-width="50px"><pre className="pre">{formData.text}</pre></para>
            
           {/* <Button  onClick={()=>handleDelete(articles.id)}>Delete</Button> */}
           
        </div>
        <Button className="btn" onClick={()=> handleUpdate(formData.id)}>Edit</Button>
        <Button className="btn" onClick={()=> handleDelete(formData.id)}>Delete</Button>
        </div>
        
            {/* <div className="center-form">
                <h1>Edit Article</h1>
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
                        onChange={handleInputChange}
                         />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">Edit Article</Button>
                </Form>
            </div> */}
        </>
    )
}

export default View;