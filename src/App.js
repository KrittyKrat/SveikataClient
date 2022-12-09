import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Institutions from './pages/Institutions/Institutions';
import Register from './pages/Register';
import Login from './pages/Login';
import EditInstitution from './pages/Institutions/EditInstitution';
import AddInstitution from './pages/Institutions/AddInstitution';
import RemoveInstitution from './pages/Institutions/RemoveInstitution';
import Departments from './pages/Departments/Departments';
import EditDepartment from './pages/Departments/EditDepartment';
import AddDepartment from './pages/Departments/AddDepartment';
import RemoveDepartment from './pages/Departments/RemoveDepartment';
import Specialists from './pages/Specialists/Specialists';
import AddSpecialist from './pages/Specialists/AddSpecialist';
import EditSpecialist from './pages/Specialists/EditSpecialist';
import RemoveSpecialist from './pages/Specialists/RemoveSpecialist';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/institutions" element={<Institutions />} />
        <Route path="/addInstitution" element={<AddInstitution />} />
        <Route path="/editInstitution/:institutionId" element={<EditInstitution />} />
        <Route path="/removeInstitution/:institutionId" element={<RemoveInstitution />} />

        <Route path="/institutions/:institutionId/departments" element={<Departments />} />
        <Route path="/institutions/:institutionId/addDepartment" element={<AddDepartment />} />
        <Route path="/institutions/:institutionId/editDepartment/:departmentId" element={<EditDepartment />} />
        <Route path="/institutions/:institutionId/removeDepartment/:departmentId" element={<RemoveDepartment />} />

        <Route path="/institutions/:institutionId/departments/:departmentId/specialists" element={<Specialists />} />
        <Route path="/institutions/:institutionId/departments/:departmentId/addSpecialist" element={<AddSpecialist />} />
        <Route path="/institutions/:institutionId/departments/:departmentId/editSpecialist/:specialistId" element={<EditSpecialist />} />
        <Route path="/institutions/:institutionId/departments/:departmentId/removeSpecialist/:specialistId" element={<RemoveSpecialist />} />

      </Routes>
    </>
  );
}

export default App;
