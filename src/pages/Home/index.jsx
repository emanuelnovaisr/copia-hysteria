import { useState, useEffect, useRef } from 'react'
import './styles.scss'
import { Initial } from '../../components/Initial';
import { Title } from '../../components/Title'
import { Slider } from '../../components/Slider';
import { About } from '../../components/About';
import './animations.scss'
import { Brandlab } from '../../components/Brandlab';


export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [showSecondPart, setShowSecondPart] = useState(false)

    useEffect(() => {
        const handleScroll = () => {        
            const position = window.pageYOffset
            setScrollPosition(position)
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className='home'>
            <Initial/>
            <Title text={'Projetos'} scrollPosition={scrollPosition} />
            <Slider setShowSecondPart={setShowSecondPart}/>
            {showSecondPart &&
                <>
                    <About showAnimations={showSecondPart} />
                    <Title text={'Brandlab'} scrollPosition={scrollPosition} />
                    <Brandlab/>
                </>
            }
        </div>
    )
}