import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = props => {

    return (<>
        <footer className="tracking-wider footer p-10 bg-pink-900 text-white flex justify-around font-semibold" >
            <nav >
                <header className="footer-title text-2xl opacity-90 ">Services</header>
                <a href="https://digitalindiaawards.india.gov.in/" target="_blank" rel="noreferrer" className="link link-hover">Digital India Awards</a>
                <a href="https://igod.gov.in/" target="_blank" rel="noreferrer" className="link link-hover">IGOD</a>
                <a href="https://www.makeinindia.com/" target="_blank" rel="noreferrer" className="link link-hover">Make In India</a>
                <a href="https://digitalindia.gov.in/" target="_blank" rel="noreferrer" className="link link-hover">Digital India</a>
                <a href="https://www.india.gov.in/" target="_blank" rel="noreferrer" className="link link-hover">National Portal of India</a>
                <a href="https://www.nic.in/" target="_blank" rel="noreferrer" className="link link-hover">National Inormation Centre</a>
            </nav>
            <nav>
                <header className="footer-title text-2xl  opacity-90">Links</header>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Help / FAQs</a>
            </nav>
            <nav>
                <header className="footer-title text-2xl  opacity-90">Legal</header>
                <a className="link link-hover">Disclamair</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <a className="link link-hover">Web Information Maneger</a>
            </nav>

        </footer>
        
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
            <aside className="items-center grid-flow-col font-semibold opacity-80 text-xs">

                <p>Ministry of Personnel, Public Grievances & Pensions | Copyright © 2024 | Version 7.0.01092019.0.0<br />This site is designed, developed & hosted by National Informatics Centre, Ministry of Electronics & IT (MeitY), Government of India and Content owned by Department of Administrative Reforms & Public Grievances.</p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4 cursor-pointer">
                    <a><FontAwesomeIcon icon={faFacebook} size='2xl' /></a>
                    <a><FontAwesomeIcon icon={faTwitter} size='2xl' /></a>
                    <a><FontAwesomeIcon icon={faYoutube} size='2xl' /></a>
                </div>
            </nav>
        </footer>
    </>)

}

export default Footer;