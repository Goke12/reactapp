let Counter = (props) =>{//props is an object automatically created to receive any property that may be passed to this component
        
    return <div className="row">
        <div className="col-md-6 offset-md-3">
            <button className="btn btn-outline-danger col-12" onClick={props.greetingsFxn}>{props.guests} Visitors Online</button>
            {props.guests > 10? <span>Heavy Traffic</span> : <span>Low Traffic</span>}
            {props.guests > 10 && <button>Developed by Us</button>}


        </div>

    </div>
    
}
export default Counter;