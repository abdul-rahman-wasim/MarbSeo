import "../../assets/css/styles.css";
import logo from "../../assets/img/LOGO.png";
import { ImHome2 } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDatabase } from "react-icons/ai";
export const SideNav = (props) => {
  const { navSwitch, navCurrent } = props;
  return (
    <div>
      <div className="sidebar">
        <div className="profile_info">
          <img src={logo} className="profile_image" alt="" />
          <h4>Express SEO by MarbGroup</h4>
        </div>
        <div className="sidenav">
          <a className={navCurrent ? "select" : ""} onClick={() => navSwitch(true)}>
            <ImHome2 />
            <span>Overview</span>
            <IoIosArrowForward />
          </a>
          <a className={navCurrent ? "" : "select"} onClick={() => navSwitch(false)}>
            <AiOutlineDatabase />
            <span>Content SEO</span>
            <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};
