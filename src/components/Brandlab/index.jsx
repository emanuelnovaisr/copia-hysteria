import { Card } from '../Card'
import './styles.scss'


export const Brandlab = () => {

    const cards = [
        { title1: 'Del Vale', title2: 'Plante Amor', img: 'https://preview.hysteria.etc.br/wp-content/uploads/2023/03/DELVALE-1.png' },
        { title1: 'Natura', title2: 'Chronos', img: 'https://preview.hysteria.etc.br/wp-content/uploads/2023/03/NATURA-CHRONOS-e1684238005562-1.png' },
        { title1: 'Neosaldina', title2: 'Chama a Neosa', img: 'https://preview.hysteria.etc.br/wp-content/uploads/2023/03/NEOSALDINA-1.png' },
        { title1: 'Next', title2: 'Fernanda, Gabee e Talita', img: 'https://preview.hysteria.etc.br/wp-content/uploads/2023/03/NEXT-1.jpeg' },
        { title1: 'O Boticário', title2: '“Lôra” o que?', img: 'https://preview.hysteria.etc.br/wp-content/uploads/2023/03/BOTICARIO-1.jpeg' },
        { title1: 'TikTok', title2: 'Sou Dona', img: 'https://preview.hysteria.etc.br/wp-content/uploads/2023/03/TIKTOK-e1684238056298-1.jpeg' }
    ]

    return (
        <div className='brandlab'>
            <div className='cards'>
                {cards.map((card, index) => (
                    <Card card={card} index={index % 2} />
                ))}
            </div>
        </div>
    )
}