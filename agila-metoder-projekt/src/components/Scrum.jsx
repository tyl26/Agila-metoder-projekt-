import { Link } from "react-router-dom";

function Scrum() {
    return (
        <section>
            <h1 className="title"> What is Scrum?</h1>

            <p className="para" >
                Scrum is a framework for project management that emphasizes teamwork, accountability and iterative progress toward a well-defined goal. The framework begins with a simple premise: Start with what can be seen or known. After that, track the progress and tweak, as necessary.
                The Scrum framework includes Scrum Teams and their associated roles, events, artifacts, and rules. Each element of the framework serves a specific purpose and is essential to Scrum’s success and usage.
            </p>

            <img className="scrumImg" src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2021-01/scrumorg-scrum-framework-3000.png" alt="scrum process" />

            <section className="">
                <Link to='roles'> <button>&#171;</button></Link>
                <Link to='/AlternativList'> <button>&#187;</button></Link>
                
            </section>
        </section>

    );
}

export default Scrum;