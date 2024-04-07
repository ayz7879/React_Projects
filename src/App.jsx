import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import uuid from "react-uuid";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(true);
  const [editId, setEditId] = useState(null);

  // get data from local storage
  const getDataFromLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      return data;
    } else {
      return [];
    }
  };

  // main Data state
  const [data, setData] = useState(getDataFromLocalStorage());

  // save data to local storage
  useEffect(() => {
    let json = JSON.stringify(data);
    localStorage.setItem("data", json);
  }, [data]);

  // Add Todo
  const handleAdd = () => {
    if (!toggle) {
      setData(
        data.map((e) => {
          if (e.id === editId) {
            return { ...e, title: title, description: description };
          }
          return e;
        })
      );
      setTitle("");
      setDescription("");
      setToggle(!toggle);
    } else {
      const obj = {
        id: uuid(),
        title,
        description,
      };
      setData([...data, obj]);
      setTitle("");
      setDescription("");
    }
  };

  // Delete Todo
  const handleDelete = (id) => {
    let afterDelete = data.filter((e) => e.id != id);
    setData(afterDelete);
  };

  // Edit Todo
  const handleEdit = (id) => {
    let editData = data.filter((e) => e.id === id);
    setTitle(editData[0].title);
    setDescription(editData[0].description);
    setToggle(!toggle);
    setEditId(id);
  };

  return (
    <>
      <Navbar />
      <AddTodo
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleAdd={handleAdd}
        toggle={toggle}
      />
      <ShowTodo
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
        toggle={toggle}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </>
  );
}

export default App;
