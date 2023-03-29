import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navigation Bar
          <span className="badge rounded-pill text-bg-secondary m-1">
            {this.props.totalCounter}
          </span>
        </a>
      </nav>
    );
  }
}
export default NavBar;

// stateless functional component- same result
// const NavBar1 = (props) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand">
//         Navigation Bar
//         <span className="badge rounded-pill text-bg-secondary m-1">
//           {props.totalCounter}
//         </span>
//       </a>
//     </nav>
//   );
// };

//export default NavBar1;
