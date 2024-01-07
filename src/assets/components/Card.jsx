const Card = props => {
let style = "card w-96 m-2 bg-base-100 shadow-md border "+ props.className;
    return (
        <div className={style} key={props.id}>
            <figure className="p-10 flex justify-center items-center">
                <div className=" rounded-full border-4 border-double overflow-hidden w-52 h-52 justify-center items-center bg-white">
                     <img src={props.path} alt="Shoes" className=" p-10 object-cover w-full h-full"/>
                </div>
               
            </figure>
            <div className="card-body   pb-10  pt-0 items-center text-center ">

                <div className="card-actions">
                    <button className="btn bg-blue-950 text-white hover:bg-white hover:text-blue-950">{props.buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;