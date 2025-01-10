import AvailabilityForm from "@/components/userComponents/AvailabilityForm";
import Carousel from "@/components/userComponents/Carosul";
import Discount from "@/components/userComponents/Discount";
import FooterSlider from "@/components/userComponents/FooterSlider";
import MasterLayout from "@/components/userComponents/Layout/MasterLayout";
import PopularRoom from "@/components/userComponents/PopularRoom";
import Sponsor from "@/components/userComponents/Sponsor";
import UserComments from "@/components/userComponents/UserComments";

const HomePage = () => {
  return (
    <MasterLayout>
      <Carousel />
      <AvailabilityForm />
      <PopularRoom />
      <Sponsor />
      <Discount />
      <UserComments />
      <FooterSlider />
    </MasterLayout>
  );
};

export default HomePage;
