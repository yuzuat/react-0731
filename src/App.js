import './App.css';
import {QRCodeSVG} from 'qrcode.react';
import {QRCodeCanvas} from 'qrcode.react';
import { Player, ControlBar, ReplayControl, ForwardControl } from 'video-react';

function App() {
return (
  <div className="App">
    <h2>掃我啊</h2>
    <QRCodeSVG
      value={"https://www.instagram.com/yuzuat1223/"}
      size={150}
      bgColor={"#ffffff"}
      fgColor={"#b67aff"}
      level={"Q"}
      includeMargin={false}
    />
    <h2>再掃一次啊</h2>
    <QRCodeCanvas
      value={"https://www.instagram.com/yuzuat1223/"}
      size={150}
      bgColor={"#ffffff"}
      fgColor={"#b67aff"}
      level={"Q"}
      includeMargin={false}
    />

    <Player
      fluid={false}
      width={600}
      height={400}
      muted={true}
      autoPlay={true}
      
      poster='https://upload.wikimedia.org/wikipedia/commons/6/69/Sintel_Cover_Durian_Project.jpg'
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
    {/* <BigPlayButton position="center" /> */}
    <ControlBar>
      <ReplayControl seconds={5} order={2.1} />
      <ReplayControl seconds={10} order={2.2} />
      <ReplayControl seconds={30} order={2.3} />
      <ForwardControl seconds={5} order={3.1} />
      <ForwardControl seconds={10} order={3.2} />
      <ForwardControl seconds={30} order={3.3} />
    </ControlBar>
    </Player>
  </div>
  );
}

export default App;