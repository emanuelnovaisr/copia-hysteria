import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated } from 'react-spring';
import { ProgressBar } from '../ProgressBar';

export const Slider = ({ setShowSecondPart }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [slides, setSlides] = useState([])
  const animations = ['center', 'down', 'left', 'right']
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    let position = window.pageYOffset
    if (position > 900 && position < 1299) {
      initialAnimation()
      setScrollPosition(position)
    } else {
      setScrollPosition(0)
    }

    if (position > 1299) {
      setShowSecondPart(true)
      setLoading(false)
    } else {
      setShowSecondPart(false)
    }
  }

  const initialAnimation = () => {
    setLoading(true)
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }

  useEffect(() => {
    const response = [
      { id: '1', src: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ABRE-ALAS-01.jpg', title: 'Abre Alas', subtitle: 'Serie Documental', stream: 'Youtube Originals' },
      { id: '2', src: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DVFMS-02.jpg', title: 'Abre Alas', subtitle: 'Serie', stream: 'TV' },
      { id: '3', src: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/DESNUDE-03.jpg', title: 'Desnude', subtitle: 'Documentario', stream: 'Netflix' },
      { id: '4', src: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/MULHERES-NA-LUTA-03.jpg', title: 'Mulheres na luta', subtitle: 'Documentario', stream: 'Cinema' },
      { id: '5', src: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/TAPA-NA-CARA-01.jpg', title: 'Tapa na cara', subtitle: 'Serie', stream: 'TV' },
      { id: '6', src: 'https://hysteria.uxdir.com/wp-content/uploads/2023/03/ZODIACA-01.jpg', title: 'Abre Alas', subtitle: 'Serie', stream: 'TV' },
    ]

    response.map((slide) => {
      let animationNumber = Math.floor(Math.random() * animations.length)
      slide.animation = animations[animationNumber]
    })
    setSlides(response)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const styles = useSpring({
    width: `${(scrollPosition / 100) * 100}%`,
    height: `${(scrollPosition / 50) * 100}%`,
    marginTop: `-${scrollPosition / 20}px`,
  })

  return (
    <div className="slider">
      <Swiper
        loop={true}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        style={{
          transform: `translateY(${scrollPosition / 50}px)`
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className='slide'>
              <div className={`circle big ${slide.animation} ${activeSlideIndex === index ? 'active' : ''} `} />
              <div className={`circle small ${slide.animation} ${activeSlideIndex === index ? 'active' : ''} `} />
              <img src={slide.src} className='item' alt={slide.id} />
              <div className='info'>
                <div className='subtitle' >
                  <p className={`${activeSlideIndex === index ? 'fade-down active' : 'fade-down'}`}>{slide.subtitle}</p>
                  <span className={`fade-down-span ${activeSlideIndex === index ? 'active' : ''}`}>{slide.stream}</span>
                </div>
                <h1 className={`fade-up ${activeSlideIndex === index ? 'active' : ''}`}>{slide.title}</h1>
                <button className={`fade-grow ${activeSlideIndex === index ? 'active' : ''}`}>Assistir</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {loading &&
          <div className="loading ">
            <ProgressBar progress={progress} color={'white'} />
            <animated.div style={styles} className="ball" />
          </div>
        }
      </Swiper>
    </div>
  )
}
