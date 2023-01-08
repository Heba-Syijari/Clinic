import { configureStore } from "@reduxjs/toolkit";
import TupeReducer from "../GlobalData/SystemDashBoard/TupeSlice";
import UnitReducer from "../GlobalData/SystemDashBoard/UnitSlice";
import TestMethodReducer from "../GlobalData/SystemDashBoard/TestMethodSlice";
import GenderReducer from "../GlobalData/SystemDashBoard/GenderSlice";
import DBLabReducer from "../GlobalData/SystemDashBoard/LabSDBSlice";
import AnalysisSBDReducer from "../GlobalData/SystemDashBoard/AnalysisSBDSlice";
import ManeReportSBDReducer from "../GlobalData/SystemDashBoard/ManeReportSDBSlice";

export const store = configureStore({
  reducer: {
    tupe: TupeReducer,
    unit: UnitReducer,
    test: TestMethodReducer,
    gender: GenderReducer,
    DBLab: DBLabReducer,
    DBanalysis: AnalysisSBDReducer,
    DBManeReport: ManeReportSBDReducer,
  },
});
