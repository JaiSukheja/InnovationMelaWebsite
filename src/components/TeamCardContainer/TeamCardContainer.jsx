import React from 'react'
import TeamCard from '../TeamCard/TeamCard'
import './TeamCardContainer.css'

import img1 from '../../assets/namita.webp' 
import img2 from '../../assets/teach4.webp'
import img3 from '../../assets/teach1.webp'
import img4 from '../../assets/teach3.webp'
import img5 from '../../assets/garima.webp'
import img6 from '../../assets/sandeep.webp'
import img7 from '../../assets/teach.webp'
import img8 from '../../assets/ahlok.webp'
import img9 from '../../assets/ashish.webp'

const org = [
  {
    name: 'Prof.(Dr) Namita Gupta',
    designation: "HOD (CSE)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img1
  },
]

const coor = [
  {
    name: 'Ms. Ruchi Goel',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img2
  },
  {
    name: 'Mr. Ashish Sharma',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img9
  },
  {
    name: 'Mr. Anupam Kumar',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img4
  }
]
const memb = [
  {
    name: 'Mr. Alok Sharma',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img8
  },
  {
    name: 'Dr. Yogesh Sharma',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img3
  },
  {
    name: 'Dr. Sandeep Tayal',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img6
  },
  {
    name: 'Ms. Garima Gupta',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img5
  },
  {
    name: 'Ms. Nisha Aggarwal',
    designation: "Assistant Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis sequi consequuntur nulla sint nobis ad eaque quae deserunt tempore error a",
    img: img7
  }
]

const TeamCardContainer = () => {
  return (
    <div className='TeamCardContainer'>
      
    <h2 className='TeamHead'>Our Team</h2>
    <p className='TeamSubHead'>Meet the team that makes it all happen.</p>
    <h3 className='TeamSechead'>
    Organising Secretary
    </h3>
    <div className='teamSection'>
      {
        org.map((team, index) => {
          return <TeamCard key={index} props={team} />;
        })
      }
    </div>  
    <h3 className='TeamSechead'>
        Coordinators
    </h3>
    <div className='teamSection'>
      {
        coor.map((team, index) => {
          return <TeamCard key={index} props={team} />;
        })
      }
    </div>
    <h3 className='TeamSechead'>
        Members
    </h3>
    <div className='teamSection'>
      {
        memb.map((team, index) => {
          return <TeamCard key={index} props={team} />;
        })
      }
    </div>
    </div>
  )
}

export default TeamCardContainer