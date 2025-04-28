import React from 'react'
import TODOCard from './TODOCard';

const TODOCardList = () => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <TODOCard />
      <TODOCard />
      <TODOCard />
    </div>
  )
}

export default TODOCardList
