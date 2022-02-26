import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    return <div className="home container is-fluid pt-5">
        <h1>Hello to Alive Types with Typescript!</h1>

        <div className="row">
            <div className="column is-offset-one-quarter is-half">
                <figure className="image is-2by1">
                    <img src={`${import.meta.env.BASE_URL}/images/wallpaper.png`} alt='logo' />
                </figure>
            </div>
        </div>

        <h4>
            Go to the <Link to="/orders">sample</Link> page.
        </h4>

        <h4>
            The repository is hosted on<br /><a href="https://github.com/Puppo/alive-types" target="_blank" rel="noreferrer">https://github.com/Puppo/alive-types</a>.
        </h4>
        <h4>
            My Typescript Series on dev.to<br /><a href="https://dev.to/this-is-learning/series/11213" target="_blank" rel="noreferrer">https://dev.to/this-is-learning/series/11213</a>.
        </h4>
    </div>
}