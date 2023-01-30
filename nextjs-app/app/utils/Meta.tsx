import Head from "next/head"

interface MetaProps {
    title: string,
    description: string,
}

export const Meta = (props: MetaProps) => {
    const {title, description} = props;
    
    return <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico" />
    </Head>
}