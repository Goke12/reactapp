import { useState } from "react";//React hooks are imported at the top of the file and used within the component
let Ads = ()=>{
    let [person,setPerson] = useState('');
    let [desc,setDesc] = useState('');
    function handleFormSubmit(e){
        e.preventDefault();
        if(person == "" || desc == ""){
            alert("please complete the form")
        }else{
            alert("Thank you " +person+ " We recieved: " +desc);
        //connect to api at this point
        const data2send = {
            hotel_name:desc, 
            hotel_contact:person, 
            hotel_pix:"https://picsum.photos/200/", 
            hotel_price:15000
        }
        const options = {
            mode: "no-cors",
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data2send)
        }
        fetch("http://localhost/property/api/v1/createnoauth.php",options)
        .then(response =>{
            console.log(response);
            return response.json();
        }) //recieve http response and use it within the anony fucntion
        .then(data =>{
            console.log(data);
        }) //the json data will be available here
        .catch(error=>{
            console.log(error)
        })
        setPerson('')
        setDesc('')

    } //end else
        }
        
    return <>
        <div className="row">
           <div className="col-md-12">
           <h3>Sponsored Post</h3>
           <p className="lead">Complete this form to submit your property for listing</p>

           </div>
        </div>
        <div className="row">
            <div className="col">
                <form>
                    <div className="text-danger">{person}</div>
                    <div className="mb-3">
                        <label>Contact Person</label>
                        <input type="text" value={person} onChange={(event)=>{
                            setPerson(event.target.value); //assign new value to variable person
                        }} className="form-control border-dark"/>
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <input type="text" value={desc} className="form-control border-dark"
                        onChange={function(event){
                            setDesc(event.target.value); //every change we make to this input, function setDesc will keep the new value inside state variable desc and re-render (reload) just this component
                        }}/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-dark col-12" onClick={function(event){
                            handleFormSubmit(event) //to call a function with parameter, put the call within an anonymous function.
                        }}>Submit Form</button>
                        
                    </div>
                </form>
            </div>

        </div>
    
    </>

}

export default Ads