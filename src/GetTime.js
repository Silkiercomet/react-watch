const GetTime = ({ hrs, min, sec }) => {
  return (
    <main>
      <span className="hrs">{hrs > 12 ? hrs - 12 : hrs}:</span>
      <span className="min">{min < 10 ? `0${min}` : min}:</span>
      <span className="sec">{sec < 10 ? `0${sec}` : sec}</span>
      <span className="sec">{hrs > 12 ? ` -PM` : " -AM"}</span>
    </main>
  );
};

export default GetTime;
