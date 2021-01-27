import Axios from "axios";

export const AvatarSrc = () => {
  let ID = Math.floor(Math.random() * 1000);
  return Axios.get(`https://picsum.photos/id/${ID}/info`);
};
