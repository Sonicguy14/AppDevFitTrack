import FormSection from './FormSection'; // Import FormSection

const WeightSection = () => {
  return (
    <FormSection
      title="⚖️ Weight Log"
      placeholder="Weight (kg)"
      inputType="number"
      keyName="fittrack_weight"
    />
  );
};

export default WeightSection;
