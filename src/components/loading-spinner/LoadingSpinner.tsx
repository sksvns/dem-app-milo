import { CircularProgress } from '@mui/material';
import "./loadingSpinner.css"

type LoadingProps = {
    loading: boolean;
}

const LoadingSpinner = ({ loading }: LoadingProps) => {
    return (
        <div className='loading-conatiner'>
            {loading && <CircularProgress />}
        </div>
    )
}

export default LoadingSpinner;