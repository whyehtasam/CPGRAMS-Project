import Dropdown from "./Dropdown";
import Select from "./Select";
import Button from "./Button";



const BottomNavbar = (props) => {

    return (
        <>
            <div className="h-10 bg-pink-900 p-0 flex  justify-between items-center">
                <div className="dropdown flex justify-evenly w-7/12 items-center">

                    <Dropdown data={props.viewStatus}/>
                    <Dropdown data={props.nodalPgOfficers} />
                    <Dropdown data={props.redressProcess} />
                    <Dropdown data={props.grievance} />
                    
                    <Button />
                    <Button />

                </div>
                <div className="signin flex w-4/12 justify-end">
                    <Select />
                    <Button />

                </div>
            </div>


        </>
    )
}

export default BottomNavbar;