import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fontColor};
    min-height: 100vh;
`;

export default function Layout({ children }) {
    return (
        <Container>
            <NavBar />
            <main>{children}</main>

            <style jsx>{`
                div {
                    min-height: 100vh;
                    background-color: snow;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
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
                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }
            `}</style>
        </Container>
    );
}
