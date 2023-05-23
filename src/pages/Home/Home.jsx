import Hero from "../../component/Hero/Hero";
import Cards from "../../component/Cards/Cards";
import About from './../../component/About/About';
import Countdown from "../../component/CountDown/CountDown";
import Offer from "../../component/offer/Offer";
import Tabs from "../../component/Tabs/Tabs";
import useDynamicTitle from "../../DynamicTitle/DynamicTitle";
const Home = () => {
    useDynamicTitle('Home');
    return (

        <div>
            <Hero></Hero>
            <Cards></Cards>
            <Tabs></Tabs>
            <Offer></Offer>
            <About></About>

        </div>
    );
};

export default Home;