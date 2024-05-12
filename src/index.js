import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Motorcycles from './pages/Motorcycles';
import Trucks from './pages/Trucks';
import Main from './pages/Main';
import Cars from './pages/Cars';
import Popular from './pages/Popular';
import Registration from './pages/Registration';
import Layout from './pages/Layout';
import WelcomePage from './pages/WelcomePage';
import './pages/style.css'
import ManufacturerTemplate from './pages/ManufacturerTemplate'
import mclaren_template from './pages/images/mclaten_template.png'
import mclaren_artura from './pages/images/mclaren artura.png'
import mclaren_senna from './pages/images/mclaren senna.png'
import mclaren_750s from './pages/images/mclaren 750s.png'
import mclaren_elva from './pages/images/mclaren elva.png'
import bmw_template from './pages/images/bmw template.jpg'
import bmw_x7 from './pages/images/bmw x7.jpg'
import bmw_x5 from './pages/images/bmw x5.jpg'
import bmw_m3 from './pages/images/bmw m3.jpg'
import bmw_m5 from './pages/images/bmw m5.jpg'

const manufacturers_data = {
  mclaren : {desc: "McLaren была основана в 1963 году новозеландским гонщиком  Формулы-1  Брюсом Маклареном и американцем Тедом Майером, которые зарегистрировали Bruce McLaren Motor Racing Ltd для участия в автогоночной  серии. ",
    template_image : mclaren_template,
    models: {
      first: {
        model_name: "mclaren artura",
        model_image: mclaren_artura,
        model_desc: "McLaren Artura — гибридный спортивный автомобиль, разработанный и изготовленный британским автопроизводителем McLaren Automotive, запуск производства которого запланирован на 2021 год. По данным McLaren, Artura может разгоняться до 100 км/ч (62 мили в час) за 2,9 секунды, до 200 км/ч (124 мили в час) за 8,3 секунды, может развивать максимальную скорость 330 км/ч (205 миль в час) и имеет 1⁄4 мили (402 м) время 10,7 секунды."

      },
      second: {
        model_name: "mclaren senna",
        model_image: mclaren_senna,
        model_desc: "McLaren Senna — спортивный автомобиль, выпускаемый британским автопроизводителем McLaren Automotive. Внутренний код P15. Был показан на Женевском автосалоне в 2018 году. Хоть Senna и выглядит как автомобиль исключительно для трековых заездов, он допускается на дороги общего пользования и соответствует необходимым нормам."
      },
      third: {
        model_name: "mclaren 750s",
        model_image: mclaren_750s,
        model_desc: "McLaren 750S расположен в линейке Super Series, и новее своего преемника на 91 %. Оснащен доработанным 4,0 литровым двигателем V8 с двумя турбокомпрессорами, суммарно выдает 720 л. с. и 770 Н/м.[2] Автомобиль также оборудован семиступенчатой роботизированной коробкой переменных передач и задним приводом. Силовой агрегат является доработанной версией мотора предшественника."
      },
      fourth: {
        model_name: "mclaren elva",
        model_image: mclaren_elva,
        model_desc: "McLaren Elva - это двухместный спортивный родстер премиум класса. В его основе лежит платформа от Senna, однако, сам монокок и, как следствие, внешние кузовные панели здесь уникальные. Автомобиль построен под эгидой максимального облегчения конструкции. Именно поэтому, весь носовой обтекатель представляет из себя единую целую деталь."
      },
    }
  }, 
  bmw : {desc: "Аббревиатура BMW расшифровывается как «Bayerische Motoren Werke GmbH», что переводится как «Баварские Моторные Заводы». В этом имени скрывается отсылка к родине компании — Баварии.",
    template_image : bmw_template,
    models: {
      first: {
        model_name: "bmw x7",
        model_image: bmw_x7,
        model_desc: "Новый BMW X7 xDrive40i с первого взгляда впечатляет сочетанием бескомпромиссной мощи, премиального комфорта и экспрессивного дизайна.Передняя часть с фирменными элементами BMW и решеткой радиатора BMW Iconic Glow с подсветкой формирует облик, отражающий решительный характер модели."

      },
      second: {
        model_name: "bmw x5",
        model_image: bmw_x5,
        model_desc: "Для BMW X5 предлагаются технологии сетевой интеграции последнего поколения BMW. Интеллектуальные цифровые сервисы и системы помощи водителю обеспечивают безупречную связь с внешним миром и предлагают максимум комфорта и безопасности благодаря интуитивно понятному управлению."
      },
      third: {
        model_name: "bmw m3",
        model_image: bmw_m3,
        model_desc: "Автомобили M BMW 3 серии сочетают в себе атлетичные пропорции и классический четырехдверный трехобъемный дизайн с фирменной спортивностью M. Возглавляет пару эффектных седанов BMW M3 Competition с феноменальными 510 л.с. и 650 Нм крутящего момента."
      },
      fourth: {
        model_name: "bmw m5",
        model_image: bmw_m5,
        model_desc: "Автомобили M BMW 5 серии впечатляющим образом сочетают в себе фирменную спортивность BMW M с комфортом и элегантностью седана бизнес-класса. Познакомьтесь с тремя уникальными автомобилями BMW M с яркими характерами. Быстрейший в истории, новый BMW M5 CS с двигателем мощностью в 635 л.с. (467 кВт) и разгоном до 100 км/ч за рекордные 3 секунды."
      },
    }
  }, 
}



const root = ReactDOM.createRoot(document.getElementById('root'));


export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}> 
          <Route index element={<WelcomePage></WelcomePage>}></Route>
          <Route path="motorcycles" element={<Motorcycles></Motorcycles>}></Route>
          <Route path="cars" element={<Main></Main>}></Route>
          <Route path="cars/mclaren" element={<ManufacturerTemplate manufacturer_list={manufacturers_data.mclaren}></ManufacturerTemplate>}></Route>
          <Route path="cars/bmw" element={<ManufacturerTemplate manufacturer_list={manufacturers_data.bmw}></ManufacturerTemplate>}></Route>
          <Route path="trucks" element={<Trucks></Trucks>}></Route>
          <Route path="popular" element={<Popular manufacturer_list={manufacturers_data}></Popular>}></Route>
          <Route path="registration" element={<Registration></Registration>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


root.render(
  <MainApp></MainApp>
);



