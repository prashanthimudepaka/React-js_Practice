import React from 'react'

function Footer() {
 const  dt=new Date()
  return (
    <footer>
        copyright @ {dt.getFullYear()}
    </footer>
  )
}

export default Footer
