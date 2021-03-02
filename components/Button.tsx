import React from "react"

type IButtons = {
  onClick: () => void
}
const Buttons = (props: IButtons) => {
  return (
    <>
      <div className="mt-10 flex justify-end mr-10">
        <button onClick={props.onClick} className="bg-fr w-20 h-10 text-white">
          Next
        </button>
      </div>
    </>
  )
}
export default Buttons
