import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/Header";
import List from "./components/List";
import { localStorageKeys } from "./constants";

const getLocalItems = () => {
  const localStringItems = localStorage.getItem(localStorageKeys.items);
  const localItems = localStringItems ? JSON.parse(localStringItems) : [];
  return localItems?.length > 0 ? localItems : [];
};

const successNotify = () =>
  toast.success("Item added!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });

const errorNotify = () =>
  toast.error("No duplicates or empty values allowed!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });

const setLocal = (itemsToSet) =>
  localStorage.setItem(localStorageKeys.items, JSON.stringify(itemsToSet));

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(() => getLocalItems());

  const rejectionCondition =
    newItem === "" || items.some((i) => i.value === newItem);

  const handleSubmit = () => {
    // check input - reject if duplicate or ""
    if (rejectionCondition) {
      errorNotify();
      return;
    }

    // set new values
    setItems((prevItems) => {
      const newItems = [
        ...prevItems,
        { value: newItem, id: nanoid(), checked: false },
      ];
      setLocal(newItems);
      return newItems;
    });

    //notify

    successNotify();

    // cleanup
    setNewItem("");
  };

  const handleDelete = (id) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((i) => i.id !== id);
      setLocal(newItems);
      return newItems;
    });
  };

  const handleMarkOff = (id) => {
    setItems((prevItems) => {
      const newItems = prevItems.map((i) =>
        i.id === id ? { ...i, checked: !i.checked } : i
      );
      setLocal(newItems);
      return newItems;
    });
  };

  return (
    <main className="py-10 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl text-center">GetGroceries</h1>
        <Header
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <List
          items={items}
          handleDelete={handleDelete}
          handleMarkOff={handleMarkOff}
        />
      </div>
      <ToastContainer />
    </main>
  );
};
export default App;
