import React from 'react'
import PartnerCard from './PartnerCard'
import { chainsList } from '../utils/utils'

const Partners = () => {
  return (
    <div className='home__partners'>
        <h1>Partners</h1>
        <div className="home__partners__list w-[80%] mobile:w-fit">
            <PartnerCard logo={chainsList[0].logo}/>
            <PartnerCard logo={chainsList[2].logo}/>
            <PartnerCard logo={chainsList[8].logo}/>
            <PartnerCard logo={chainsList[3].logo}/>
            <PartnerCard logo={chainsList[4].logo}/>
            <PartnerCard logo={chainsList[11].logo}/>
        </div>
    </div>
  )
}

export default Partners