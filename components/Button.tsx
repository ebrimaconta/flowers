import React from "react"
 
type IDisplay = {
  state: number
}
const Display = (props: IDisplay) => {
  
  return (
    <>
      <div className="mt-10 flex justify-end">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-fr w-20 h-10 text-white"
        >
          Next
        </button>
      </div>
    </>
  )
}
export default Display
