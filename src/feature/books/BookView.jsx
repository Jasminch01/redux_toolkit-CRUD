import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import { Link } from "react-router-dom";

const BookView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books)
  const dispatch = useDispatch();
  const handleDelete = (title) => {
    dispatch(deleteBook(title));
  };
  return (
    <div className="mt-10">
      <p className="text-center text-xl font-bold">
        Book Crud App Using Redux-toolkit
      </p>
      <div className="flex items-center justify-center mt-5">
        <table className="border-collapse border table-auto w-[30rem] text-center">
          <thead>
            <tr>
              <td className="border border-slate-600">Title</td>
              <td className="border border-slate-600">Author</td>
              <td className="border border-slate-600">Actions</td>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const {id, title, author} = book;
               return <tr key={book.id}>
                  <td className="border border-slate-600">{book.title}</td>
                  <td className="border border-slate-600">{book.author}</td>
                  <td className="border border-slate-600 space-x-5">
                    <Link state={{id, title, author}} to={`/update`}>
                      <button className="py-1 text-white px-2 my-2 bg-teal-500 rounded-lg">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(book.title)}
                      className="py-1 text-white px-2 my-2 bg-red-500 rounded-lg"
                    >
                      delete
                    </button>
                  </td>
                </tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookView;
