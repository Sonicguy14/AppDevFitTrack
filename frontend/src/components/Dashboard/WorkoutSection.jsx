import FormSection from './FormSection'; // Import FormSection

const WorkoutSection = () => {
  return (
    <FormSection
      title="🏋️ Workout Log"
      placeholder="Workout (e.g. Running, Cycling)"
      inputType="text"
      keyName="fittrack_workout"
    />
  );
};

export default WorkoutSection;
