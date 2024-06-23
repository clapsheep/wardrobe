import { getFullList, getOneUser } from "@/utils/api";

export default async function Page() {
  const users = await getFullList("users");
  const user = await getOneUser("6676fff5e0c508973eb333f8");
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user._id}>{user.username}</li>;
        })}
      </ul>
      <h1>{user.username}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}
