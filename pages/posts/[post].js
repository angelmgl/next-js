import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();

    return(
        <div>
            <p>Post: {router.query.post}</p>
        </div>
    )
}