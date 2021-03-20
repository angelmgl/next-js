import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export default function User() {
    const router = useRouter();
    //console.log(router)

    return(
        <Layout>
            <Title>User details</Title>
            <p>User: {router.query.id}</p>
        </Layout>
    )
}