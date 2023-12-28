import React from 'react'

const Card_wapper = (props) => {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-3 w-full p-4">

        {props.children}

      </div>
    </>
  )
}

export default Card_wapper