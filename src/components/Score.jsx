function Score(props) {
    //    console.log(props.scores)
    return (
        <div style={{borderLeft: "solid black 1px"}}>

            {
                props.scores.map((score) => {
                    console.log(score);
                    return (
                        <div>
                            <p class = "score">Test Date: {score.date}</p>
                            <p class = "score">Test Score: {score.score}</p>
                        </div>
                    )
                }

                )

            }
        </div>

    )
}

export default Score;