import { WorkoutsContext } from '../Context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error('useWorkoutsContext must be inside a workoutContext Provider');
  }

  return context;
};
