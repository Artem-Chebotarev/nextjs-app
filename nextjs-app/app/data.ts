export type TCard = {
    id: string,
    balance: number,
    number: string,
    color: string,
}

export const cards: TCard[] = [
    {
        id: '1',
        balance: 123_000,
        number: '1234 4567 8945 0987',
        color: 'black',
    },
    {
        id: '2',
        balance: 345_123_000,
        number: '5812 3333 8945 0987',
        color: '#0095FF',
    }
];