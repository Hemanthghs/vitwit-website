import React from 'react'
import PartnerCard from './PartnerCard'

const Partners = () => {
  return (
    <div className='home__partners'>
        <h1>Partners</h1>
        <div className="home__partners__list w-[80%] mobile:w-fit">
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
        </div>
    </div>
  )
}

export default Partners