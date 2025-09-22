import { useRouteError } from "react-router";

export default function RoutingError() {
    const error: Object = useRouteError();
    console.log(error)
    return(
        <>
        <h3>Something went wrong!</h3>
        <div>{error.data}</div>
        </>
    );
}