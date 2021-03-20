import { useRouter } from 'next/router';

export default function User() {
    const router = useRouter();
    //console.log(router)

    return(
        <div>
            <p>User: {router.query.user}</p>
        </div>
    )
}