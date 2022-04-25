import { Link } from "react-router-dom";

function ScrumArtirfacts() {
    return (
        <section>
            <h1>What is Scrum Artefacts?</h1>

            <p>Scrum’s artifacts represent work or value. They are designed to maximize transparency of key information. Thus, everyone inspecting them has the same basis for adaptation.

                Each artifact contains a commitment to ensure it provides information that enhances transparency and focus against which progress can be measured:
                <ul>
                <li> For the Product Backlog it is the Product Goal. This is where the " what to do"</li>
                    <li> For the Sprint Backlog it is the Sprint Goal. This is where the " what to take now + how"</li>
                    <li> For the Increment it is the Definition of Done.  This is where the " what gets done"
                    </li>
                </ul>

                These commitments exist to reinforce empiricism and the Scrum values for the Scrum Team and their stakeholders.</p>

            <img className="artifactsImg" src="https://images.prismic.io/superpupertest/5c9293dd-c287-46b8-8aa5-32552a021247_Frame+2569.png?auto=compress,format" alt="scrum artifacts" />

            <section className="btns">
                <Link to='/fourEvents'> <button>&#171;</button></Link>
                {/* <Link to='/sprint'> <button>&#187;</button></Link> */}
            </section>
        </section>
    );
}

export default ScrumArtirfacts;