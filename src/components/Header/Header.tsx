import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

export const Header = () => {
  const [userName, setUserName] = useState<string>();
  return (
    <div className="header">
      <AiFillGithub className="header__icon" />
      <div className="header__search-panel">
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
    </div>
  );
};
