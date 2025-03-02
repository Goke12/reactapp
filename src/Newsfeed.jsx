export default function Newsfeed(){
    let blogger1 ="Linda Ikeji";
    let blogger2 = "Neil Patels";
    
    return <div className="row">
                <div className="col">
                    <div style={{border:"2px solid blue",padding:"10px"}}>
                        <h1>Post 1 by {blogger1}</h1>
                        <p>This is a sample content..</p>
                        <button className="btn btn-danger">Details</button>
                    </div>
                    <div style={{border:"2px solid blue",padding:"10px"}}>
                        <h1>Post 2 {blogger2}</h1>
                        <p>This is a sample content2..</p>
                        <button className="btn btn-danger" onClick={()=>{alert('Hello');}}>Details</button>
                    </div>
                </div>
    
            </div>
}