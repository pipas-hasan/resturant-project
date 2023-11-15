import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SubSection from "./SubSection";

const Card = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
        <div>
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SectionTitle>
        </div>
      <div className="grid grid-cols-3 gap-14">
        <SubSection
          subTitle={"Caeser Salad"}
          subPragraph={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        ></SubSection>
        <SubSection
          subTitle={"Caeser Salad"}
          subPragraph={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        ></SubSection>
        <SubSection
          subTitle={"Caeser Salad"}
          subPragraph={
            "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
          }
        ></SubSection>
      </div>
    </div>
  );
};

export default Card;
