import React from 'react'
import img from './images/60111.jpg'
// Components
import Header from './components/Header'
import Bio from './components/Bio'
import Info from './components/Info'
import Resume from './components/Resume'
import CoverNote from './components/CoverNote'
import Profile from './components/Profile'
import Activity from './components/Activity'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Project from './components/Project'
import Certifications from './components/Certifications'
import SocialLink from './components/SocialLink'
import AddInfo from './components/AddInfo'
import Review from './components/Review'
import Forums from './components/Forums'
const App = () => {
  return (
    <>
      <div className="desktop:p-9    bg-neutral-900 text-white">
        <div className="grid grid-cols-12  gap-8 pt-5">
          <div className="col-span-9 phone:col-span-12">
            <Header img={img} />
            <div className="grid grid-cols-9 gap-4 mt-4 phone:p-4">
              <div className="col-span-3 phone:col-span-12 ">
                <Bio />
              </div>
              <div className="col-span-6 phone:col-span-12">
                <Info />
                <Resume />
                <CoverNote />
                <Profile />
                <Activity img1={img} img2={img} />
                <Experience img1={img} img2={img} />
                <Skills />
                <Education img1={img} img2={img} />
                <Project />
                <Certifications />
                <SocialLink img1={img} img2={img} img3={img} img4={img} img5={img} img6={img} />
                <AddInfo />
              </div>
            </div>
          </div>

          <div className="col-span-3  phone:col-span-12 phone:p-4">
            <Review />
            <div className="mt-3">
              <Forums img1={img} img2={img} img3={img} img4={img} img5={img} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App