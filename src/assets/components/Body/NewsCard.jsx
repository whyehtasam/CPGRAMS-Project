// import Content from "./Content";
const NewsCard = (props) => {

    return (
        <div className="flex flex-col my-4">
            <div className="title font-bold text-xl my-4">WHAT'S NEW</div>

            <div className="bg-gray-200 w-[360px] h-max  p-1">

                {props.newsData.map((item, index) => {

                    return <div className="bg-white h-20 flex justify-center items-center my-2 mx-2" key={index}>

                        <div className="date h-16 w-24 bg-gray-200 mx-2 flex flex-col justify-center items-center">
                            <ul className="flex flex-col justify-center items-center">
                                <li className="text-3xl text-bold font-[700] text-pink-900">{item.date}</li>
                                <li className="text-[12px] italic">{item.month + ' '}{item.year}</li>
                            </ul>
                        </div>
                        <div className="info h-16 w-full  mr-2 text-sm text-gray-700">
                            <a href="" className="hover:underline" onClick={() => preventDefault()}>{item.info}</a>
                        </div>

                    </div>
                })}

            </div>
        </div>

    )
}

export default NewsCard;