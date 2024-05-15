import React from "react";

interface HeaderProps {
  amount: number;
  perSecond: number;
}

const Header = ({ amount, perSecond }: HeaderProps) => {
  return (
    <header className="p-5 flex flex-col items-center justify-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-center font-light uppercase">
        grass clicker
      </h1>
      <p className="text-2xl md:text-3xl text-center pt-2 font-light">
        Amount of grass: {amount}
      </p>
      <p className="text-2xl md:text-3xl text-center font-light">
        Grass per second: {perSecond}
      </p>
    </header>
  );
};

export default Header;
