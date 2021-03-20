import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export default function Posts() {
    const [ posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const newPosts = await res.json();
            setPosts(newPosts);
        };

        fetchPosts();
    }, []);

    return(
        <Layout>
            <Title>Posts page</Title>
            <div>
                {posts.map(post => {
                    return(
                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
                            <a>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </Layout>
    )
}