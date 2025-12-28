import "./LayOut.scss";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import ContentLayOut from "./ContentLayOut";
import Messages from "../Messages/Messages";
import NavBar from "../NavBar/NavBar";
import useFetchData from "../Utils/useData";
import Loader from "../Utils/Loader";

const LayOut = () => {
  const { data, loading, resetData, error,messageCount } = useFetchData();
  const navigate = useNavigate();

  if (error) {
    navigate("/login");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="layout">
      <NavBar />
      <Header messageCount={messageCount}/>
      <Messages />
      <ContentLayOut data={data} resetData={resetData} />
    </div>
  );
};

export default LayOut;
