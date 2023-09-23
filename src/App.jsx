import { Hero,CustomerReviews,Footer,PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality } from "./Sections";
import CustomNav from './components/CustomNav'
import React from "react";


const App = () => (
  <main className="relative">
    <CustomNav/>  
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
    <section className="padding"><PopularProducts/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding-x"><Services/></section>
    <section className="padding"><SpecialOffers/></section>
    <section className="padding bg-slate-100"><CustomerReviews/></section>
    <section className="padding"><Subscribe/></section>
    <section className="padding bg-black"><Footer/></section>
  </main>
);

export default App;
