/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center w-3/12 mx-auto my-8">
        <p className="text-yellow-600 mb-4">---{subHeading}---</p>
        <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
    </div>
  );
}

export default SectionTitle;
