import { Link } from 'react-router-dom'

const EmailTo = ({mailto, label}) => {
    return(
        <Link className="captionFooter" to="#" onClick={(e) => {
            window.location.href = mailto;
            e.preventDefault();
        }}>{label}</Link>
    )
}


const Footer = () => {
    return(
        <>
            <footer className='mainFooter'>
                <EmailTo  label={"Связь по E-mail"} mailto={"mailto:07vanek@gmail.com"}></EmailTo>
                <div className='captionFooter_not_interactive'>Адрес: ул. Большая Морская</div>
                <Link className='captionFooter' to="https://github.com/IvanRukan?tab=repositories">@GitHub: IvanRukan</Link>
            </footer>
        </>
    )
}
export default Footer