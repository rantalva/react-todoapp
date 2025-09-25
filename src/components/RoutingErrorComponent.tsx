import { Button } from "@mui/material";
import { useRouteError, useNavigate, isRouteErrorResponse } from "react-router";

export default function RoutingError() {
const navigate = useNavigate();
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.data}</p>
            <Button 
                onClick={() => navigate(-1)}>&larr; Go back
            </Button>
        </div> // https://stackoverflow.com/questions/75944820/whats-the-correct-type-for-error-in-userouteerror-from-react-router-dom
    );
};