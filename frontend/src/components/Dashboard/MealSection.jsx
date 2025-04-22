import FormSection from './FormSection'; // Import FormSection

const MealSection = () => {
  return (
    <FormSection
      title="🍱 Meal Tracker"
      placeholder="Meal (e.g. Breakfast)"
      inputType="text"
      keyName="fittrack_meals"
    />
  );
};

export default MealSection;
