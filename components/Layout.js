import NavBar from "./NavBar";

export default function Layout({ children }) {
    return(
        <div>
            <NavBar />
            <main>
                {children}
            </main>

            <style jsx>{`
                div {
                    min-height: 100vh;
                    background-color: snow;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }
            `}</style>

            <style global jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: Verdana;
                }
            `}</style>
        </div>
    )
}