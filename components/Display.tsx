import React, { useEffect } from "react"

type IDisplay = {
  state: number
}
const Display = (props: IDisplay) => {
  const displaySwitch = (value: number) => {
    switch (value) {
      case 1:
        return <div className="">Language Page</div>
        break
      case 2:
        return <div className="">Occassion Page </div>
        break
      case 3:
        return <div className="">Design Card Page</div>
        break
      case 4:
        return <div className="">Slide Show Page </div>
        break
      case 5:
        return <div className="">Package Page</div>
        break
      case 6:
        return <div className="">Add On Page </div>
        break
      case 7:
        return <div className="">Shipping Details </div>
        break
      case 8:
        return <div className="">Order Summary </div>
        break
      case 9:
        return <div className="">Checkout </div>
        break
      default:
        break
    }
  }
  useEffect(() => {}, [props.state])
  return (
    <>
      <div className="mt-20">
        <div className="w-5/6  text-left flex justify-end ">
          {displaySwitch(props.state)}
        </div>
      </div>
    </>
  )
}
export default Display
