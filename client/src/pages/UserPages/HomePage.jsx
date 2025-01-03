import AvailabilityForm from "@/components/userComponents/AvailabilityForm";
import Carousel from "@/components/userComponents/Carosul";
import Navbar from "@/components/userComponents/Navbar";
import Offer from "@/components/userComponents/Sponsor";
import PopularRoom from "@/components/userComponents/PopularRoom";
import Sponsor from "@/components/userComponents/Sponsor";
import Discount from "@/components/userComponents/Discount";
import Footer from "@/components/userComponents/Footer";

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
      <Discount />
      <Sponsor />
      <Footer />
    </>
  );
};

export default HomePage;
