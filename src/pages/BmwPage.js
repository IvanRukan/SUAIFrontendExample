import Footer from "./Footer"


const BmwPage = (props) => {
    return (<>
        <div className="outerTemplateManufacturer">
            <div className="innerManufacturer">
                <img src={props.manufacturer_list.template_image} className="templateManufacturerImage"/>
                <div className="templateManufacturerDesc">{props.manufacturer_list.desc}</div>
            </div>
            <div className="modelsManufacturer">
                <div className="modelFlexbox">
                    <img src={props.manufacturer_list.models.first.model_image} className="modelImage"/>
                    <div className="modelDesc">{props.manufacturer_list.models.first.model_desc}</div>
                </div>
                <div className="modelFlexbox">
                    <img src={props.manufacturer_list.models.second.model_image} className="modelImage"/>
                    <div className="modelDesc">{props.manufacturer_list.models.second.model_desc}</div>
                </div>
                <div className="modelFlexbox">
                    <img src={props.manufacturer_list.models.third.model_image} className="modelImage"/>
                    <div className="modelDesc">{props.manufacturer_list.models.third.model_desc}</div>
                </div>
                <div className="modelFlexbox">
                    <img src={props.manufacturer_list.models.fourth.model_image} className="modelImage"/>
                    <div className="modelDesc">{props.manufacturer_list.models.first.model_desc}</div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>)
} 


export default BmwPage