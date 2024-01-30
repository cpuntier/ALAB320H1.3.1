import Score from "./Score"

function Learner(props) {
    return (
        <div style={{ display: "flex", border: "solid red 1px" }}>
            <div style = {{width: "500px"}}>
                <b style={{ fontSize: "16pt" }}>{props.data.name}</b>
                <p>{props.data.bio}</p>
            </div>
            <Score scores={props.data.scores} />

        </div>
    )
}

export default Learner