import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';

const Dropdown = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        console.log('clicked');
    }
   
    const [title, lists] = props.data;
    
    return (
        <>
            <div className="dropdown dropdown-hover  bg-transparent" onClick={toggleOpen} >
                <FontAwesomeIcon icon={'props.icons'} className='' size='sm' />
                {title.map((item) => {
                    return (
                        <div tabIndex={0} role="button" className="btn m-1 btn-sm btn-ghost  text-white text-md w-max" key={item.title}>
                            <FontAwesomeIcon icon={props.icons} className='' size='sm' />
                            {item.title}
                            <FontAwesomeIcon icon={faAngleDown} className='mt-1' size='sm' />
                        </div>
                    );
                })}

                {isOpen && (
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {lists.map((item) => {
                            return (
                                <li key={item}><a>{item.list}</a></li>
                            );
                        })}
                    </ul>
                )}

            </div>

        </>
    )
}

export default Dropdown;