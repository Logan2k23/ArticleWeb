import {useState,useEffect} from "react";
// import  Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import image from "../images/images.jpeg"

const Dashboard=()=>{

    
    
    const[articles,setArticles]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchArticles=async () =>{
            try{
                const response=await fetch("http://localhost:8080/api/articles");
                const data=await response.json();

                setArticles(data);
            }catch(error){
                console.log("Error fetching articles",error.message);
            }
        }
        fetchArticles();
    }, []);

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
        }catch(error){
            console.log("Error deleting employee",error.message);
        }
    }

//to navigate to update page
    const handleUpdate=(articleId)=>{
        navigate(`/article/${articleId}`);
    }

    const handleView=(articleId)=>{
        navigate(`/view/${articleId}`);
    }
    return(
        <>
       <div className="dashboard">
     <h1 className="text-center" style={{color: "white",fontSize:"75px"}}>Articles</h1>
        <div className="posts">
        {articles.map((article)=>(
            <div className="eachpost" key={article.id}>
            
           <div className="content"> <h2 className="articleName">{article.name}</h2><h7 >{article.text.substring(0,400)}</h7></div>
            <Button className="btn" onClick={()=>handleView(article.id)}>View Post </Button>
            </div>
            ))}
        </div>
       
    </div>
    {/* <div className="footer">
            <h1>ami bisal boro footer</h1>
    </div> */}
        {/* <Container className="mt-5">
            <Row>n
                <Col>
                    <h1 className="text-center">Articles</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article)=>(
                                <tr key={article.id}>
                                
                                <td className="each-post">{article.text.substring(1,200)}<Button onClick={()=>handleView(article.id)}>{article.name} </Button></td>
                                
                                 <td>
                                    <Button variant="outline-secondary" onClick={()=> handleUpdate(article.id)}>Edit</Button>{" "}
                                    <Button variant="outline-danger" onClick={()=>handleDelete(article.id)}>Delete</Button>
                                </td> 
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                
                </Col>
            </Row>
        </Container> */}
    </>
    )
}

export default Dashboard;