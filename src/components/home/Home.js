import React from 'react'
import StartHome from '../start/startComponents/StartHome'
import StartAbout from '../start/startComponents/StartAbout'
import StartServices from '../start/startComponents/StartServices'
import StartGalleryBase3 from '../start/startComponents/StartGalleryBase3'
import { StartGalleryApps } from '../start/startComponents/StartGalleryApps'
import { StartContact } from '../start/startComponents/StartContact'
import { StartGalleryApi } from '../start/startComponents/StartGalleryApi'



export const Home = () => {
  return (
    <div>
       <StartHome />
       <StartAbout />
       <StartGalleryBase3 />
       <StartGalleryApps />
       <StartGalleryApi />
       <StartServices />
       <StartContact />
    </div>
  )
}
