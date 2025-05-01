import Head from "next/head";
import { Inter, Raleway } from "next/font/google";

import Header from "@/components/Header/Header";
import AboutUs from "@/sections/AboutUs/AboutUs";
import Accommodation from "@/sections/Accommodation/Accommodation";
import Conditions from "@/sections/Conditions/Conditions";
import Entertainment from "@/sections/Entertainment/Entertainment";
import Moments from "@/sections/Moments/Moments";
import Gallery from "@/sections/Gallery/Gallery";
import Rules from "@/sections/Rules/Rules";
import FormSection from "@/sections/Form/FormSection";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ preload: false });
const raleway = Raleway({ preload: false });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />

        <link
          rel="icon"
          type="image/png"
          href="/images/favicons/favicon-96x96.webp"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/favicons/favicon.svg"
        />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.webp"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0 minimum-scale=1.0"
        />
        <meta
          name="description"
          content="Палаточный лагерь «Седой Кшурт» в Северной Осетии — идеальное место для отдыха на природе! Окунитесь в атмосферу уюта и приключений среди живописных гор и чистых рек. Лагерь «Седой Кшурт» предлагает комфортное размещение в палатках, разнообразные развлечения для всей семьи: походы, мастер-классы, спортивные игры, экскурсии и вечерние костры. Насладитесь свежим горным воздухом, великолепными пейзажами и тёплой атмосферой дружбы. Добро пожаловать в сердце Северной Осетии — в лагерь «Седой Кшурт», где каждый найдёт отдых по душе!"
        />

        <meta property="og:title" content='Кемпинг "Седой Кшурт"' />
        <meta
          property="og:description"
          content="Палаточный лагерь «Седой Кшурт» в Северной Осетии — идеальное место для отдыха на природе!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://camping-kshurta.ru" />
        <meta
          property="og:image"
          content="https://camping-kshurta.ru/images/accommodation.webp"
        />
        <meta property="og:site_name" content="Седой Кшурт" />

        <meta name="robots" content="index, follow" />

        <title>Кемпинг &quot;Седой Кшурт&quot;</title>
      </Head>
      <body className={`${inter.className} ${raleway.className}`}>
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
      </body>
    </>
  );
}
