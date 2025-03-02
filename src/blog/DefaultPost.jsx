import { useContext } from "react";
import SiteContext from "./SiteContext";
export default function DefaultPost({mainauthor}){
    //we used props drilling to pass props from the parent component to the child and then to its own child etc..
    let {createdon,version} = useContext(SiteContext);
   return <>
    
    <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">
        Man must explore, and this is exploration at its greatest
      </h2>
      <h3 className="post-subtitle">
        Problems look mighty small from 150 miles up
      </h3>
    </a>
    <p className="post-meta">
      Posted by
      <a href="#!"> {mainauthor} </a>
      on {createdon} {version}
    </p>
  </div>
  {/* Divider*/}
  <hr className="my-4" />
  </>
}