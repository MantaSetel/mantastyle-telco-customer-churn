import Tab from "./modules/ui/components/Tab";
import Header from "./modules/ui/partials/Header";
import Navbar from "./modules/ui/blocks/Navbar";
import TextInput from "./modules/ui/components/TextInput";
import Footer from "./modules/ui/blocks/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Tab />
            <div>
                <TextInput />
            </div>
            <Footer />
        </div>
    );
};

export default App;
