import { Route, Routes } from "react-router-dom";
import "./index.css";
import AddApplication from "./views/AddApplication";
import AppliedJob from "./views/AppliedJob";
import AppliedJobs from "./views/AppliedJobs";
import ClosedJobs from "./views/ClosedJobs";
import EditJob from "./views/EditJob";
import Feedback from "./views/Feedback";
import OpenJobs from "./views/OpenJobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppliedJobs />} />
        <Route path="/add-application" element={<AddApplication />} />
        <Route path="/open" element={<OpenJobs />} />
        <Route path="/closed" element={<ClosedJobs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/job/:id" element={<AppliedJob />} />
        <Route path="/edit/:id" element={<EditJob />} />
      </Routes>
    </>
  );
}

export default App;
