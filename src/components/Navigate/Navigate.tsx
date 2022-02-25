import {NavLink} from "react-router-dom";

export function Navigate() {
  return <div>
    <div><NavLink to={"/login"}>login</NavLink></div>
    <div><NavLink to={"/registration"}>registration</NavLink></div>
    <div><NavLink to={"/profile"}>profile</NavLink></div>
    <div><NavLink to={"/password"}>password</NavLink></div>
    <div><NavLink to={"/passwordNew"}>passwordNew</NavLink></div>
    <div><NavLink to={"/test"}>test</NavLink></div>
  </div>;
}