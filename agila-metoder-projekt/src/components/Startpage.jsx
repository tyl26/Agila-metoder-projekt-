import { Link } from "react-router-dom";

function StartPage() {
    return (
        <div className="start">
            <section>
                <h1 className="welcomeIntro">Learn about Scrum</h1>
                <img className="startImg" src="https://cdni.iconscout.com/illustration/premium/thumb/scrum-meeting-4719778-3920253.png" />

            </section>

            <Link to="/AlternativList">
            <button>Get Learning</button>
            </Link>

        </div>
    );
}

export default StartPage;