import React from "react";

function Header({ money, total }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <header className="header">
          {" "}
          Xərcləmək üçün<span> {money - total}</span> AZN pulunuz qaldı
        </header>
      )}
      {total === 0 && (
        <header className="header">
          Xərcləmək üçün <span>{money}</span> AZN qədər pulunuz var
        </header>
      )}
      {money - total === 0 && (
        <header className="header">Can, ay kasıb! Pulun bitdi!</header>
      )}
      <style jsx>
        {`
          .header {
            background: linear-gradient(to bottom, #20b820, #14be2a);
            position: sticky;
            top: 0;
            height: 60px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            letter-spacing: 1px;
          }
          .header span {
            font-weight: bold;
            margin: 0 10px;
          }
        `}
      </style>
    </>
  );
}

export default Header;
