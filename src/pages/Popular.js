import Footer from "./Footer";

const Popular = (props) => {
    function shuffleObject(obj) {
        const entries = Object.entries(obj);
        for (let i = entries.length - 1; i > 0; i--) {
            const j = 
                Math.floor(Math.random() * (i + 1));
            [entries[i], entries[j]] = 
                [entries[j], entries[i]];
        }
        return Object.fromEntries(entries);
    }
    var cars = {}
    var bmw_cars = props.manufacturer_list.bmw.models
    var mclaren_cars = props.manufacturer_list.mclaren.models
    console.log(mclaren_cars)
    var man_list = [bmw_cars, mclaren_cars]
    for (let model of man_list){
        cars[model.first.model_name] = {image: model.first.model_image, desc: model.first.model_desc}
        cars[model.second.model_name] = {image: model.second.model_image, desc: model.second.model_desc}
        cars[model.third.model_name] = {image: model.third.model_image, desc: model.third.model_desc}
        cars[model.fourth.model_name] = {image: model.fourth.model_image, desc: model.fourth.model_desc}
    }
    let to_shuffle = shuffleObject(cars)
    const RandomCars = () => {
       return( <div className="OuterPopularModelContainer"> 
        {Object.keys(to_shuffle).map(function(key) 
        { return <div className="PopularModelContainer">
        <div className="PopularModelCaption">{key.toUpperCase()}</div> <div><img className="PopularModelImage" src={to_shuffle[key].image}/><div className="PopularModelDesc">{to_shuffle[key].desc}</div></div>
       </div>; })} 
       </div>)
    }
    
    return (<>
        <div className="mainPopularFlexbox">
        {sessionStorage.getItem("name") ? <div className="captionPopular">
            Рад вас видеть, {sessionStorage.getItem('name')}, вот, что сейчас популярно.
        </div> : <div className="captionPopular">
        Популярное сейчас: 
        </div> }
         <RandomCars/>
         <br></br>
         <Footer></Footer>
        </div>
    </>)
}
export default Popular