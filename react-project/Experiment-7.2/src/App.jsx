import "./App.css"; // make sure styles are applied
// Trigger rebuild: import path is correct, should be ./components/LibraryManagement
import LibraryManagement from "./components/LibraryManagement";

function App() {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px" }}>
      <LibraryManagement />
    </div>
  );
}

export default App;