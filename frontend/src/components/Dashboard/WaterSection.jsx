import FormSection from './FormSection'; // Import FormSection

const WaterSection = () => {
  return (
    <FormSection
      title="💧 Water Intake"
      placeholder="Glasses"
      inputType="number"
      keyName="fittrack_water"
    />
  );
};

export default WaterSection;
