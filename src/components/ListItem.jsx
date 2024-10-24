const ListItem = ({ item, onDelete, handleMarkOff }) => {
  const handleClick = () => {
    handleMarkOff(item.id);
  };

  return (
    <article className="w-1/2 mx-auto flex justify-between ring-2 ring-primary p-2 rounded-md hover:shadow-md hover:shadow-primary">
      <div className="flex gap-2 items-center">
        <input type="checkbox" checked={item.checked} onClick={handleClick} />
        <p
          className={`${
            item.checked && "line-through"
          } text-secondary text-2xl`}
        >
          {item.value}
        </p>
      </div>
      <button
        className="btn btn-circle btn-accent btn-outline"
        onClick={() => onDelete(item.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </article>
  );
};
export default ListItem;
