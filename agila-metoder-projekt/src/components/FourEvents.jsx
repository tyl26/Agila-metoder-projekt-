import { Link } from "react-router-dom";

function Events() {
    return (
        <section>
            <h1> What are the four sprint events?</h1>

            <h5>Sprint Planning</h5>
            <p>Sprint planning is an event in scrum that kicks off the sprint.
                The purpose of sprint planning is to define what can be delivered in the sprint and how that work will be achieved.
                Sprint planning is done in collaboration with the whole scrum team.   Sprint planning should be constrained no more than two hours for each week of the sprint.
                So, for example, the sprint planning meeting for a two-week sprint would be no longer than four hours. It is Scrum masters job to make sure the meeting goes smoothly.</p>

            <h5> Daily Scrum</h5>
            <p>The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work.
                The Daily Scrum is a 15-minute event for the Developers of the Scrum Team.
                To reduce complexity, it is held at the same time and place every working day of the Sprint.
                If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.

                The Developers can select whatever structure and techniques they want,
                as long as their Daily Scrum focuses on progress toward the Sprint Goal and produces an actionable plan for the next day of work.
                This creates focus and improves self-management.

                Daily Scrums improve communications, identify impediments, promote quick decision-making, and consequently eliminate the need for other meetings.

                The Daily Scrum is not the only time Developers are allowed to adjust their plan.
                They often meet throughout the day for more detailed discussions about adapting or re-planning the rest of the Sprint’s work.</p>

            <h5>Sprint Review</h5>
            <p>The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.
                The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.
                During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment.
                Based on this information, attendees collaborate on what to do next.
                The Product Backlog may also be adjusted to meet new opportunities. The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation.
                The Sprint Review is the second to last event of the Sprint and is timeboxed to a maximum of four hours for a one-month Sprint.
                For shorter Sprints, the event is usually shorter.</p>

            <h5>Sprint Retrospective</h5>
            <p>The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness.
                The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done.
                Inspected elements often vary with the domain of work. Assumptions that led them astray are identified and their origins explored.
                The Scrum Team discusses what went well during the Sprint, what problems it encountered, and how those problems were (or were not) solved.
                The Scrum Team identifies the most helpful changes to improve its effectiveness.
                The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.
                The Sprint Retrospective concludes the Sprint. It is timeboxed to a maximum of three hours for a one-month Sprint.
                For shorter Sprints, the event is usually shorter.</p>

            <section className="btns">
                <Link to='/sprint'> <button>&#171;</button></Link>
                <Link to='/artifacts'> <button>&#187;</button></Link>
            </section>

        </section>
    );
}

export default Events;