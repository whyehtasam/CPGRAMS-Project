import Logo from '../images/logo.png'
const MidNavbar = () => {

    return (
        <>
            <div className=" navbar h-32 p-2">
                <div className="navbar-start h-full ml-10">
                    <img src={Logo} alt="logo" className='h-full' />
                </div>
                <div className="navbar-end flex justify-end  mr-10">
                    <div className='flex flex-col '>

                        <div className="btn  w-max tracking-wide text-2xl font-bold bg-blue-950 text-white"> CPGRAMS</div>
                        <div className='font-semibold'>Centralized Public Grievance Redress And Monitoring System</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MidNavbar;