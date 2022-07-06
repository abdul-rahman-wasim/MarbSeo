import "../../assets/css/styles.css";
export const Content = () => {
  return (
    <div className="content">
      <div className="headingCont">
        <h1 className="headingContent">Automate Meta Titles and Meta Descriptions</h1>
      </div>
      <div className="cardContent">
          <div className="content_head_div">
              <div className="h3">Overall Desktop Performance</div>
              <div className="line"></div>
              <p>Activating and Using this feature will override any existing Meta Title and Meta Description</p>
          </div>
          <div className="tabs">
            <div className="tabs_titles">
              <ul>
                <li><a href="" >Homepage</a></li>
                <li><a href="">Product Pages</a></li>
                <li><a href="">Collection Pages</a></li>
                <li><a href="">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="tabline"></div>
          <div className="home_sec">
              <div className="status">
                <div className="feature_status">
                  <p>Feature Status:</p>
                  <a href="">Inactive</a>
                </div>
                <div className="activate">
                <a href="">Activate</a>
                </div>
              </div>
          </div>
          <div className="form_section">
            <div className="form_title">
              <h4>Enter your custom Meta Title and Meta Descriptions below</h4>
            </div>
            <form className="form" action="">
              <div className="form_input">
              <label htmlFor="">Homepage Meta Title</label>
              <input type="text" />
              </div>
              <div className="form_input f2">
              <label htmlFor="">Homepage Meta Description</label>
              <input type="text" />
              </div>
              <a href="" className="form_btn">Save</a>
            </form>
          </div>
      </div>
    </div>
  );
};
