const Like = ()=>{
    let totalLikes = 0; //to show that components will not re-render if a local variable changes... to allow rendering, use a state variable instead
    function handleLike(){
        //alert("You liked this page")
        totalLikes = totalLikes + 1;
        console.log(totalLikes);
    }
    return <div className="d-flex justify-content-end mb-4">
    <button className="btn btn-danger text-uppercase" href="" onClick={handleLike}>
      Total Likes {totalLikes}
    </button>
  </div>
}
export default Like