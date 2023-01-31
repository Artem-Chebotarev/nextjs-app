import { CardItem } from "@/app/cards/CardItem";
import { TCard } from "@/app/data"
import { Meta } from "@/app/utils/Meta";
import { GetStaticProps } from "next"
import Link from "next/link";

interface CardProps {
    card: TCard,
}

const Card = (props: CardProps) => {
    const { card } = props;
    return (
        <>
            <Meta title={'Страница карточки'} description={'Описание карточки'}/>

            <main className='w-1/4 mx-auto mt-20'>
                <CardItem card={card}/>
                <Link href={'/'}>Back to home</Link>
            </main>
        </>
    )
}

export const getStaticPaths = async () => {
    try {
        const response =  await fetch('http://localhost:3000/api/cards')
        const cards = await response.json();

        const paths = cards.map((el: TCard) => ({ params: { id: el.id }}));

        return { paths, fallback: 'blocking'}
    } catch (error) {
        return { paths: [], fallback: false}
    }
    
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        if (params && params.id) {
            const response =  await fetch(`http://localhost:3000/api/cards/${params.id}`)
            const card = await response.json();
          
            return {
              props: {
                card
              },
              revalidate: 10,
            }
        }
    
        return {
            props: { error: true },
        };
    } catch(error) {
        return {
          notFound: true,
        }
    }
}

export default Card;