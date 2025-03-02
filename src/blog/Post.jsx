import { useContext } from "react";
import DefaultPost from "./DefaultPost";
import SiteContext from "./SiteContext";


let Post = ({author})=>{
    let {createdon,version} = useContext(SiteContext);
    return  <> 
    <DefaultPost mainauthor={author}/> 
  {/* Post preview*/}
  <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">
        I believe every human has a finite number of heartbeats. I don't
        intend to waste any of mine.
      </h2>
    </a>
    <p className="post-meta">
      Posted by
      <a href="#!"> {author} </a>
      on {createdon} {version}
    </p>
  </div>
  {/* Divider*/}
  <hr className="my-4" />
  {/* Post preview*/}
  <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">
        Science has not yet mastered prophecy
      </h2>
      <h3 className="post-subtitle">
        We predict too much for the next year and yet far too little for
        the next ten.
      </h3>
    </a>
    <p className="post-meta">
      Posted by
      <a href="#!"> {author} </a>
      on {createdon} {version}
    </p>
  </div>
  {/* Divider*/}
  <hr className="my-4" />
  {/* Post preview*/}
  <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">Failure is not an option</h2>
      <h3 className="post-subtitle">
        Many say exploration is part of our destiny, but it’s actually our
        duty to future generations.
      </h3>
    </a>
    <p className="post-meta">
      Posted by
      <a href="#!"> {author} </a>
      on {createdon} {version}
    </p>
  </div>
  {/* Divider*/}
  <hr className="my-4" />
  </>
}

export default Post