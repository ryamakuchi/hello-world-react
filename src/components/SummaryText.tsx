import React from 'react'

const SummaryText: React.FC = ({ children }) => {
  console.log(children)

  return <div className="story">{children}</div>
};

export default SummaryText
