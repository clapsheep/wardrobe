import { getFullList, getOneUser } from "@/utils/api";

export default async function Page() {
  const users = await getFullList("user");
  const user = await getOneUser("667bb72fdaff012e07bebfef");

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user._id}>{user.username}</li>;
        })}
      </ul>

      <p>유저 하나만{user.username}</p>
    </div>
  );
}
