import Head from "next/head";

export default function CustomHead({ title, description, keywords }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="robots" content="index" />
        </Head>
    );
}
