import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useActions } from "src/hooks/useActions";

export const Header = () => {
  const [userName, setUserName] = useState<string>("");
  const { getUser } = useActions();
  return (
    <div className="header">
      <AiFillGithub className="header__icon" />
      <div className="header__search-panel">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              await getUser(userName);
            }
          }}
        />
      </div>
    </div>
  );
};
