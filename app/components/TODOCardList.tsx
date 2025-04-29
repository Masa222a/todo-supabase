import React from 'react'
import TODOCard from './TODOCard';

interface TODOAllDataProps {
  todoAllData: TODOData[]
}

const TODOCardList = ({todoAllData}: TODOAllDataProps) => {

  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {todoAllData.map((todoData: TODOData) => (
        <TODOCard 
          key={todoData.id} 
          todoData={todoData} 
          />
      ))}
    </div>
  )
}

export default TODOCardList
