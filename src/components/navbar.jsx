// import React, { Component } from "react";

//Stateless Functional Component
const Navbar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="//#endregion">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}
//State Functional Component
// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default Navbar;
