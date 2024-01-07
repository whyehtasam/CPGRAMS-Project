import Carousel from "./carousel";
import Content from "./Content";
import slider1 from '../../images/slider1.jpeg';
import slider2 from '../../images/slider2.jpeg';
import slider3 from '../../images/slider3.jpeg';
import slider4 from '../../images/slider4.jpeg';
import slider5 from '../../images/slider5.jpeg';
import slider6 from '../../images/slider6.jpeg';
import slider7 from '../../images/slider7.jpeg';

const Body = () => {
    const imagePath = [
        { id: 1, path: slider1 },
        { id: 2, path: slider2 },
        { id: 3, path: slider3 },
        { id: 4, path: slider4 },
        { id: 5, path: slider5 },
        { id: 6, path: slider6 },
        { id: 7, path: slider7 }
    ];
    return (
        <>
        <Carousel imagePath={imagePath}/>
        <Content />
       
        </>
    );
};

export default Body;