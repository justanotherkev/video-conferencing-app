import s from "./video-card.module.css"

function VideoCard() {
  return (
    <div className={s.device_card}>
      <div className={s.name}></div>
      <div className={s.connection_status}></div>
    </div>
  );
}

export default VideoCard;
