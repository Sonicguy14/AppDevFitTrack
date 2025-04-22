import FormSection from './FormSection'; // Import FormSection

const TrackSection = () => {
  return (
    <FormSection
      title="Track Your Activity"
      placeholder="Steps"
      inputType="number"
      keyName="fittrack_data"
    />
  );
};

export default TrackSection;
