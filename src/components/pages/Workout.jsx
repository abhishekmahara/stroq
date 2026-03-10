import React from 'react'
import SectionWrapper from '../sectionWrapper'
import ExerciseCard from '../ui/ExerciseCard'

const Workout = ({ workout }) => {
  return (
      <SectionWrapper
      header={"Generate Your Workout Plan"}
      title={["IT's", "DANGER", "zone"]}
    >
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i)=>{
          return(
            <ExerciseCard i={i} key={i} exercise={exercise}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Workout
