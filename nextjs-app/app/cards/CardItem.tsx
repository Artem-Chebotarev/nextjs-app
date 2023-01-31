import Image from "next/image"
import Link from "next/link";
import { TCard } from "../data"

interface CardItemProps {
    card: TCard,
}

export const CardItem = (props: CardItemProps) => {
    const { card } = props;

    return (
        <div 
            className='rounded-xl p-5 mb-3 text-white w-3/4 mx-auto cursor-pointer' 
            style={{
                backgroundColor: card.color
            }}
        >
            <Link href={`/card/${card.id}`}>
                <Image 
                    src={'https://www.seekpng.com/png/full/794-7948448_mastercard-mastercard-logo-grayscale.png'} 
                    width={40}
                    height={30}
                    alt='MasterCard Logo'
                />
                <div className='opacity-50 mt-6 mb-1' style={{ fontSize: 11 }}>Current Balance</div>
                <div>{card.balance.toLocaleString('ru-RU', {
                    currency: 'RUB',
                    style: 'currency',
                })}</div>
                <div className='mt-6 text-xs'>{card.number}</div> 
            </Link>
            
        </div>
    )
}