import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormUser from "./components/FormUser";
import ListElem from "./components/ListElem";
import Footer from "./components/Footer";

function App() {

  const [lists,setLists] = useState([])

  const addList = (formValue) =>{
    if (formValue){
      const newList = {
        id: new Date().getTime().toString(),
        task: formValue,
        complete: false,
      }
      setLists([...lists,newList])
    }
  }

  const deleteList = (id) =>{
    setLists([...lists.filter(list=>list.id !== id)])
  }

  const closeList = (id) =>{
    setLists([
        ...lists.map(list=>
          list.id === id?{ ...list, complete: !list.complete} : {...list}
        )
    ])
  }

  return (
      <div>
            <div className='text-main'>
                <h1>Список задач</h1>
                <p>Чтобы выполнить задачу нажмите на текст внутри нее</p>
            </div>

          <div className='main-container'>
            <FormUser setLists={setLists} addList={addList} />

            {lists.map(list=>{
              return(
                  <ListElem
                      list={list}
                      key={list.id}
                      deleteList={deleteList}
                      closeList={closeList}
                  />
              )
            })}

            <Footer
              lists={lists}
            />

          </div>
      </div>
  );
}

export default App;
