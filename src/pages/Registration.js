import { useState } from 'react';
import Footer from './Footer';
import UserProfile from './UserProfiler';



const Registration = () => {
    const [name, setName] = useState("")
    const [surname, setSurName] = useState("")
    const [number, setNumber] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        
        sessionStorage.setItem("name", name)
        sessionStorage.setItem("surname", surname)
        sessionStorage.setItem("number", number)
        window.location.reload(false);
    }
    const logOut = (event) => {
        sessionStorage.setItem("name", "")
        sessionStorage.setItem("surname", "")
        sessionStorage.setItem("number", "")
        window.location.reload(false);
    }
    
    return (
        <>
        
            
            {sessionStorage.getItem("name") ? <div className='registrationFlexbox'><div className='registrationSuccessful'>Регистрация прошла успешно! Здравствуйте, {sessionStorage.getItem("name")} {sessionStorage.getItem("surname")}.</div>
            <button onClick={logOut} className='registrationLogOutButton'>Выйти</button>
            </div>
            
            : <div className='registrationFlexbox'>
                <div className='registrationCaption'>Регистрация:</div>
                <form className='registrationForm' onSubmit={handleSubmit}>
                    <label className='registrationLabel'>Имя</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder='Введите имя' className='registrationInput'></input>
                    <label className='registrationLabel'>Фамилия</label>
                    <input required value={surname} onChange={(e) => setSurName(e.target.value)} type="text" name="surname" placeholder='Введите фамилию' className='registrationInput'></input>
                    <label className='registrationLabel'>Телефон</label>
                    <input required value={number} onChange={(e) => setNumber(e.target.value)} type="text" name="number" placeholder='Введите номер телефона' className='registrationInput'></input>
                    <input  type="submit" value="Подтвердить" className='registrationSubmit'></input>
                </form>
            </div>}
            <Footer></Footer>
        </>
    )
}
export default Registration