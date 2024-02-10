import React from 'react'
import TeamCard from '../TeamCard/TeamCard'
import './TeamCardContainer.css'

const TeamCardContainer = () => {
  return (
    <div className='TeamCardContainer'>
      
    <h2 className='TeamHead'>Our Team</h2>
    <p className='TeamSubHead'>Meet the team that makes it all happen.</p>
    <h3 className='TeamSechead'>
        Faculty Committee
    </h3>
    <div className='teamSection'>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </div>  
    <h3 className='TeamSechead'>
        Core Team
    </h3>
    <div className='teamSection'>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </div>
    <h3 className='TeamSechead'>
        Project Team
    </h3>
    <div className='teamSection'>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </div>
    </div>
  )
}

export default TeamCardContainer