import React from 'react'
import './footerNavItem.css'
const FooterNavItem = ({name}) => {
  return (
   <li>
    <ion-icons name='chevron-forwars-outline'>

    </ion-icons>{' '}

    <a href="#">{name}</a>
   </li>
  )
}

export default FooterNavItem