import { Inter } from '@next/font/google'
import { Meta } from '@/app/utils/Meta'
import { TCard } from '@/app/data'
import { CardItem } from '@/app/cards/CardItem'

const inter = Inter({ subsets: ['latin'] })


interface HomeProps {
  cards: TCard[],
}

export default function Home(props: HomeProps) {
  const { cards }  = props;

  return (
    <>
      <Meta title={'Главная'} description={'Описание страницы'}/>

      <main className='w-1/4 mx-auto mt-20'>
        {cards.map((elem) => (
          <CardItem key={elem.id} card={elem}/>
        ))}
      </main>
    </>
  )
}

/**
 * на каждый запрос юзера идет запрос на сервер
 * не оптимально в плане нагрузке на сервер, поэтому getServerSideProps не актуально
 * вместо этого используем getStaticProps
 */
export const getStaticProps = async () => {
  try {
      const response =  await fetch('http://localhost:3000/api/cards')
      const cards = await response.json();
    
      return {
        props: {
          cards
        },
        revalidate: 10,
      }
  } catch(error) {
      return {
        notFound: true,
      }
  }
  
}
