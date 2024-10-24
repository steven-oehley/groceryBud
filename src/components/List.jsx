import ListItem from "./ListItem";

const List = ({ items, handleDelete, handleMarkOff }) => {
  return (
    <section className="mt-12 space-y-4">
      {items?.map((i) => (
        <ListItem
          item={i}
          key={i.id}
          onDelete={handleDelete}
          handleMarkOff={handleMarkOff}
        />
      ))}
    </section>
  );
};
export default List;
