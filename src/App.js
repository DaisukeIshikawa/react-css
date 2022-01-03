import { CssModules } from "./component/CssModules";
import { StyledJsx } from "./component/StyledJsx";
import { StyledComponents } from "./component/StyledComponents";
import { Emotion } from "./component/Emotion";
import { InlineStyle } from "./component/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
