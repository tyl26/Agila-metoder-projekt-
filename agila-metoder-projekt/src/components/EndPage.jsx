import { Link } from "react-router-dom";

function EndPage() {
    return (
        <section>
            <Link to='/AlternativList'><button>Start</button></Link>

            <h1>Congrats!</h1>
            <h5>You made it to the end!</h5>

            <h6>If you want to challange/ test yourself, you can take a quiz her!</h6>
            <a href="https://basicversity.com/quiz/agile-scrum-methodology"> Take scrum quiz!</a>

            <Link to='/agileest'> <button>&#171;</button></Link>

        </section>
    );
}

export default EndPage;