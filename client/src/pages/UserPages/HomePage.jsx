import AvailabilityForm from "@/components/userComponents/AvailabilityForm";
import Carousel from "@/components/userComponents/Carosul";
import Navbar from "@/components/userComponents/Navbar";
import PopularRoom from "@/components/userComponents/PopularRoom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div>
        <AvailabilityForm />
      </div>
      <PopularRoom />
    </>
  );
};

export default HomePage;
