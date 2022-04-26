import { Link } from "react-router-dom";

function EndPage() {
    return (
        <section>
            <Link to='/AlternativList'><button>Start</button></Link>

            <h1>Congrats!</h1>
            <h5>You made it to the end!</h5>

            <h6>If you want to challange/ test yourself, you can take a quiz her!</h6>
            <a className="quiz" href="https://basicversity.com/quiz/agile-scrum-methodology"> Take scrum quiz!</a>
            <section className="btns" >
                <Link to='/agileest'> <button>prev</button></Link>
            </section>
        </section>
    );
}

export default EndPage;