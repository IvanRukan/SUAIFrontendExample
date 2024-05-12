import suzuki from "./images/suzuki bike.png"
import harley from "./images/harely wallpaper.jpg"


const Motorcycles = () => {
    return (
        <div className="MotoBody">
            
            <div className="motorcycleManufacturerFlexbox">
           
                <img src={suzuki} className="motorCycleImage"></img>
                <div className="motoContent">
                <div className="motorcycleInfo">В 1954 году компания была переименована в Suzuki Motor Co., Ltd., в это время она производила порядка 6000 мотоциклов и мопедов в месяц. Спустя год в производство пошла переднеприводная малолитражка Suzulight с независимыми передней и задней подвеской. В 1962 году заводская команда впервые стала победителем мотоциклетных гонок Isle of Man TT. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat tincidunt orci, sed mattis nisi maximus non. Curabitur sit amet facilisis justo, vitae imperdiet tortor. Mauris mollis dapibus lacus, ac rhoncus libero scelerisque at. Vivamus ac orci sed sem posuere ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse in vestibulum tellus, sit amet vehicula dui. Nam quis tempus augue, eu sagittis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non lobortis erat. Donec eleifend orci sollicitudin molestie facilisis. Donec tristique justo non nisi mattis, et efficitur purus gravida. Duis sagittis convallis felis. Phasellus vestibulum neque non turpis posuere ultricies.</div>
                <div className="motorcycleCaptionAndButton">
                    <div className="motorcycleCaption">SUZUKI </div>
                    <div className="motorcycleButton">Просмотреть модели &#10095;</div>
                </div>
                </div>
            </div>
            <div className="motorcycleManufacturerFlexbox">
            
            <img src={harley} className="motorCycleImage"></img>
            <div className="motoContent">
                <div className="motorcycleInfo">Мотоциклы Harley-Davidson это легенда, особый стиль и образ жизни. Новый мотоциклы вы можете купить в лизинг, в рассрочку и кредит. Примем ваш мотоцикл в трейд-ин в зачет нового мотоцикла. Аккуратно и бережно доставим ваш мотоцикл в любой город. Fusce a lobortis eros. Aenean id aliquam nisi. Mauris vel lacus a est laoreet laoreet ac non dolor. Morbi at commodo sapien. Integer ultricies vitae ante dictum sagittis. Vestibulum eu malesuada tortor. Morbi rhoncus augue enim, et auctor arcu ullamcorper eget. Phasellus consequat porta leo. Nulla sed mi aliquam, viverra magna quis, convallis ipsum. Proin id erat volutpat, imperdiet quam vitae, pulvinar velit. Integer ligula lectus, mollis in imperdiet ut, tempus a sem. Suspendisse molestie libero mi, vel tincidunt nunc varius quis. Fusce accumsan consectetur scelerisque. Praesent malesuada libero leo, sit amet ornare turpis placerat et. Suspendisse dignissim urna a sagittis volutpat. </div>
                <div className="motorcycleCaptionAndButton">
                    <div className="motorcycleCaption">HARLEY</div>
                    <div className="motorcycleButton">Просмотреть модели &#10095;</div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Motorcycles