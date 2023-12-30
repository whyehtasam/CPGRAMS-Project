const Select = () => {
    return (
        <>
            <select className=" select font-medium w-fit max-w-xs mx-2 select-sm bg-transparent border border-white text-white focus:border-white">
                <option disabled selected className="text-black">Language</option>
                <option className="text-black">English</option>
                <option className="text-black">Hindi</option>
                <option className="text-black">Marathi</option>
                <option className="text-black">Urdu</option>
                <option className="text-black">Gujrati</option>
            </select>
        </>
    )
}

export default Select;