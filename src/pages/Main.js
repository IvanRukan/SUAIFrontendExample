import bmw from './images/bmw.png'
import bmw_logo from './images/bmw logo.png'
import merc from './images/merc.png'
import merc_logo from './images/merc logo.png'
import porsche from './images/porsche.png'
import porsche_logo from './images/porsche logo.png'
import mclaren from './images/mclaren.png'
import mclaren_logo from './images/mclaren logo.png'
import ferrari from './images/ferrari.png'
import ferrari_logo from './images/ferrari logo.png'
import audi from './images/audi.png'
import audi_logo from './images/audi logo.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Main = () => {
    return (<>
    <div className="mainFlexbox">
        <Link to="bmw" className="manufacturerFlexbox">
            <img className='mainImage' src={bmw}/>
            <div className="manufacturerCaptionFlexbox">
                <img src={bmw_logo}/>
                <div className="captionManufacturer">BMW</div>
            </div>
        </Link>
        <div className="manufacturerFlexbox">
            <img className='mainImage' src={merc}/>
            <div className="manufacturerCaptionFlexbox">
                <img src={merc_logo}/>
                <div className="captionManufacturer">Mercedes</div>
            </div>
        </div>
        <div className="manufacturerFlexbox">
            <img className='mainImage' src={porsche}/>
            <div className="manufacturerCaptionFlexbox">
                <img src={porsche_logo}/>
                <div className="captionManufacturer">Porsche</div>
            </div>
        </div>
        <Link to="mclaren" className="manufacturerFlexbox">
            <img className='mainImage' src={mclaren}/>
            <div className="manufacturerCaptionFlexbox">
                <img src={mclaren_logo}/>
                <div className="captionManufacturer">McLaren</div>
            </div>
        </Link>
        <div className="manufacturerFlexbox">
            <img className='mainImage' src={ferrari}/>
            <div className="manufacturerCaptionFlexbox">
                <img src={ferrari_logo}/>
                <div className="captionManufacturer">Ferrari</div>
            </div>
        </div>
        <div className="manufacturerFlexbox">
            <img className='mainImage' src={audi}/>
            <div className="manufacturerCaptionFlexbox">
                <img src={audi_logo}/>
                <div className="captionManufacturer">Audi</div>
            </div>
        </div>
    </div>
        <Footer></Footer>
    </>
)
}
export default Main