import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import WatchNow from './components/WatchNow';
import Features from './components/Features';
import OurTeam from './components/OurTeam';
import Testemonial from './components/Testemonial';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import AppSection from './components/AppSection';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navigation></Navigation>
			<Header></Header>
			<About></About>
			<WatchNow></WatchNow>
			<Features></Features>
			<OurTeam></OurTeam>
			<Testemonial></Testemonial>
			<FAQ></FAQ>
			<ContactUs></ContactUs>
			<AppSection/>
			<Footer/>
		</>
	);
}

export default App;
