import {useState} from "react";
const LikeState = ()=>{
    //how to use the react hook, useState
    const [totalLikes,setTotalLikes] = useState(0); //it returns an array values with 2 things
    //totalLikes will be name of the state variable that will be created 
    //setTotalLikes will be name of a function you can call anytime you want to change the value of variable totalLikes, don't change the value as this: totalLikes++
    
    function handleLike(){
        setTotalLikes(totalLikes + 1);//the component will re-render anythime you change a state variable this way.
    }
    return <div className="d-flex justify-content-end mb-4">
    <button className="btn btn-danger text-uppercase" href="#!" onClick={handleLike}>
      Total Likes {totalLikes}
    </button>
  </div>
}
export default LikeState