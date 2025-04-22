import FormSection from './FormSection';

const GoalSection = () => {
  return (
    <FormSection
      title="🎯 Goals"
      placeholder="Goal (e.g. Run 5km)"
      inputType="text"
      keyName="fittrack_goal"
      endpoint="http://localhost:8080/api/goals"
    />
  );
};

export default GoalSection;
