import MyBooks from "./components/MyBooks/MyBooks";
import Posts from "./components/Posts/Posts";
import PostsSearch from "./components/PostsSearch/PostsSearch";
import MainMenu from "components/MainMenu/MainMenu";
import menuItems from './data/menu.json';
import ToggleButton from "components/ToggleButton/ToggleButton";
import Vote from "components/Vote/Vote";

function App() {
  return (
    <div className="App">
      <MyBooks />
      {/* <Posts /> */}
      {/* <PostsSearch /> */}
      {/* <MainMenu items={menuItems} /> */}
      {/* <ToggleButton
        text='Click me'
      type='button'/> */}
{/* <Vote /> */}
    </div>
  );
}

export default App;
