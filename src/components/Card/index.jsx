import './styles.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Card = ({ card, index }) => {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div className={`card-container ${index === 0 ? 'odd' : 'pair'}`} data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <div className="card-frame">
                {index === 0 &&
                    <svg viewBox="0 0 822 1031" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-brandlab___StyledCardFrame2-sc-u7i16q-0 hlWnpe">
                        <g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M821.258 0.00610352H0V1030.87H821.258V0.00610352ZM33.4956 276.232V991.232H791.496V347.904L704.496 276.232H33.4956Z" fill="black"
                            ></path>
                            <path d="M19.4956 1008.73V259.583H704.689L803.496 339.143V1008.73H19.4956Z" stroke="#F1EFE8" stroke-width="2"></path>
                            <path d="M19.4956 243.232V20.7319H804.496V322.732L704.689 243.232H19.4956Z" stroke="#F1EFE8" stroke-width="2"></path>
                        </g>
                    </svg>
                }
                {index !== 0 &&
                    <svg viewBox="0 0 822 1031" fill="none" xmlns="http://www.w3.org/2000/svg" class="section-brandlab___StyledCardFrame-sc-u7i16q-1 jZSbgR"><g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M821.258 1030.87H0V0.00610352H821.258V1030.87ZM33.4956 754.648V39.6482H791.496V682.976L704.496 754.648H33.4956Z" fill="black"></path>
                        <path d="M19.4956 22.1482V771.297H704.689L803.496 691.737V22.1482H19.4956Z" stroke="#F1EFE8" stroke-width="2"></path>
                        <path d="M19.4956 787.648V1010.15H804.496V708.148L704.689 787.648H19.4956Z" stroke="#F1EFE8" stroke-width="2"></path>
                    </g>
                    </svg>
                }
            </div>
            <div className={`card-image ${index === 0 ? 'odd' : 'pair'}`}>
                <img src={card.img} alt={card.title1} />
            </div>
            <div className={`card-text ${index === 0 ? 'odd' : 'pair'}`}>
                <h2>{card.title1}</h2>
                <h3>{card.title2}</h3>
            </div>
        </div>
    )
}