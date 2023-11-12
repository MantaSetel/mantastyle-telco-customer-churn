import Header from "./modules/ui/partials/Header";
import Navbar from "./modules/ui/blocks/Navbar";
import Content from "./modules/ui/partials/Content";
import Footer from "./modules/ui/blocks/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
