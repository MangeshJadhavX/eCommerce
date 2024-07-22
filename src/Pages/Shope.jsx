import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offer } from '../Components/Offers/Offer'
import { NewCollectionItem } from '../Components/NewCollectionItems/NewCollectionItem'
import { NewsLatter } from '../Components/NewsLatter/NewsLatter'




export const Shope = () => {
  return (
    <div>
    <Hero/>
    <Popular/>  
    <Offer/>
    <NewCollectionItem/>
    <NewsLatter/>
      </div>
  )
}
 