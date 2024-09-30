import React from 'react'

const Image=()=> {
  return (
    <div
    style={{
      backgroundImage: `url(${this.props.sendUrl})`,
      width: "500px",
      height: "250px"
    }}
  />  )
}
export default Image;
