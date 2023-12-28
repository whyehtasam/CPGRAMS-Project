import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPhone, faCircleInfo ,faCircleQuestion} from '@fortawesome/free-solid-svg-icons';


const TopNavbar = () => {
    return (
        <>

            <div className="navbar bg-pink-900 p-0">
                <div className="navbar-start ml-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><FontAwesomeIcon icon={faHouse} iconStyle="regular" />Home</a></li>
                        <li><a><FontAwesomeIcon icon={faCircleInfo} />About Us</a></li>
                        <li><a><FontAwesomeIcon icon={faPhone} />Contact Us</a></li>
                        <li><a><FontAwesomeIcon icon={faCircleQuestion} />Help</a></li>
                        </ul>
                    </div>
                    <div className="top-header text-white text-sm h-37 flex items-center ">
                        <ul className="flex">
                            <li className="inline-block gov pr-5 border-r border-white text-right">
                                <div className="lang-hin">भारत सरकार</div>
                                <div>Government of India</div>
                            </li>
                            <li className="inline-block ministry pl-5">
                                <div className="lang-hin">कार्मिक, लोक शिकायत और पेंशन मंत्रालय</div>
                                <div>Ministry of Personnel, Public Grievances & Pensions</div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="navbar-end hidden lg:flex mr-10 ">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a><FontAwesomeIcon icon={faHouse} iconStyle="regular" />Home</a></li>
                        <li><a><FontAwesomeIcon icon={faCircleInfo} />About Us</a></li>
                        <li><a><FontAwesomeIcon icon={faPhone} />Contact Us</a></li>
                        <li><a><FontAwesomeIcon icon={faCircleQuestion} />Help</a></li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default TopNavbar;