import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <div>
        <HeaderComponent content="This is an image of a husky" />
      </div>
      <div>
        <ImageComponent
          imageSource="https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          imageAlt="husky"
          customClass="small-image"
        />
      </div>
      <div>
        <ButtonComponent customClass="button-secondary" label="Click me now" />
      </div>
    </div>
  );
}

export default App;
