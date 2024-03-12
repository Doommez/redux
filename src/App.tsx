import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const { users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <div>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    </>
  );
}

export default App;
