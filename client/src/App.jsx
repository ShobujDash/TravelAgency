
import AvailabilityForm from "./components/userComponents/AvailabilityForm";
import Carousel from "./components/userComponents/Carosul";
import Navbar from "./components/userComponents/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div>
        <AvailabilityForm />
      </div>
    </>
  );
}

export default App;
