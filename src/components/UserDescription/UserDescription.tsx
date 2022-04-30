import { useTypedSelector } from "src/hooks/useTypedSelector";
import { FaUserFriends, FaUserAlt } from "react-icons/fa";

export const UserDescription = () => {
  const data: any = useTypedSelector((state) => state.user);
  console.log("user >> ", data.user);

  return (
    <div className="user-info">
      <img
        className="user-info__image"
        src={data.user.avatar_url}
        alt={data.user.name}
      />
      <h1 className="user-info__name">{data.user.name}</h1>
      <a href={data.user.html_url} className="user-info__login">
        {data.user.login}
      </a>
      <div className="user-contacts">
        <span className="user-contacts__followers">
          <FaUserFriends className="user-contacts__followers-icon" />
          <p>{data.user.followers}</p>
          followers
        </span>
        <span className="user-contacts__following">
          <FaUserAlt className="user-contacts__following-icon" />
          <p>{data.user.following}</p>
          following
        </span>
      </div>
    </div>
  );
};
