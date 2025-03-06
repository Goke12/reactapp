import { useEffect } from "react";
import { useState } from "react";
const Meal = ()=>{
    let [count, setCount] = useState(0);
    let [meals, setMeals] = useState([]);
    let [errormsg, setErrorMsg] = useState(null);
    let [loader, setLoader] = useState(false);

    
    let fetchMeal = ()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            //work with data here
            console.log(data) //to see the structure of what is coming
            setMeals(data.categories);
            //we are keeping the data received into variable meals
        })
        .catch((error)=>{
            setErrorMsg(error.message);
            console.log(error);
        })
        .finally(()=>{setLoader(false)})
        
    }
    //useEffect(()=>{codes here will execute anytime the page renders},[])
    useEffect(()=>{
        setLoader(true);
        fetchMeal();
        console.log(meals)
       
    },[errormsg]);
    let  meal2display = meals.map(function(value,key){
        return <div className="row py-3">
        <div className="col-md-4">
            <img src={value.strCategoryThumb} className="img-fluid"/>
        </div>
        <div className="col-md-8">
            <h4>{value.strCategory}</h4>
            <p>{value.strCategoryDescription}</p>
        </div>
    </div>

    })
    return <>
        
                <h1 className="my-4">Yummy Meal Categories</h1>
                {/* Row */}
                {loader &&  <div className="text-center"><div className="spinner-border" role='status'><span className="visually-hidden">Loading...</span></div></div>}
                {errormsg &&  <div className="alert alert-danger">
                <p>{errormsg}</p>
                <button className="btn btn-danger" onClick={()=>{setErrorMsg(false)}}>Refresh</button>
                </div>}

                {meals && meal2display}
           
            {/* End Row */}
        
    
    
    </>

}

export default Meal