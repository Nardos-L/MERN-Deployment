import { Link } from "@reach/router";
const NotFound = (props) => {
    return <div>We're sorry, but we could not find the pet you are looking for. Would you like to add this pet to our database?
        <Link to="/petss/new">Add a Pet</Link>
    </div>;
};

export default NotFound;