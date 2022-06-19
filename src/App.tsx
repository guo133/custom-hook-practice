import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./componets/UserCard";
import "./styles.css";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickfetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickfetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
