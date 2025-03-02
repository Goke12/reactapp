let Writers = ({bloggers}) =>{//destructuring makes us access bloggers directly instead of props.bloggers
   // console.log(bloggers)
    let blogger_list = bloggers.map(function(value,key){
        //Date.now() to generate the time now in JS
        return <li key={key}>{value}</li>
    });
    return <div className="row">
        <div className="col-md-6 offset-3 my-3">
            <h3>Regular Bloggers</h3>
    <ul>
        <li>Everyone</li>
        {blogger_list}
    </ul>
    </div>
        </div>
}
export default Writers;