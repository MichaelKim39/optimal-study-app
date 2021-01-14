import { Spinner } from 'reactstrap';

const LoadingIndicator = ({ className }) => {
    return (
        <Spinner size='md' color='light' className={className} />
    )
}

export default LoadingIndicator