import React, { useEffect, useState } from 'react';
import './styles.scss'
import { ProgressBar } from '../ProgressBar';

export const About = () => {
    const [showAnimations, setShowAnimations] = useState(false);
    const [progress, setProgress] = useState(0)

    const progressBar = () => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => prevProgress + 10);
        }, 1000)
        return () => {
          clearInterval(interval)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.about');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setShowAnimations(isVisible);
                if(isVisible){
                    progressBar()
                }else{
                    setProgress(0)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about">
            <div className="text"
            style={{
                    transform: `translateY(${showAnimations ? '0' : '-100'}px)`
                }}>
                <div className={`circle top ${showAnimations ? 'active' : ''}`} ></div>
                <div className='top'>
                    <div className={`line-top ${showAnimations ? 'active' : ''}`}></div>
                    <div className="title">
                        <h3 className={`fade-left ${showAnimations ? 'active' : ''}`}>Quem é</h3>
                        <h2 className={`fade-down ${showAnimations ? 'active' : ''}`}>Hysteria?</h2>
                    </div>
                </div>
                <div className={`line-horizontal ${showAnimations ? 'active' : ''}`}></div>
                <div className='bottom'>
                    <div className={`line-vertical ${showAnimations ? 'active' : ''}`}></div>
                    <div className="paragraph">
                        <p className={`fade-up ${showAnimations ? 'active' : ''}`}>Hysteria é um selo de criação e produção que reúne mulheres e olhares diversos no centro das narrativas. Nossos filmes, série e conteúdos são distribuídos na TV, no cinema, no streaming e em plataformas digitais. Temos histórias para emocionar, rir, chorar, indignar, inspirar e propor novas visões de mundo.</p>
                    </div>
                </div>
                <div className={`circle left ${showAnimations ? 'active' : ''}`} ></div>
                <div className={`circle right ${showAnimations ? 'active' : ''}`} ></div>
            </div>
            <div className="loading">
                <ProgressBar progress={progress} color={'red'} />
            </div>
        </div>
    );
};