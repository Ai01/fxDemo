import A from './components/a';
import B from './components/b';
import SchemaRender from './sdks/schemaRender';
import mocksSchema from './constants/mocksSchema';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SchemaRender schema={mocksSchema} components={{A, B}} />
      </header>
    </div>
  );
}

export default App;
