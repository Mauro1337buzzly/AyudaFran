import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter/Counter';
import itemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div>
      <Navbar>
      </Navbar>
      <itemDetailContainer>
      </itemDetailContainer>
      <ItemListContainer>
      </ItemListContainer>
      <Counter init={0} stock={10}>
      </Counter>

    </div>
  );
}

export default App;
