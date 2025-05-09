import React from 'react'
import styles from "./Navigation.css";
export const Navigation = () => {

  console.log(styles);
  return (
    <nav className='container'>
        <div className='logo'>
            <img src="/images/logo.png" alt="do  some coding logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
  )
}
