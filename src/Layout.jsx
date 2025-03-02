import Newsfeed from './Newsfeed';
export default function Layout(){
    
    let visitors = 50;
    let rule = {border:"2px solid red", boxShadow:"3px 1px 1px black"}
    return (<div className="container">
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <img src="img/home-bg.jpg" className="img-fluid" style={rule}/>
                    </div>
                    <div className="col-md-4 offset-4 my-4">
                        <button className="btn btn-outline-danger col-12">Total visitor is {visitors + 10}</button>
                    </div>
                </div>
                <Newsfeed/>
                
            </div>
    );
}
