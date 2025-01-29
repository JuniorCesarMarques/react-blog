import styles from "./Videos.module.css";

import { useContext } from "react";

import VideoCard from "../../../video-card/VideoCard";
import PostVideoForm from "../../../form/post-video-form/PostVideoForm";
import { Context } from "../../../../context/UserContext";

// Thumbs
import thumbOnix from "../../../../assets/thumbnails/onix.jpg";
import thumbFz25 from "../../../../assets/thumbnails/fz25.jpg";

const videos = [
  {
    title: "CHEVROLET ONIX 1.0 LT 2014 - A MELHOR VERSÃO DA PRIMEIRA GERAÇÃO?",
    src: thumbOnix,
    id: 1,
  },
  {
    title: "FZ25 2023 VALE A PENA?",
    src: thumbFz25,
    id: 2,
  },
];

const Videos = () => {
  const { authenticated } = useContext(Context);

  return (
    <div className={styles.container}>
      {authenticated === "admin" && <PostVideoForm />}
      {videos.map((video) => (
        <VideoCard key={video.id} title={video.title}>
          <img src={video.src} alt="onix" />
        </VideoCard>
      ))}
    </div>
  );
};

export default Videos;
