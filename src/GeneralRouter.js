import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import StartNavbar from './components/common/StartNavbar';

import StartAbout from './components/start/startComponents/StartAbout';
import StartGalleryBase3 from './components/start/startComponents/StartGalleryBase3';
import HomeComp05 from './components/pages/components/homes/homesComponents/HomeComp05';
import HomeComp04 from './components/pages/components/homes/homesComponents/HomeComp04';
import HomeComp02 from './components/pages/components/homes/homesComponents/HomeComp02';
import SliderComp01 from './components/pages/components/sliders/slidersComponents/SliderComp01';
import SliderComp03 from './components/pages/components/sliders/slidersComponents/SliderComp03';
import GalleryBase01 from './components/pages/components/galleries/galleriesComponents/GalleryBase01';
import GalleryBase02 from './components/pages/components/galleries/galleriesComponents/GalleryBase02';
import GalleryBase03 from './components/pages/components/galleries/galleriesComponents/GalleryBase03';
import Services01 from './components/pages/components/services/servicesComponents/Services01';
import ServicesBase02 from './components/pages/components/services/servicesComponents/ServicesBase02';
import Services03 from './components/pages/components/services/servicesComponents/Services03';
import EcommBase01 from './components/pages/components/ecommComp/ecommCompComponents/EcommBase01';
import EcommBase02 from './components/pages/components/ecommComp/ecommCompComponents/EcommBase02';
import EcommBase03 from './components/pages/components/ecommComp/ecommCompComponents/EcommBase03';
import TeamBase01 from './components/pages/components/team/teamComponents/TeamBase01';
import TeamBase02 from './components/pages/components/team/teamComponents/TeamBase02';
import TeamBase03 from './components/pages/components/team/teamComponents/TeamBase03';
import Faqs01 from './components/pages/components/FAQ\'s/FAQ\'sComponents/Faqs01';
import Faqs02 from './components/pages/components/FAQ\'s/FAQ\'sComponents/Faqs02';
import Faqs03 from './components/pages/components/FAQ\'s/FAQ\'sComponents/Faqs03';
import TestiBase02 from './components/pages/components/testimonials/testiComponents/TestiBase02';
import TestiBase03 from './components/pages/components/testimonials/testiComponents/TestiBase03';
import Price01 from './components/pages/components/pricing/pricingComponents/Price01';
import PriceBase02 from './components/pages/components/pricing/pricingComponents/PriceBase02';
import PriceBase03 from './components/pages/components/pricing/pricingComponents/PriceBase03';
import Contact01 from './components/pages/components/contact/contactComponents/Contact01';
import Contact02 from './components/pages/components/contact/contactComponents/Contact02';
import Contact03 from './components/pages/components/contact/contactComponents/Contact03';
import Footer01 from './components/pages/components/footers/Footer01';
import Footer02 from './components/pages/components/footers/Footer02';
import Footer03 from './components/pages/components/footers/Footer03';
import StartServices from './components/start/startComponents/StartServices';
import { StartFooter } from './components/common/StartFooter';
import { Home } from './components/home/Home';
import { StartGalleryApps } from './components/start/startComponents/StartGalleryApps';
import { BMI } from './components/pages/app/IMC/BMI';
import { LenghtC } from './components/pages/app/lenghtC/LenghtC';
import { TodoApp } from './components/pages/app/todolist/TodoApp';
import { Calculator } from './components/pages/app/calcApp/Calculator';
import { Skills01 } from './components/pages/components/skills/skillsComponents/Skills01';
import { WeightC } from './components/pages/app/weightC/WeightC';
import { Test } from './components/pages/app/test/Test';
import { StartContact } from './components/start/startComponents/StartContact';
import { Skills02 } from './components/pages/components/skills/skillsComponents/Skills02';
import { Skills03 } from './components/pages/components/skills/skillsComponents/Skills03';
import { StartGalleryApi } from './components/start/startComponents/StartGalleryApi';
import { Gallery } from './components/pages/api/gallery/Gallery';
import { RecipeGallery } from './components/pages/api/recipes/RecipeGallery';
import RecetaDetallePage from './components/pages/api/recipes/RecetaDetallePage';
import { StartProfile } from './components/start/startComponents/StartProfile';
import SliderComp02 from './components/pages/components/sliders/slidersComponents/SliderComp02';
import { Testimonial01 } from './components/pages/components/testimonials/testiComponents/Testimonial01';
import MotivationalQuoteApp from './components/pages/api/quote/MotivationalQuoteApp';




export const GeneralRouter = () => {
  return (
        <>
            <StartNavbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/startabout' element={<StartAbout />}/>
                <Route>
                   <Route path='/startprofile' element={<StartProfile />} />
                </Route>
                <Route path='/startgallerybase3' element={<StartGalleryBase3 />}/>
                   <Route>
                       <Route path='/homecomp5' element={<HomeComp05 />} />
                       <Route path='/homecomp4' element={<HomeComp04 />} />
                       <Route path='/homecomp2' element={<HomeComp02 />} />
                       <Route path='/carouselExampleIndicators' element={<SliderComp01 />} />
                       <Route path='/carouselExampleCaptions' element={<SliderComp02 />} />
                       <Route path='/carouselExampleFade' element={<SliderComp03 />} />
                       <Route path='/skills1' element={<Skills01 />} />
                       <Route path='/skills2' element={<Skills02 />} />
                       <Route path='/skills3' element={<Skills03 />} />
                       <Route path='/gallerycomp1' element={<GalleryBase01 />} />
                       <Route path='/gallerycomp2' element={<GalleryBase02 />} />
                       <Route path='/gallerycomp3' element={<GalleryBase03 />} />
                       <Route path='/servicecomp1' element={<Services01 />} />
                       <Route path='/servicecomp2' element={<ServicesBase02 />} />
                       <Route path='/servicecomp3' element={<Services03 />} />
                       <Route path='/ecommcomp1' element={<EcommBase01 />} />
                       <Route path='/ecommcomp2' element={<EcommBase02 />} />
                       <Route path='/ecommcomp3' element={<EcommBase03 />} />
                       <Route path='/teamcomp1' element={<TeamBase01 />} />
                       <Route path='/teamcomp2' element={<TeamBase02 />} />
                       <Route path='/teamcomp3' element={<TeamBase03 />} />
                       <Route path='/faqscomp1' element={<Faqs01 />} />
                       <Route path='/faqscomp2' element={<Faqs02 />} />
                       <Route path='/faqscomp3' element={<Faqs03 />} />
                       <Route path='/testimonial01' element={<Testimonial01 />} />
                       <Route path='/testicomp2' element={<TestiBase02 />} />
                       <Route path='/testicomp3' element={<TestiBase03 />} />
                       <Route path='/pricecomp1' element={<Price01/>} />
                       <Route path='/pricecomp2' element={<PriceBase02 />} />
                       <Route path='/pricecomp3' element={<PriceBase03 />} />
                       <Route path='/contactcomp1' element={<Contact01 />} />
                       <Route path='/contactcomp2' element={<Contact02 />} />
                       <Route path='/contactcomp3' element={<Contact03 />} />
                       <Route path='/footercomp1' element={<Footer01 />} />
                       <Route path='/footercomp2' element={<Footer02 />} />
                       <Route path='/footercomp3' element={<Footer03 />} />
                   </Route>
                <Route path='/startgalleryapps' element={<StartGalleryApps />} />
                   <Route>
                       <Route path='/bmi' element={<BMI />} />
                       <Route path='/lenghtconverter' element={<LenghtC />} />
                       <Route path='/todoapp' element={<TodoApp />} />
                       <Route path='/calcapp' element={<Calculator />} />
                       <Route path='/weightc' element={<WeightC />} />
                       <Route path='/test' element={<Test />} />
                   </Route>
                <Route path='/startgalleryapi' element={<StartGalleryApi />} />
                   <Route>
                       <Route path='/galleryunplash' element={<Gallery />} />
                       <Route path='/recipegallery' element={<RecipeGallery />} />
                          <Route>
                             <Route path='/receta/:idMeal' element={<RecetaDetallePage />} />
                          </Route>
                       <Route path='/motivationalquote' element={<MotivationalQuoteApp />} />
                   </Route>
                <Route path='/startservices' element={<StartServices />}/>
                <Route path='/startcontact' element={<StartContact />} />
            </Routes>
            <StartFooter />
            
        </>
  )
}
