import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import TodoItem from "./MyComponents/TodoItem";
import Todos from "./MyComponents/Todos";




function App() {
  let todos = [
    {
      sno:1,
      title:'Go to the marker1',
      description:'Go to the market to get the job done'
    },
    {
      sno:2,
      title:'Go to the mall2',
      description:'Go to the market to get the job done2'
    },
    {
      sno:3,
      title:'Go to the city3',
      description:'Go to the market to get the job done3'
    } 
  ]
  
  return (
    <>
      <Header title='ToDos List' searchBar={false}/>
      <Todos todo = {todos}/>
      <TodoItem/>
      <Footer/>
    </>
  );
}

export default App;


