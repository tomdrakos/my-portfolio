import React from "react"

const SkillIcon = ({children, animation}) => {
  return (
    <>
        <div className="item-row" data-sr={animation}>
          <div style={{ width: 100, height: 100 }}>
            {children}
          </div>
        </div>
    </>
  )
}

export default SkillIcon
