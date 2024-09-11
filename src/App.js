import { DebounceTimer } from "./MyComponents/DebounceTimer";
import { DragDropFeature } from "./MyComponents/DragDropFeature";
import { EmployeeDataBaseSystem } from "./MyComponents/EmployeeDataBaseSystem/EmployeeDataBaseSystem";
import { FollowCursor } from "./MyComponents/FollowCursor";
import { MyWorkPage } from "./MyComponents/MyWorkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Timer } from "./MyComponents/Timer/Timer";
import { Pagination } from "./MyComponents/Pagination/Pagination";
import { SearchOptimization } from "./MyComponents/SearchOptimization/SearchOptimization";
import { Accordian } from "./MyComponents/Accordion/Accordian";
import HandleUseMemoHook from "./MyComponents/PracticeHooks/HandleUseMemoHook";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/my-portfolio" element={<MyWorkPage></MyWorkPage>} />
          <Route
            path="/debounce-time"
            element={<DebounceTimer></DebounceTimer>}
          />

          <Route
            path="/follow-cursor"
            element={<FollowCursor></FollowCursor>}
          />

          <Route
            path="/drag-and-drop"
            element={<DragDropFeature></DragDropFeature>}
          />
          <Route
            path="/employee-database"
            element={<EmployeeDataBaseSystem></EmployeeDataBaseSystem>}
          />
          <Route path="/countdown-timer" element={<Timer></Timer>} />
          <Route path="/pagination" element={<Pagination></Pagination>} />
          <Route
            path="/search-optimization"
            element={<SearchOptimization></SearchOptimization>}
          />

          <Route path="/accordian" element={<Accordian></Accordian>} />
          <Route
            path="/practiceHooks"
            element={<HandleUseMemoHook></HandleUseMemoHook>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
