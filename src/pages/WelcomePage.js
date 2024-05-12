import video_background from './images/mclaren_background.mp4'
import Footer from './Footer'

const WelcomePage = () => {
    return (<>
        <video autoPlay muted loop className="video_background">
            <source src={video_background} type="video/mp4"/>
        </video>
        <div className='WelcomeCaption'>Добро пожаловать! Для навигации используйте панель в шапке сайта. Для связи с нами используйте контакты на нижней панели сайта.</div>
        <div className='welcome_page_footer'>
        <Footer></Footer>
        </div>
        </>)
}

export default WelcomePage