import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/users"><a>Users</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            {/*ruta dinámica usa la prop as
            <Link href="/users/[id]" as={`/users/${'x'}`}>
                <a>User x</a>
            </Link>*/}

            <style jsx>{`
                nav {
                    width: 100%;
                    background-color: #4972fb;
                    padding: 10px 0;
                    display: flex;
                    justify-content: center;
                }
                a {
                    color: white;
                    padding: 0 10px;
                    text-decoration: none;
                }
                a:hover {
                    color: #aaf;
                }
            `}</style>
        </nav>
    );
}