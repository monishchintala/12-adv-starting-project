import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PageContent'

const ErrorPage = () => {
    const error = useRouteError();

    let title = "An Error Occured";
    let msg = "Something went wrong";

    if (error.status === 500) {
        msg = JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        title = 'Not found!'
        msg = 'Could not find resource or page';
    }
    return <PageContent title={title}>
        <p>{msg}</p>
    </PageContent>
}

export default ErrorPage