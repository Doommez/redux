import { FC, useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

const UserList: FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>error....</div>;
  }
  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default UserList;
