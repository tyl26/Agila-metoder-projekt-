import { Link } from "react-router-dom";

function Backlog() {
    return (
        <section>
            <h1 className="title"> What is Backlog?</h1>




            <p>Backlog in scrum is very important. It is a priotize list of work for the development team to follow. It is like a to do list.
                The most Important items are shown at the top of the product baklog so the team knows what to deliver first.
                Development team doesn't work through the backlog at the product owner's pace and the product owner isn't
                pushing work to the development team. The development team will intstead pull work from the backlog.</p>

            <p>When the backlog is build, it is important to regularly maintain it to keep pace with the program. The backlog is build by product owner, he/she should
                then review the backlog before eacg iteration planning meeting to make sure that the prioritization is correct and the feedback
                from last iteration has been incorporated. A regular review of the backlog can often be called "backlog groomig" or some use the term backlog refinement  </p>

            <p>It is not a list of unchangeable tasks, and it often evolves over time. For example, if there is a change in the business environment, marketing conditions or technical demands, the product backlog will reflect those changes.
                Product backlogs are usually represented using a scrum board.
            </p>

            <h2>The product backlog is made up of three different types of items.</h2>

            <h6>Stories:</h6> <p> which are high-level descriptions of a feature, told from the perspective of the end-user of the product. </p>
            <h6>Bugs:</h6>  <p>are problems that arise that the product owner wants to be fixed. </p>
            <h6>Tasks:</h6> <p> which are assigned to the scrum team to complete.</p>

            <p>
                The backlog grows as the product is being built.
                When changes are added they can include more detail, estimates or a change in priority.
                The product owner and the team are regularly working on refining the product backlog. This can occur at any time.</p>


            <section className="btns">
                <Link to='/roles'> <button>&#171;</button></Link>
                <Link to='/sprint'> <button>&#187;</button></Link>
            </section>
        </section>
    );
}



export default Backlog;