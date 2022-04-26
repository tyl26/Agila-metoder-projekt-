import { Link } from "react-router-dom";

function AllRoles() {
    return (
        <section>
            <Link to='/AlternativList'><button>Start</button></Link>

            <h1 className="title"> What are the roles?</h1>
            <p>There are three roles in scrum, the Product owner, Scrum Master and the development team.
                Each role have their purpose and responsibility.
            </p>

            <h3>Product owner</h3>
            <p>The Product Owner is the Team member who knows what the customer wants and the relative business value of those wants. He or she can then translate the customer’s wants and values back to the Scrum team.  The product owner is responsible for ensuring that expectations for the completed product are communicated and agreed upon.
                Here are some list of responsibilities for product owner</p>
            <ul>
                <li>1. Managing and prioritizing the product backlog</li>
                <li>2. Translating product managers strategies to tasks for development</li>
                <li>3. Learning the market and customers’ needs</li>
                <li>4. Serving as a liaison between product and development</li>
                <li>5. Staying accessible to development to answer questions</li>
            </ul>
            <h3>Scrum Master</h3>
            <p>The scrum master helps to facilitate scrum to the larger team by ensuring the scrum framework is followed. He/she is committed to the scrum values and practices, but should also remain flexible and open to opportunities for the team to improve their workflow. Is there to guide and help the team on track.

                Here are some list of responsibilities for Scrum Master</p>
            <ul>
                <li>1. Keep the team organized, on track, and focused on what matters.
                </li>
                <li>2. Serve as a bridge between product management and development.</li>
                <li>3. Clear obstacles and protect the team from distractions.</li>
                <li>4. Lead through influence and credibility</li>
            </ul>
            <h3>Development team</h3>
            <p>Development team members are responsible for designing and building the software products required by stakeholders.

                Among the key functions development team members perform are planning, testing, analysis, programming, and many other activities throughout the course of the project.
                The development team should be able to self-organize so they can make decisions to get work done.</p>

            <img className="devTeam" src="https://wac-cdn.atlassian.com/dam/jcr:f085fea0-5149-4b9a-9fe1-7e9fd32dc0da/Scrum-Development%20team-revised.png?cdnVersion=309" alt="" />

            <h5>In reality..</h5>
            <p>Individual Development Team members may have specialized skills and areas of focus, but accountability belongs to the Development Team as a whole. which means
                Development Team should work together without anything like titles or sub-team what could divide them. During Sprint Planning they need to estimate work considering all skills and knowledge in the team. If there are less experienced people in the team, others should teach them and help to develop all necessary skills.

                Here are some list of responsibilities for Development team
            </p>
            <ul>
                <li>1. Have daily standups meetings (15min tops)</li>
                <li>1. Perform Sprint Execution</li>
                <li>2. Inspect and Adapt</li>
                <li>3. Groom the Product Backlog</li>
                <li>4. Plan the Sprint:g</li>
                <li>5. Inspect and Adapt the Product and Process</li>

            </ul>



            <section className="btns">
                <Link to='/scrum'> <button>prev</button></Link>
                <Link to='/backlog'> <button>next</button></Link>

            </section>

        </section>
    );
}

export default AllRoles;