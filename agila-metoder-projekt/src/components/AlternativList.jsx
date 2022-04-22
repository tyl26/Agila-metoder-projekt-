import { Link } from "react-router-dom";

function AlternativList() {
    return (
        <section>
            <h1>What do you want to learn about?</h1>

            <button>Start Guide from the beginning</button>

            <Link to='/scrum'>
                <button>What is Scrum?</button>
            </Link>
            <button>All Roles</button>
            <button>Backlog</button>
            <button>Sprint</button>
            <button>All for events</button>
            <button>Agil Estamation</button>
            <button>Scrum Artefacts</button>
        </section>
    );
}

export default AlternativList;