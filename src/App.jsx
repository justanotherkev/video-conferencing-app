// import NavIcon from "./components/nav-icon/nav-icon";
import {
  AccountCircleRounded,
  AddAPhoto,
  AddAPhotoRounded,
  AddBoxRounded,
  AddReaction,
  AssignmentTurnedInSharp,
  AttachFileRounded,
  CalendarMonthRounded,
  Camera,
  CopyAllRounded,
  EmojiEmotions,
  EmojiEmotionsRounded,
  Expand,
  Home,
  Mic,
  NotificationAddRounded,
  Notifications,
  RecordVoiceOver,
  Settings,
  Share,
  TranslateRounded,
  VideoCall,
  Videocam,
} from "@mui/icons-material";
import "./App.css";
import VideoCard from "./components/video-card/video-card";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="side_top"></div>
        <div className="side_middle">
          <Home style={{ fontSize: 25 }} />
          <AccountCircleRounded style={{ fontSize: 25 }} />
          <Share style={{ fontSize: 25 }} />
          <CalendarMonthRounded style={{ fontSize: 25 }} />
          <Notifications style={{ fontSize: 25 }} />
          <Settings style={{ fontSize: 25 }} />
        </div>
        <div className="side_bottom"></div>
      </div>

      <div className="middle">
        <div className="header"></div>
        <div className="video_cards">
          <VideoCard />
        </div>


     





         {/* WORK ON THE FOOTER SECTION
          */}
        <div className="footer">
          <div className="station">
            
          </div>

          <div className="microphone">
            <Mic />
          </div>

          <div className="video">
            <Videocam />
          </div>


          
          <div className="end_call">END CALL</div>
          <div className="record">
            <Expand />
          </div>
          <div className="reaction">
            <EmojiEmotions />
          </div>
        </div>




      </div>

      <div className="chat">
        <div className="message_box_header"></div>
        <div className="message_box"></div>
        <div className="message_options">
          <EmojiEmotionsRounded />
          <AddAPhotoRounded />
          <AttachFileRounded />
          <TranslateRounded />
          <CopyAllRounded />
        </div>
        <div className="message_textbox">
          <div className="text_field">Type a message...</div>
          <button className="send_button">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default App;
