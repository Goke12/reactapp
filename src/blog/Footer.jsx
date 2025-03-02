import { useContext } from "react";
import SiteContext from "./SiteContext";


let Footer = ({author})=>{
    //let sitedeets = useContext(SiteContext);//sitedeets will contains the variable site passed as value from <SiteContext.Provider/>
    //option 2 of retreiving the shared data - destructuring
    let {createdon,version} = useContext(SiteContext);
    //rather than writing sitedeets.createdon, we can pick it directly as above
    //console.log(sitedeets);
    return <footer className="border-top">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
          <div className="small text-center text-muted fst-italic">
            Copyright © {author} Date: {createdon} Version: {version}
          </div>
        </div>
      </div>
    </div>
  </footer>
}
export default Footer