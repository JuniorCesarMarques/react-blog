import styles from "./VideoCard.module.css";

import { FaYoutube } from "react-icons/fa6";

const VideoCard = ({ children, title }) => {
  return (
    <div className={styles.container}>
    <div className={styles.video_container}>
      <FaYoutube />
      {children}
    </div>
    
    <p>{title}</p>
    </div>
   )
};

export default VideoCard;
