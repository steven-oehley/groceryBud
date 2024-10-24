import { useRef } from "react";

const Header = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    // prevent default
    e.preventDefault();
    handleSubmit();
    inputRef.current.focus();
  };

  return (
    <div className="mt-12">
      <form onSubmit={onSubmit}>
        <div className="flex gap-4 justify-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter grocery item..."
            className="input input-bordered input-primary w-full max-w-xs"
            value={newItem}
            onChange={({ target }) => setNewItem(target.value)}
          />
          <button className="btn btn-secondary cursor-pointer">Add</button>
        </div>
      </form>
    </div>
  );
};
export default Header;
