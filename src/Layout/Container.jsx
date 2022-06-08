import React from 'react'
import './Styles/Container.css'
const Container = ({className,children}) => {
  return (
    <section className={`container ${className}`}>
        {children}
    </section>
    )
}

export default Container