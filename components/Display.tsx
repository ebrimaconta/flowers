import React from "react"

type IDisplay = {
  state: number
}
const Display = (props: IDisplay) => {
  const displaySwitch = (value: number) => {
    console.log(value)
    switch (value) {
      case 1:
        return <div className="">Hello world</div>
        break
      case 2:
        return <div className="">Hello news </div>
        break
      default:
        break
    }
  }
  return (
    <>
      <div className="">
        <div className="w-5/6  flex justify-end ">
          {displaySwitch(props.state)}
        </div>
      </div>
    </>
  )
}
export default Display
