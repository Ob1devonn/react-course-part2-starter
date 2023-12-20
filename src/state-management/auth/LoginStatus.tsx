import useAuth from "./useAuth";

const LoginStatus = () => {
  //removes the need to use useContext with the specific context
  const { user, dispatch } = useAuth();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "ob1devonn" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
