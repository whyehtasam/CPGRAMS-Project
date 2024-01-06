import Header from "./assets/components/Header";
import Body  from "./assets/components/Body/Body";

const App = () => {

  const buttons = ['Nodal Authority for Appeal','Mobile App','Sign In']
  return (
    <>
   <Header buttons = {buttons} />
   <Body />
    
    </>
  );
}

export default App;