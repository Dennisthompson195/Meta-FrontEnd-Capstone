
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="fourOFour">
      <h2>404 page not found</h2>
      <p>
        <Link className="link" to="/">Go back to the home page</Link>
      </p>
    </div>
  );
}

export { NoMatch };