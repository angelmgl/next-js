import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export default function Post() {
    const router = useRouter();

    return(
        <Layout>
            <Title>Post details</Title>
            <p>Post: {router.query.id}</p>
        </Layout>
    )
}