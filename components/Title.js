export default function Title({ children }) {
    return(
        <h1>
            {children}

            <style jsx>{`
                h1 {
                    font-size: 3em;
                    text-align: center;
                    margin-bottom: 10px;
                }
            `}</style>
        </h1>
    )
}