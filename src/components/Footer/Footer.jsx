import React from 'react'
import FooterInfo from './FooterInfo'
import FooterSocialMedia from './FooterSocialMedia'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-tr from-purple to-blue-700'>
      <FooterSocialMedia />

      <hr />

      <FooterInfo />
    </footer>
  )
}

export default Footer
