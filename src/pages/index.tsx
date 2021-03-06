import React, { useEffect, useReducer } from "react"
import { Link, graphql } from "gatsby"
import Display from "../../components/Display"
import Button from "../../components/Button"
import "../../content/assets/dist/tailwind.css"
import "../../content/assets/style.css"
const Index = () => {
  let array = []

  for (let x = 1; x <= 9; x++) {
    array.push(x)
  }
  const initialState = 1

  function reducer(state: number, action: any) {
    switch (action.type) {
      case "increment":
        return state + 1

      default:
        state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {}, [state])

  return (
    <>
      <div className="flex justify-end">
        <div className="flex flex-row justify-between mt-10 w-5/6 mr-6">
          {array.map((number, index) => {
            let checkState =
              state >= number
                ? `bg-fr line ${
                    state == number ? "line-gray" : "line-purple"
                  }  `
                : "bg-gray-500 line line-gray"

            return (
              <React.Fragment key={index}>
                <div className={`${checkState} text-white  rounded`}>
                  {number}
                </div>
              </React.Fragment>
            )
          })}{" "}
        </div>
      </div>
      <Display state={state} />
      <Button onClick={() => dispatch({ type: "increment" })} />
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
