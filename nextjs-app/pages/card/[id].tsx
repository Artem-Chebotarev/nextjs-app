import { TCard } from "@/app/data"
import { GetStaticProps } from "next"

interface CardProps {
    card: TCard,
}

const Card = (props: CardProps) => {
    const { card } = props;
    return <div>{card.number}</div>
}

export const getStaticPaths = async () => {
    const response =  await fetch('http://localhost:3000/api/cards')
    const cards = await response.json();

    const paths = cards.map((el: TCard) => ({ params: { id: el.id }}));

    return { paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
}

export default Card;