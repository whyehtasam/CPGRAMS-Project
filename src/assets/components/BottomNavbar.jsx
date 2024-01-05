import Dropdown from "./Dropdown";
import Select from "./Select";
import Button from "./Button";

import { faRightToBracket, faMagnifyingGlass, faUser, faBarsProgress, faClipboard,faUserGroup, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const BottomNavbar = (props) => {

    const[nodalAuthority,mobileApp,signIn] = props.buttons ;

    // const icons = ['faMagnifyingGlass','faUser','faBarsProgress','faClipboard'] ;

    return (
        <>
            <div className="h-10 bg-pink-900 p-0 flex  justify-between items-center">
                <div className="dropdown flex justify-evenly w-8.5/12 items-center">

                    <Dropdown data={props.viewStatus} icons= {faMagnifyingGlass} />
                    <Dropdown data={props.nodalPgOfficers}  icons= {faUser}/>
                    <Dropdown data={props.redressProcess} icons= {faBarsProgress}/>
                    <Dropdown data={props.grievance}  icons= {faClipboard}/>
                    
                    <Button value={nodalAuthority} icons= {faUserGroup} buttonStyle='btn-ghost btn-sm mx-1 rounded text-white' />
                    <Button value={mobileApp} icons= {faMobileScreen} buttonStyle='btn-ghost btn-sm mx-1 rounded text-white'/>

                </div>
                <div className="signin flex w-4/12 justify-end">
                    <Select />
                    <Button value={signIn} icons={faRightToBracket} buttonStyle='btn-ghost btn-sm bg-yellow-500 rounded mx-2 hover:text-white hover:bg-yellow-600'/>

                </div>
            </div>


        </>
    )
}

export default BottomNavbar;