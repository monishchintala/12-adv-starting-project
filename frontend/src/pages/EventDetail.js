import { useParams } from "react-router-dom";

const EventDetailPage = () => {
    const params = useParams();
    const id = params.eventId
    return <>
        <h1>My EventDetail Page</h1>
        <p>{id}</p>
    </>
}

export default EventDetailPage