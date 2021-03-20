import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';

export default function Post() {
    const router = useRouter();

    return(
        <div>
            <NavBar />
            <h2>Post details</h2>
            <p>Post: {router.query.id}</p>
        </div>
    )
}