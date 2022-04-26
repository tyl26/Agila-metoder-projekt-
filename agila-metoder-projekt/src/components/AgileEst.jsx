import { Link } from "react-router-dom";

function AgileEst() {
    return (
        <section>
            <Link to='/AlternativList'><button>Start</button></Link>

            <h1>What is Agile Estimation?</h1>
            <p>
                Agile estimation is the process for estimating the effort required to complete a prioritized task in the product backlog. This effort is usually measured with respect to the time it will take to complete that task, which, in turn, leads to accurate sprint planning.
                Whether the team is developing a product or developing a project, we all need to answer “When will we be able to complete it?”, or to what extent we can do it at a certain point in time, so like the traditional development model, we need to estimate the amount of work before we start the project.</p>

            <p>Agile emphasizes estimating a story in Story Point instead of hours.</p>

            <h6>Story point</h6>
            <p>Story point is a number that helps estimate the difficulty of building a user story successfully.
                This difficulty could be anything related to the complexities, risks, and efforts involved.</p>

            <p>You don’t give an exact number explaining how complex the story is and how long it’ll take to develop – you give a rough “estimate”.

                We are good at comparing size, so estimating a story using Fibonacci series sequence (0, 1, 2, 3, 5, 8, 13, 20, 40, and 100)
                gives more clarity of its complexity and relative sizing in terms of development.
                It is helpful to have a set of stories nearby to make a comparison and recommendation to set priority.</p>

            <img className="storyPoints" src="https://www.actitime.com/wp-content/uploads/2020/06/relative-point-values-story-point-estimation.png" alt="story points" />

            <h6>Agile estimations are great usin for: </h6>
            <ul>
                <li>Making teams accountable for deliverables
                </li>

                <li>Causing discipline across the Agile team
                </li>

                <li>Predicting the approximate time it will take to finish a project
                </li>

                <li> Allowing better sprint management</li>

                <li>Improving team productivity
                </li>

            </ul>
            <section className="btns" >

                <Link to='/artifacts'> <button>prev</button></Link>
                <Link to='/EndPage'> <button>next</button></Link>
            </section>
        </section>
    );
}

export default AgileEst;