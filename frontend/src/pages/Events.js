import { Link } from "react-router-dom"

const Dummy_Events = [
    { id: "e1", title: "Some event" },
    { id: "e2", title: "Some event 1" },
    { id: "e3", title: "Some event 2" },
]

const EventsPage = () => {
    return (
        <>
            <h1>My Events Page</h1>
            <ul>
                {
                    Dummy_Events.map(eve => (
                        <li key={eve.id}>
                            <Link to={eve.id}>{eve.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default EventsPage