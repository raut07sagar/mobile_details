
import React, { useState } from "react";
import Button from '@mui/material/Button';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import Tooltip from '@mui/material/Tooltip';



function Card(props){

    const state = useState();

  const [like, setlike] = useState(0);
  
    const Foo = ()=>{
        setlike(like+1)
       
    };
    const [disLike, setdisLike] = useState(0);
    const Foo1 =()=>{
        setdisLike(disLike+1)
    }
    const [show, setShow] = useState(false);
    const [name, setName] = useState("Show More");

    const Detail = ()=>{
        setShow(!show)
        setName("show Less")
    }


    const styles ={
        background : like >= disLike ? "#44ad93" : "#dc63c9",
        padding:"5rem",
        marginBottom:"0.5rem",
        textAlign : "center",
        marginTop : "2rem",
       borderRadius : "1rem",
       boxShadow : "2px 2px 1px white",
       margin:"2rem",
       maxWidth:"250px",
    };

    const thumb={
        color:"rgba(248, 190, 0, 0.993)",
        marginRight:"0.4rem"
    }
     
       
       

        
        

    

    return(
        <>
        
         <div style={styles}>
         
        <h1 className="heading">{props.name}</h1>
        <p className="model">{props.model}</p>
        <Button onClick = {Detail} variant="contained" color="error"
variant="contained" color="primary">{name}</Button> <br />
         {show ? <p className="desc">{props.desc}</p> : ""} 
         

    <div className="btn">    

       <span className="lik1">
       <Tooltip title="Like" placement="left-start">
        <Button onClick={Foo}  variant="contained" >
        <ThumbUpAltRoundedIcon style={thumb}/>  {like}
        </Button>
        </Tooltip>
        </span>

        <span className="lik1">
        <Tooltip title="Dislike" placement="right">
        <Button onClick={Foo1}  variant="contained" >
         <ThumbDownAltRoundedIcon style={thumb} />  {disLike}
        </Button>
        </Tooltip>
       
       </span>

    </div>    

    

        </div>
        </>
    );
};


export default Card;