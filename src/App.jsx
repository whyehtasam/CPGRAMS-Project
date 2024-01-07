import Header from "./assets/components/Header";
import Body from "./assets/components/Body/Body";
import Section from "./assets/components/Section";
import Card from "./assets/components/Card";
import RegisterImg from './assets/images/Register.png';
import VerifyImg from './assets/images/ViewStatus.png';
import ContactImg from './assets/images/ContactUs.png';

const App = () => {

  const cardData = [
    { id: 1, src: RegisterImg, btnText: 'REGISTER / SIGN IN',bgColor: 'bg-[#80c8ea]' },
    { id: 2, src: VerifyImg, btnText: 'VERIFY STATUS' ,bgColor: 'bg-[#e28faa]' },
    { id: 3, src: ContactImg, btnText: 'CONTACT US' ,bgColor: 'bg-[#f3cf9b]' }
  ];


  const buttons = ['Nodal Authority for Appeal', 'Mobile App', 'Sign In']
  return (
    <>
      <Header buttons={buttons} />
      <Body />
      <Section className='flex justify-center  items-center p-8 justify-evenly'>
        {cardData.map((item) => <Card key={item.id} path={item.src} buttonText={item.btnText} className={item.bgColor}/>)}
      </Section>


    </>
  );
}

export default App;