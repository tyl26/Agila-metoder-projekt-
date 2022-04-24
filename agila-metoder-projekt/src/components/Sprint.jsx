import { Link } from "react-router-dom";

function Sprint() {
    return (
        <section>
            <h1>what is sprint in scrum?</h1>
            <p>Sprint is a short timebox when the team work to complete a certain set amount of work from backlog. 
                Sprint are fixed leght events of one month or less. 
                In ohter words sprint is where you break down big and complex projects into bite-sized pieces.
                Which makes thing more manageable and alow the team work more faster while mainting the great quality.
                Sprint belong to one of the fove events in scrum, However sprint has a special case, where sprint is container 
                where the remaining four events happens within the sprint.   </p>
                 <img className="sprintImg" src="https://turboscrum.com/wp-content/uploads/2021/10/The-Five-Scrum-Events.png" alt="sprint Img" />

                 <h6>See next page to read the remaining four events.</h6>

                 <section className="btns">
                <Link to='/backlog'> <button>&#171;</button></Link>
                <Link to='/fourEvents'> <button>&#187;</button></Link>
            </section>
        </section>
    );
}

export default Sprint;