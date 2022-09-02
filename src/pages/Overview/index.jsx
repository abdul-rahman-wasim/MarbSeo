import "../../assets/css/styles.css";
import { CircularProgress } from "@mui/material";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";

export const Overview = () => {
  return (
    <div className="content">
      <div className="headingCont">
        <h1 className="headingContent">Website Performance Overview Dashboard</h1>
      </div>
      <div className="cardContent">
        <div className="od_performance">
          <div className="head_div">
            <div className="h3">Overall Desktop Performance</div>
            <div className="head_btn">
              <a href="">RECHECK SCORE</a>
            </div>
          </div>
          <div className="performance_progress">
            <div className="title">
              <h5>
                Overall Desktop Performance: <span>Average (78%)</span>
              </h5>
            </div>
            <div className="p_bar">
              <div className="p_bg">
                <div className="p_progress"></div>
              </div>
            </div>
            <div className="progress_tiles">
              <div className="progress_tile1">
                <div className="left">
                  <div className="p_number1">
                    <p>87%</p>
                  </div>
                  <div className="p_name">
                    <p>Accessibility Score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress
                    variant="determinate"
                    className="MuiCircularProgress-colorPrimary"
                    thickness={9}
                    value={87}
                  />
                </div>
              </div>
              <div className="progress_tile2">
                <div className="left">
                  <div className="p_number2">
                    <p>0%</p>
                  </div>
                  <div className="p_name">
                    <p>Best Practices Score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress variant="determinate" thickness={9} value={0} />
                </div>
              </div>
              <div className="progress_tile3">
                <div className="left">
                  <div className="p_number3">
                    <p>100%</p>
                  </div>
                  <div className="p_name">
                    <p>SEO Score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress variant="determinate" thickness={9} value={100} />
                </div>
              </div>
              <div className="progress_tile4">
                <div className="left">
                  <div className="p_number4">
                    <p>100%</p>
                  </div>
                  <div className="p_name">
                    <p>Progressive Web App score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress variant="determinate" thickness={9} value={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="audit_results">
            <div className="title">
              <IoIosArrowDown className="icon" />
              <h4>Audit results requiring attention:</h4>
            </div>
            <div className="results">
              <div className="question">
                <div className="q1">
                  <BsCircleFill className="bullet" />
                  <p>Ensure text remains visible during webfont load</p>
                </div>
                <IoIosArrowBack className="q_icon" />
              </div>
              <div className="question">
                <div className="q1">
                  <BsCircleFill className="bullet" />
                  <p>Ensure text remains visible during webfont load</p>
                </div>
                <IoIosArrowBack className="q_icon" />
              </div>
              <div className="question">
                <div className="q1">
                  <BsCircleFill className="bullet" />
                  <p>Ensure text remains visible during webfont load</p>
                </div>
                <IoIosArrowBack className="q_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardContent">
        <div className="od_performance">
          <div className="head_div">
            <div className="h3">Overall Mobile Performance</div>
            <div className="head_btn">
              <a href="">RECHECK SCORE</a>
            </div>
          </div>
          <div className="performance_progress">
            <div className="title mtitle">
              <h5>
                Overall Mobile Performance: <span>poor (26%)</span>
              </h5>
            </div>
            <div className="p_bar">
              <div className="p_bg">
                <div className="p_progress mbar"></div>
              </div>
            </div>
            <div className="progress_tiles">
              <div className="progress_tile1">
                <div className="left">
                  <div className="p_number1">
                    <p>87%</p>
                  </div>
                  <div className="p_name">
                    <p>Accessibility Score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress
                    variant="determinate"
                    className="MuiCircularProgress-colorPrimary"
                    thickness={9}
                    value={87}
                  />
                </div>
              </div>
              <div className="progress_tile2">
                <div className="left">
                  <div className="p_number2">
                    <p>0%</p>
                  </div>
                  <div className="p_name">
                    <p>Best Practices Score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress variant="determinate" thickness={9} value={0} />
                </div>
              </div>
              <div className="progress_tile3">
                <div className="left">
                  <div className="p_number3">
                    <p>100%</p>
                  </div>
                  <div className="p_name">
                    <p>SEO Score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress variant="determinate" thickness={9} value={100} />
                </div>
              </div>
              <div className="progress_tile4">
                <div className="left">
                  <div className="p_number4">
                    <p>100%</p>
                  </div>
                  <div className="p_name">
                    <p>Progressive Web App score</p>
                  </div>
                </div>
                <div className="progress_circle">
                  <CircularProgress variant="determinate" thickness={9} value={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="audit_results">
            <div className="title">
              <IoIosArrowDown className="icon" />
              <h4>Audit results requiring attention:</h4>
            </div>
            <div className="results">
              <div className="question">
                <div className="q1">
                  <BsCircleFill className="bullet" />
                  <p>Ensure text remains visible during webfont load</p>
                </div>
                <IoIosArrowBack className="q_icon" />
              </div>
              <div className="question">
                <div className="q1">
                  <BsCircleFill className="bullet" />
                  <p>Is not configured for a custom splash screen</p>
                </div>
                <IoIosArrowBack className="q_icon" />
              </div>
              <div className="question">
                <div className="q1">
                  <BsCircleFill className="bullet" />
                  <p>Does not provide a valid `apple-touch-icon`</p>
                </div>
                <IoIosArrowBack className="q_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
