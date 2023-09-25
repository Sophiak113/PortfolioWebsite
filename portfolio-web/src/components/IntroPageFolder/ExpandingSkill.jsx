import React from 'react'

const ExpandingSkill = () => {
    const [selected, setSelected] = useState(false)

  return (
    <div className={`skill-outline ${selected ? 'expanded' : ''}`} onClick={setSelected(true)}>
      
    </div>
  )
}

export default ExpandingSkill
