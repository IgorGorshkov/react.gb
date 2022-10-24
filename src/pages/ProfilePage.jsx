import Toggler from "../redux/toggle";
function ProfilePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h1>Profile Page</h1>
      <Toggler />
    </div>
  );
}

export default ProfilePage;
