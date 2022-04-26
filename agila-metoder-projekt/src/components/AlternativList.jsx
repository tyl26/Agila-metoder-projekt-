import { Link } from "react-router-dom";

function AlternativList() {
    return (
        <section>
            <h1>What do you want to learn about?</h1>


            <section className="AltBtns">
                <Link to='/scrum'>
                    <button>Start Guide from the beginning</button>
                </Link>
                <Link to='/scrum'>
                    <button>What is Scrum?</button>
                </Link>
                <Link to='/roles'>
                    <button>What are the roles?</button>
                </Link>
                <Link to='/backlog'>
                    <button>What is Backlog?</button>
                </Link>
                <Link to='/sprint'>
                    <button>What is Sprint?</button>
                </Link>
                <Link to='/fourEvents'>
                    <button>All four events</button>
                </Link>
                <Link to='/artifacts'>
                    <button>Scrum Artefacts</button>
                </Link>
                <Link to='/agileest'>
                    <button>Agil Estamation</button>
                </Link>
                <Link to='/EndPage'>
                    <button>Take a quiz!</button>
                </Link>
            </section>
        </section >
    );
}

export default AlternativList;