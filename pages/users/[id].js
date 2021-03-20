import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';

export default function User() {
    const router = useRouter();
    //console.log(router)

    return(
        <div>
            <NavBar />
            <h2>User details</h2>
            <p>User: {router.query.id}</p>
        </div>
    )
}