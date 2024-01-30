import Score from "./Score"

function Learner(props){
    return(
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.bio}</p>
            <Score scores = {props.data.scores}/>
        </div>
    )
}

export default Learner