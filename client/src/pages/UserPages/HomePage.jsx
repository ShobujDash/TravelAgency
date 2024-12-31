import AvailabilityForm from "@/components/userComponents/AvailabilityForm";
import Carousel from "@/components/userComponents/Carosul";
import Navbar from "@/components/userComponents/Navbar";
import Offer from "@/components/userComponents/Sponsor";
import PopularRoom from "@/components/userComponents/PopularRoom";
import Sponsor from "@/components/userComponents/Sponsor";
import Discount from "@/components/userComponents/Discount";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div>
        <AvailabilityForm />
      </div>
      <PopularRoom />
      <Sponsor />
      {/* <Discount /> */}
    </>
  );
};

export default HomePage;
