import Header from "./components/Header/Header";
import AboutUs from "./sections/AboutUs/AboutUs";
import Accommodation from "./sections/Accommodation/Accommodation";
import Moments from "./sections/Moments/Moments";
import Conditions from "./sections/Conditions/Conditions";
import Gallery from "./sections/Gallery/Gallery";
import Rules from "./sections/Rules/Rules";
import FormSection from "./sections/Form/FormSection";
import Entertainment from "./sections/Entertainment/Entertainment";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <AboutUs />
        <Accommodation />
        <Entertainment />
        <Moments />
        <Conditions />
        <Gallery />
        <Rules />
        <FormSection />
      </main>

      <Footer />
    </>
  );
};
export default App;
