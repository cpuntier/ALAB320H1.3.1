function Score(props){
//    console.log(props.scores)
    return(
        <div>

        {
            props.scores.map((score) => {
                console.log(score);
                return(
                    <div>
                        <p>{score.date}</p>
                        <p>{score.score}</p>
                    </div>
                )
            }

            )
            
        }
                </div>

)
}

export default Score;