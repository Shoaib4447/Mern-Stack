import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todoitem from "./MyComponents/Todoitem";
import Todos from "./MyComponents/Todos";



function App() {
  
  return (
    <>
      <Header title='ToDos List' searchBar={true}/>
      <Todos></Todos>
      <Todoitem/>
      <Footer/>
    </>
  );
}

export default App;


