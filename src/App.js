import A from "./components/a";
import B from "./components/b";
import SchemaRender from "./sdks/schemaRender";
import mocksSchema from "./constants/mocksSchema";
import SchemaStore from "./sdks/store";
import "./App.css";

function App() {
  const store = new SchemaStore(mocksSchema);
  const schema = store.schema;

  return (
    <div className="App">
      <header className="App-header">
        <SchemaRender schema={schema} components={{ A, B }} store={store} />
      </header>
    </div>
  );
}

export default App;
