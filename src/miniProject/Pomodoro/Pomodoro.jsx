/* eslint-disable no-unused-vars */
import { Typography, Button, Modal, ConfigProvider } from "antd";
import {CaretRightOutlined, PauseOutlined, ForwardOutlined, SettingOutlined} from "@ant-design/icons"
const { Title } = Typography;
import { useEffect, useState } from "react";
import "./styles.css";
function Pomodoro() {
  const [currentTime, setCurrentTime] = useState("");
  const [count, setCount] = useState(100);
  const [workingTime, setWorkingTime] = useState(10);
  const [relaxTime, setRelaxTime] = useState(5);
  const [mode, setMode] = useState("Get Ready!");
  const [stop, setStop] = useState(true);

  const date = new Date();
  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
  }, [currentTime]);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (stop === false) {
        if (count > 0) {
          setCount(count - 1);
        } else {
          if (mode === "Working") {
            setMode("Relax");
            setCount(relaxTime);
          } else {
            setMode("Working");
            setCount(workingTime);
          }
        }
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [stop, count, relaxTime, workingTime]);

  function start() {
    setStop(false);
    setMode("Working");
  }
  function pause(){
    setStop(true);
  }
  function switchMode() {
    if(mode === "Working"){
      setMode("Relax");
      setCount(5);
    }else{
      setMode("Working");
      setCount(100);
    }
  }
  function ConvertTime(second){
    const minutes = Math.floor(second/60);
    const seconds = second % 60;
    return(
      <div style={{fontSize: 70, marginBottom:150, marginTop:30, fontWeight:100, color: 'white', fontFamily: 'sans-serif'}}>
        <div className="time">{("0" + minutes).slice(-2)}</div>  :  <div className="time">{("0" + seconds).slice(-2)}</div>
      </div>);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#70a529'
      }
    }}>
    <div className="Setting" style={{textAlign: 'right', marginBottom: 10, marginRight: 10,}}>
      <Button size="larger"  onClick={showModal}><SettingOutlined /></Button>
      <Modal title="Settings" width='fit-content' centered={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="modal-label">
          <label >Working time: </label>
          <input type="number" value={workingTime} onChange={(e)=>(setWorkingTime(e.target.value))}/> seconds
        </div>
        <div className="modal-label">
          <label>Relax time: </label>
          <input type="number" value={relaxTime} onChange={(e)=>(setRelaxTime(e.target.value))}/> seconds
        </div>
      </Modal>
    </div>
    <div className = {`container ${mode}`}>
      <div className="Title" style={{marginBottom: 180, marginTop: 40}}>
        <Title style={{color: mode==="Get Ready!"?'black':'white' }}>{mode}</Title>
      </div>
      <div className="hour">
        {/* <div>{currentTime}</div> */}
        {ConvertTime(count)}
      </div>
      <div>
        {
          mode === "Get Ready!"? (
            <div> 
              <Button style={{marginRight: 3}} onClick={start}><CaretRightOutlined/></Button>
            </div>
          ):(
            <div> 
              {stop?(<Button style={{marginRight: 3}} onClick={start}><CaretRightOutlined/></Button>):(<Button style={{marginRight: 3}} onClick={pause}><PauseOutlined/></Button>)}
              <Button  onClick={switchMode}><ForwardOutlined/></Button>
            </div>
          )
        }
      </div>
    </div>
    </ConfigProvider>
  );
}
export default Pomodoro;
