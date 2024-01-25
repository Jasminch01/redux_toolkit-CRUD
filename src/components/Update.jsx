import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { update } from "../feature/books/bookSlice";

const Update = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({id, title, author}))
    navigate('/show-books')

  }
  return (
    <div>
      <p className="text-xl font-bold text-center">Update Book</p>
      <div className="flex justify-center items-center flex-col">
        <form onSubmit={handleUpdate}>
          <label htmlFor="">
            title
            <input
              name="title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              className="border-slate-500 border-2 rounded-lg"
              type="text"
            />
          </label>
          <label htmlFor="">
            Author
            <input
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-slate-500 border-2 rounded-lg"
              type="text"
            />
          </label>
          <button
            type="submit"
            className="py-2 px-3 bg-sky-600 text-white rounded"
          >
            update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
