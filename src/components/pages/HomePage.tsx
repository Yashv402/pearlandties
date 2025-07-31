import React from 'react'
import Header from '../components/Header'
import ImageSlider from '../home/ImageSlider'
import Categories from '../home/Categories'
import RecentViewed from '../home/RecentViewed'
import Reviews from '../home/Reviews'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <Categories />
      <RecentViewed />
      <Reviews />
      <Footer />
    </div>
  )
}

export default HomePage