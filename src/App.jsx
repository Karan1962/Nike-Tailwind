import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./Sections";
import CustomNav from "./components/CustomNav";

const App = () => (
  <main className="relative">
    <CustomNav />
    <section className="xl:padding-l wide:padding-r padding-b dark:bg-[#141414]">
      <Hero />
    </section>
    <section className="padding dark:bg-[#12121b] dark:text-[#dddddd]">
      <PopularProducts />
    </section>
    <section className="padding dark:bg-[#0b0707] dark:text-[#dddddd]">
      <SuperQuality />
    </section>
    <section className="padding  dark:bg-[#101010] dark:text-[#dddddd]">
      <Services />
    </section>
    <section className="padding dark:bg-[#12121b] dark:text-[#dddddd]">
      <SpecialOffers />
    </section>
    <section className="padding bg-slate-100 dark:bg-[#0b0707] dark:text-[#dddddd]">
      <CustomerReviews />
    </section>
    <section className="padding dark:bg-[#12121b] dark:text-[#dddddd]">
      <Subscribe />
    </section>
    <section className="padding bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
