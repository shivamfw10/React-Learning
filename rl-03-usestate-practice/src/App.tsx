import "./App.css";

import CharacterCounter from "./06_CharacterCounter/character-counter";
import ColorPicker from "./04_Color_Picker/colorpicker";
import Counter from "./01_Counter/counter";
import ImageCarousel from "./07_Image_Carousel/image-carousel";
import TodoList from "./05_Todo_List/todolist";
import ToggleButtonFeature from "./02_Toggle_Button/toggleButton";
import UserForm from "./03_Userform/userform";
import DynamicDropdown from "./08_Dynamic-Dropdown/dynamic-dropdown";
import ErrorHandlingLogin from "./09_Error_handling/error-handling";
import Pagination from "./10_Pagination/pagination";
import ChatApp from "./11_Chat-App/chat-app";

function App() {
  return (
      <div className="app-content">
        <main>
          <h3 className="topic-heading">React useState : Beginner Level</h3>
          <Counter></Counter>

          <UserForm></UserForm>

          <ToggleButtonFeature></ToggleButtonFeature>

          <ColorPicker></ColorPicker>

          <TodoList></TodoList>
          <h3 className="topic-heading">React useState : Intermediate Level</h3>
          <CharacterCounter></CharacterCounter>
          <ImageCarousel></ImageCarousel>
          <DynamicDropdown></DynamicDropdown>
          <ErrorHandlingLogin></ErrorHandlingLogin>
          <Pagination></Pagination>

          <ChatApp></ChatApp>
        </main>
      </div>
  );
}

export default App;
