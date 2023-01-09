import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import SuppliersOfficeName from "./SuppliersOfficeName";
import SuppliersPaidBills from "./SuppliersPaidBills";
import Staff from "./Staff";
import EditEmployee from "./EditEmployee";
import Analytic from "./Analytic";
import Patients from "./Patients";
import Store from "./Store";
import Labs from "./Labs";
import Doctors from "./Doctors";
import Reports from "./Reports";
import SystemSettings from "./SystemSettings";
import BasicPlugins from "./BasicPlugins";
import Login from "./Login";
import Accounting from "./Accounting";
import DoctorDashBoard from "./DoctorDashBoard";
import SystemDashBoard from "./SystemDashBoard";
import LabsSystemDB from "./SystemDashBoard/LabsSystemDB";
import AnalyticSystemDB from "./SystemDashBoard/AnalyticSystemDB";
import QuantitySystemDB from "./SystemDashBoard/QuantitySystemDB";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Provider } from "react-redux";
import { store } from "./app/store";
import MeasuringUnit from "./SystemDashBoard/MeasuringUnit";
import TestMethodDB from "./SystemDashBoard/TestMethodDB";
import LoginSystemDB from "./SystemDashBoard/LoginSystemDB";
import GenderSystemDB from "./SystemDashBoard/GenderSystemDB";
import ProfileSDB from "./SystemDashBoard/ProfileSDB";
import SuppliersOfficeBills from "./SuppliersOfficeBills";
import ShowEmployee from "./ShowEmployee";
import axios from "axios";
import PrivateRoutes from "./PrivateRoutes";

const queryClient = new QueryClient();
function App() {
  axios.defaults.baseURL = "https://aurora-team.com/labs-obada/api";
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");
  return (
    <div className="bg-[#F2F4F7] h-full w-full  ">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/DoctorDashBoard" element={<DoctorDashBoard />} />
            <Route path="/SystemDashBoard/Login" element={<LoginSystemDB />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/SystemDashBoard" element={<SystemDashBoard />} />
              <Route
                path="/SystemDashBoard/Labs"
                element={
                  <QueryClientProvider client={queryClient}>
                    <LabsSystemDB />
                  </QueryClientProvider>
                }
              />
              <Route
                path="/SystemDashBoard/Analytic"
                element={<AnalyticSystemDB />}
              />
              <Route
                path="/SystemDashBoard/Quantity"
                element={<QuantitySystemDB />}
              />
              <Route
                path="/SystemDashBoard/MeasuringUnit"
                element={<MeasuringUnit />}
              />
              <Route
                path="/SystemDashBoard/TestMethod"
                element={<TestMethodDB />}
              />
              <Route
                path="/SystemDashBoard/Gender"
                element={<GenderSystemDB />}
              />
              <Route
                path="/SystemDashBoard/ProfileSDB"
                element={<ProfileSDB />}
              />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Accounting" element={<Accounting />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Suppliers" element={<SuppliersOfficeName />} />
            <Route
              path="/Suppliers/OfficeBills"
              element={<SuppliersOfficeBills />}
            />

            <Route
              path="/Suppliers/PaidBills"
              element={<SuppliersPaidBills />}
            />

            <Route path="/Staff" element={<Staff />} />
            <Route path="/Staff/ShowEmployee" element={<ShowEmployee />} />

            <Route path="/Staff/EditEmployee" element={<EditEmployee />} />
            <Route path="/Analytic" element={<Analytic />} />
            <Route path="/Patients" element={<Patients />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Labs" element={<Labs />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Reports" element={<Reports />} />
            <Route
              path="/Settings/SystemSettings"
              element={<SystemSettings />}
            />
            <Route path="/Settings/BasicPlugins" element={<BasicPlugins />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
