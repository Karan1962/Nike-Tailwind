import { Hero,CustomerReviews,Footer,PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality } from "./Sections";
import CustomNav from './components/CustomNav'


const App = () => (
  <main className="relative">
    <CustomNav/>  
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
    <section className="padding"><PopularProducts/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding-x"><Services/></section>
    <section className="padding"><SpecialOffers/></section>
    <section className="padding"><CustomerReviews/></section>
    <section className="padding"><Subscribe/></section>
    <section className="padding"><Footer/></section>
  </main>
);

export default App;
