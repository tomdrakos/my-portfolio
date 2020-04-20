import React from "react"

const SkillIcon = ({children, animation}) => {
  return (
    <>
        <div className="item-row" data-sr={animation}>
          <div>
            {children}
          </div>
        </div>
    </>
  )
}

export default SkillIcon
