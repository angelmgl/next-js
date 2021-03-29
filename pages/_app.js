import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";

const Button = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 200;
`

const MyApp = ({ Component, pageProps }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [dark, setDark] = useState(false);
    const theme = dark ? darkTheme : lightTheme;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Button onClick={() => setDark(!dark)}>CHANGE MODE</Button>
            {isMounted && <Component {...pageProps} />}
        </ThemeProvider>
    );
};

export default MyApp;
