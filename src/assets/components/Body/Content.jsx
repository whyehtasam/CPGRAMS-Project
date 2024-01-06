import ContentInformation from "./ContentInformation";
import NewsCard from "./NewsCard";
import news from './news.module';
const Content = () => {

    return (
        <div className="bg-gray-100 h-auto">
            <div className="heading w-[94vw] p-1 bg-pink-900 text-white m-auto text-center font-semibold">Any Grievance sent by email will not be attended to / entertained. Please lodge your grievance at the website.</div>
            <div className="flex w-10/12 m-auto justify-center">
                <ContentInformation />
                <NewsCard newsData={news} />
            </div>

        </div>
    )
}

export default Content;