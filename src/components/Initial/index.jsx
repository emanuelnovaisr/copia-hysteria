import './styles.scss'


export const Initial = () =>{
    return(
        <div className='initial'>
            <div className='circles'>
                <div className='circle' id='top'></div>
                <div className='circle' id='center'></div>
                <div className='circle' id='down'></div>
            </div>
            <div className="video-container">
                <video autoPlay muted loop src='https://uxdir.com/files/videos/hysteria-—home.webm'  className='video'>
                </video>
            </div>
            <div className='box'>
                <h2>mulheres com</h2>
                <h1>historias</h1>
                <h2>para contar</h2>
            </div>
        </div>
    )
}