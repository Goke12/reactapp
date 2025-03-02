import Nav from "./Nav";
import Header from "./Header";
import Post from "./Post";
import Footer from "./Footer";
import Counter from "./Counter";
import Writers from "./Writers";
import Like from "./Like"; 
import LikeState from "./Likestate";
import Ads from "./Ads";
import Meal from "./Meal";

//bring in the context
import SiteContext from "./SiteContext";
export default function Page(){
  function greetings(){
    alert("You are welcome home!");
  }
  const guests = 0; //supposing we got from an api
  const bloggers = ["Janet","Smith","Kay"];
  const author = "Moat Academy Remote Class"; //to demo props drilling. Variable was created here so that it can be shared among any component that needs it //Post Footer
  const site = {createdon:"March 1st,2025", version:"1.0"}//to demo passing variables to child component using context API instead of props drilling...
    return <>
    <SiteContext.Provider value={site}>
    
  <Nav/>
  <Header/>
  <div className="container px-4 px-lg-5">
    {/* <Counter guests={guests} greetingsFxn ={greetings}/> */}
    {/* <Writers bloggers={bloggers}/> */}
    <Meal/>
    <div className="row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10 col-lg-8 col-xl-7">
          {/* <Post author={author}/> */}
          {/* <Like/> */}
          {/* <LikeState/> */}
          
        
      </div>
    </div>
    <Ads/>
  </div>
  
  
  <Footer author={author}/>
  </SiteContext.Provider>
</>

    
    
}