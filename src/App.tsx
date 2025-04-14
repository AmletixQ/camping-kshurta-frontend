import { lazy } from "react";

const Header = lazy(() => import("./components/Header/Header"));
const AboutUs = lazy(() => import("./sections/AboutUs/AboutUs"));
const Accommodation = lazy(
  () => import("./sections/Accommodation/Accommodation")
);
const Moments = lazy(() => import("./sections/Moments/Moments"));
const Conditions = lazy(() => import("./sections/Conditions/Conditions"));
const Gallery = lazy(() => import("./sections/Gallery/Gallery"));
const Rules = lazy(() => import("./sections/Rules/Rules"));
const FormSection = lazy(() => import("./sections/Form/FormSection"));
const Entertainment = lazy(
  () => import("./sections/Entertainment/Entertainment")
);
const Footer = lazy(() => import("./components/Footer/Footer"));

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
