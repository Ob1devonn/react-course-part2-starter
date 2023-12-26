import useAuthStore from "./store";

const LoginStatus = () => {
  //removes the need to use useContext with the specific context
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("dcluse")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
