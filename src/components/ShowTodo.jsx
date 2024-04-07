import React from "react";

const ShowTodo = ({
  data,
  handleDelete,
  handleEdit,
  toggle,
  title,
  description,
  setTitle,
  setDescription,
  handleAdd,
}) => {
  return (
    <div className="container  ">
      <div className="upper d-flex justify-content-around  ">
        <h2>Title</h2>
        <h2>Description</h2>
        <h2>Action</h2>
      </div>
      <hr />

      {data.map((e) => (
        <>
          <div key={e.id} className="data d-flex justify-content-around ">
            {!toggle && (
              <>
                <input
                  className="bg-light rounded-3 border-0 py-2 px-2 w-25 "
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                />
                <input
                  className="bg-light rounded-3 border-0 py-2 px-2 w-25 "
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="text"
                />
              </>
            )}
            {toggle && (
              <>
                <h3>{e.title}</h3>
                <h3>{e.description}</h3>
              </>
            )}
            <div className="btns d-flex gap-3 ">
              {!toggle && (
                <button
                  onClick={handleAdd}
                  className="btn btn-warning py-0 px-3"
                >
                  Update
                </button>
              )}
              {toggle && (
                <button
                  onClick={() => {
                    handleEdit(e.id);
                  }}
                  className="btn btn-warning py-0 px-3"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => {
                  handleDelete(e.id);
                }}
                className="btn btn-danger py-0 px-3"
              >
                Delete
              </button>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default ShowTodo;
