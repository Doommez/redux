import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  const { users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  console.log("2");
  console.log("3");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("main2");

  return (
    <>
      <div>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
        <PostContainer />
      </div>
    </>
  );
}

export default App;
//TODO закончил на 28 минуте
