import { Link } from "react-router-dom";

function AlternativList() {
    return (
        <section>
            <h1>What do you want to learn about?</h1>

            <button>Start Guide from the beginning</button>

            <Link to='/scrum'>
                <button>What is Scrum?</button>
            </Link>
            <Link to='/Allroles'>
                <button>All Roles</button>
            </Link>
            <Link to='/Backlog'>
                <button>Backlog</button>
            </Link>
            <Link to='/sprint'>
                <button>Sprint</button>
            </Link>
            <Link to='/Events'>
                <button>All for events</button>
            </Link>
            <Link to='/agileest'>
                <button>Agil Estamation</button>
            </Link>
            <Link to='/artefacts'>
                <button>Scrum Artefacts</button>
            </Link>
        </section>
    );
}

export default AlternativList;