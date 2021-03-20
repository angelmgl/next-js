import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export default function User({ user }) {
    const router = useRouter();
    //console.log(router)

    return(
        <Layout>
            <Title>User details</Title>
            <p>User: {router.query.id}</p>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}