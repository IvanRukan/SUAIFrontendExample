import kamaz from './images/kamaz.png'
import scania from './images/scania.png'
import Footer from './Footer'

const Trucks = () => {
    return (<>
    <div className="trucksFlexbox">
        <div className="manufacturerTruckFlexbox">
            <div className="truckNameContainer">
                <div className="truckName">KAMAZ</div>
            </div>
            <img className="truckPicture" src={kamaz}/>
            <div className="truckCaption"><b>ПАО «КАМАЗ»</b> (акроним от Ка́мский автомоби́льный заво́д (тат. Кама автомобиль заводы), ранее «КамАЗ») — советская, затем российская компания, производитель дизельных грузовых автомобилей и дизельных двигателей, действующий с 1976 года. Также выпускает автобусы, электробусы (под маркой «НЕФАЗ»), тракторы, комбайны, электроагрегаты, тепловые мини-электростанции и комплектующие. Основное производство расположено в городе Набережные Челны.</div>
        </div>
        <div className="manufacturerTruckFlexbox">
            <div className="truckNameContainer">
                <div className="truckName">SCANIA</div>
            </div>
            <img className="truckPicture" src={scania}/>
            <div className="truckCaption"><b>Scania AB</b> — шведский производитель грузовых автомобилей, автобусов, промышленных и морских двигателей. Выпускает автобусы с 1920 года. Штаб-квартира располагается в городе Сёдертелье, Швеция. Производство находится в Швеции, Франции, Нидерландах, Аргентине, Бразилии, Польше и России.</div>
        </div>
    </div>
    <br></br>
    <Footer></Footer>
    </>)
}
export default Trucks