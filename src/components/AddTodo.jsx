import React from "react";

const AddTodo = ({
  title,
  description,
  setTitle,
  setDescription,
  handleAdd,
  toggle,
}) => {
  return (
    <div className="container d-flex my-5 justify-content-center align-items-center gap-3 ">
      <div className="inputs w-75 d-flex gap-3">
        <input
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-50 py-2 rounded-2 bg-light text-dark px-3  "
          type="text"
          placeholder="Enter Title Here...."
        />
        <input
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-50 py-2 rounded-2 bg-light text-dark px-3  "
          type="text"
          placeholder="Enter Description Here...."
        />
      </div>
      {!toggle ? (
        <button
          onClick={handleAdd}
          style={{ fontSize: "1.5rem" }}
          className="btn btn-success px-5 py-1 font-monospace  "
        >
          Edit
        </button>
      ) : (
        <button
          onClick={handleAdd}
          style={{ fontSize: "1.5rem" }}
          className="btn btn-success px-5 py-1 font-monospace  "
        >
          Add
        </button>
      )}
    </div>
  );
};

export default AddTodo;
