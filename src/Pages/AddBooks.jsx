import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../feature/books/bookSlice";
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const book = {
      id: uuidv4(),
      title: form.title.value,
      author: form.author.value,
    };

    dispatch(addBook(book));
    form.reset();
    navigate('/show-books')
  };
  return (
    <div className="mt-10">
      <p className="text-center text-xl font-bold">Add Books</p>
      <div className="flex justify-center items-center flex-col">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            title
            <input
              name="title"
              className="border-slate-500 border-2 rounded-lg"
              type="text"
            />
          </label>
          <label htmlFor="">
            Author
            <input
              name="author"
              className="border-slate-500 border-2 rounded-lg"
              type="text"
            />
          </label>
          <button
            type="submit"
            className="py-2 px-3 bg-sky-600 text-white rounded"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
