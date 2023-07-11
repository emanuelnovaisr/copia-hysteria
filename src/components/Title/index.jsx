import './styles.scss'


export const Title = ({text, scrollPosition}) =>{
    
    return(
        <div className='titles' >
            <div className="title">
                <h2 style={{
                    transform: `translateX(${-scrollPosition + 500}px)`
                    }}>{text}
                </h2>
            </div>
            <div className="title">
                <h2 style={{
                    transform: `translateX(${-scrollPosition + 500}px)`
                    }}>{text}
                </h2>
            </div>
            <div className="title">
                <h2 style={{
                    transform: `translateX(${-scrollPosition + 500}px)`
                    }}>{text}
                </h2>
            </div>
        </div>
        
    )
}