import React from 'react'
import PartnerCard from './PartnerCard'

const Partners = () => {
  return (
    <div className='home__partners'>
        <h1>Partners</h1>
        <div className="home__partners__list">
            <PartnerCard />
        </div>
    </div>
  )
}

export default Partners