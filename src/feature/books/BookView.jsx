import { useSelector } from "react-redux";

const BookView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <div>
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
            {books.map((book) => (
              <tr key={book.id}>
                <td className="border border-slate-600">{book.title}</td>
                <td className="border border-slate-600">{book.author}</td>
                <td className="border border-slate-600 space-x-5">
                    <button className="py-1 text-white px-2 my-2 bg-teal-500 rounded-lg">Edit</button>
                    <button className="py-1 text-white px-2 my-2 bg-red-500 rounded-lg">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookView;
