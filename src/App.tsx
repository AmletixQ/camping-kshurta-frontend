import { lazy } from "react";

const importComponent = (path: string) => {
  return lazy(() => import(path));
};

const Header = importComponent("./components/Header/Header");
const AboutUs = importComponent("./sections/AboutUs/AboutUs");
const Accommodation = importComponent("./sections/Accommodation/Accommodation");
const Moments = importComponent("./sections/Moments/Moments");
const Conditions = importComponent("./sections/Conditions/Conditions");
const Gallery = importComponent("./sections/Gallery/Gallery");
const Rules = importComponent("./sections/Rules/Rules");
const FormSection = importComponent("./sections/Form/FormSection");
const Entertainment = importComponent("./sections/Entertainment/Entertainment");
const Footer = importComponent("./components/Footer/Footer");

const App = () => {
  return (
    <>
      <Header />

      <main>
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
