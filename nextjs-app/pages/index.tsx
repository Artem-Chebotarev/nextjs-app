import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Meta } from '@/app/utils/Meta'
import { TCard } from '@/app/data'

const inter = Inter({ subsets: ['latin'] })


interface HomeProps {
  cards: TCard[],
}

export default function Home(props: HomeProps) {
  const { cards }  = props;

  console.log(cards)
  return (
    <>
      <Meta title={'Главная'} description={'Описание страницы'}/>
      <main className={styles.main}>
        nunitodasdasdksafkldsaj kfjds afhdsjahf jkasdlfs
        NUNITOOOOOOO
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
  const response =  await fetch('http://localhost:3000/api/cards')
  const cards = await response.json();

  return {
    props: {
      cards
    },
    revalidate: 10,
  }
}
