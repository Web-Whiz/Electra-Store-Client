import AppDownloadSection from "../Pages/Home/AppDownloadSection";
import Banner from "../Pages/Home/Banner";
import Catalogue from './../Pages/Home/Catalogue';

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <Catalogue></Catalogue>
      </div>
      <div className="mt-[500px]">
        <AppDownloadSection />
      </div>
    </div>
  );
};

export default Home;