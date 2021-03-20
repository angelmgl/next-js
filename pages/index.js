import Layout from '../components/Layout';
import CustomHead from '../components/CustomHead';
import Title from '../components/Title';

export default function Home() {
    return(
        <Layout>
            <CustomHead title="Nextjs App"
                description="My first app made in Nextjs"
                keywords={['Nextjs', 'React', 'Javascript']} />
            <Title>Welcome to the Home page!</Title>
            <p>This is my first webpage made in Next js.</p>
        </Layout>
    )
}