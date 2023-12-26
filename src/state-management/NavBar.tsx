import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  //can pass a parameter to useCounterStore to only re-render when a specific property is changed
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
