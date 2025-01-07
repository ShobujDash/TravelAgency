import AvailabilityForm from "@/components/userComponents/AvailabilityForm";
import Carousel from "@/components/userComponents/Carosul";
import Discount from "@/components/userComponents/Discount";
import FooterSlider from "@/components/userComponents/FooterSlider";
import MasterLayout from "@/components/userComponents/Layout/MasterLayout";
import PopularRoom from "@/components/userComponents/PopularRoom";
import Sponsor from "@/components/userComponents/Sponsor";

const HomePage = () => {
  return (
    <MasterLayout>
      <Carousel />
      <div>
        <AvailabilityForm />
      </div>
      <PopularRoom />
      <Sponsor />
      <Discount />
      <FooterSlider />
    </MasterLayout>
  );
};

export default HomePage;
