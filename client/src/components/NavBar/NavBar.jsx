import React from "react";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav id="navbar">
        <a href="/">
      <div id='logo-container'>
        <div>
          <svg
            width="33"
            height="28"
            viewBox="0 0 33 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 28V0H33V6.125H19.9106V10.9375H31.9187V17.0625H19.9106V21.875H32.9431V28H12Z"
              fill="#2EC5CE"
            />
            <path
              opacity="0.7"
              d="M20 28V0H0V6.125H12.4661V10.9375H1.02981V17.0625H12.4661V21.875H0.0541992V28H20Z"
              fill="#2EC5CE"
            />
          </svg>
        </div>
        <span>EtherExchange</span>
      </div>
        </a>
    </nav>
  );
}
