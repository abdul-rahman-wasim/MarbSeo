import { useState } from "react";
import { SideNav } from "./components/SideNav";
import { Content } from "./pages/Content";
import { Overview } from "./pages/Overview";

export const App = () => {
  const [showOver, setShowOver] = useState(true);
  return (
    <div>
      <SideNav navSwitch={setShowOver} navCurrent={showOver} />
      {showOver ? <Overview /> : <Content />}
    </div>
  );
};