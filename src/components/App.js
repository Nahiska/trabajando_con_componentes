import "../assets/css/app.css";
import { ContentWrapper } from "./ContentWrapper/index";
import { SideBar } from "./SiderBar/index";

function App() {
      return (
            <div id="wrapper">
                  <SideBar />
                  <ContentWrapper />
            </div>
      );
}

export default App;
