import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { IoTrashOutline } from "react-icons/io5";
import HistopathologySystemDB from "./Class Analysis/HistopathologySystemDB";
import ManeReportSystemDB from "./Class Analysis/ManeReportSystemDB";
import CultureReportSystemDB from "./Class Analysis/CultureReportSystemDB";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllDBIntrputik,
  addToDBIntrputik,
  selectDBIntrputiks,
} from "../../../GlobalData/SystemDashBoard/IntrputikSDBSlice";
import EditIntrputikSDB from "./Class Analysis/IntrputikSDB/EditIntrputikSDB";
import DeleteIntrputikSDB from "./Class Analysis/IntrputikSDB/DeleteIntrputikSDB";
import axios from "axios";
import { selectDBManeReports } from "../../../GlobalData/SystemDashBoard/ManeReportSDBSlice";
import { selectDBCultureReports } from "../../../GlobalData/SystemDashBoard/CultureReportSDBSlice";

function IntrputikSystemDB({ show }) {
  {
    /* u have to get the Examination method and intake tube from api  to put them in the drop down*/
    /* formData i pust some of the input values inside it , but we need the values of Examination method and  intake tube*/
  }
  const ManeReportSelector = useSelector(selectDBManeReports);
  const CultureReportSelector = useSelector(selectDBCultureReports);
  const IntrputikSelector = useSelector(selectDBIntrputiks);
  const dispatch = useDispatch();
  const [ClassAnalysis, SetClassAnalysis] = useState("");
  const [intrputik, SetIntrputik] = useState(false);
  let formData = new FormData();
  const [Data, SetData] = useState();
  const [id, SetId] = useState(0);
  const [OpenEditIntrputik, setOpenEditIntrputik] = useState(false);
  const [OpenDeleteIntrputik, setOpenDeleteIntrputik] = useState(false);
  const [MethodList, setMethodList] = useState();
  const [UnitList, setUnitList] = useState();
  const [getData, setgetData] = useState(false);
  const [Value, setValue] = useState();
  const [NormalRange, setNormalRange] = useState();

  const GetUnits = async () => {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmU1OTAyOTQwNjY1OWQ1OGVlMzQ4MTMzOWZkNDlmOThhYzAxMDNjODcyZjgyNzVjNjY2ODc4NThhZDNkZjBjOGFhOGVmZTM4YjJkZmQyZjAiLCJpYXQiOjE2NzMwMjY0ODAuNjE5OTI2LCJuYmYiOjE2NzMwMjY0ODAuNjE5OTI5LCJleHAiOjE3MDQ1NjI0ODAuNjE0MTE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.alMtvstRFur9U7Ue5bvu2QDE_QVsQBDmw-VW7t7LEOO7feDxspvm77Zt-7Yi9JpWZ1hgOj2xRYF3LkkG4oakLXA2as8JwAxU7cTrD1jOoVdHsQTL2qwMj63hYKi9TwYw-JqAWB5F9aoULfW9MlCgOAkUIFvlZAIHuPAjwEhDKvFQhpQbpWAAs3MswitX0s8XR6roWEooTAi6ITWulnnOKComQTRnYxPh_ziy8iJUovjzW2sZ6TWY7nJdu1mjtYUaBRF0qlLCUEpv8EAu7-z4r3vNTIhFSp5jjtbWX3Cc_0SphfxApim1wCVPRJ6Ba2oI9DWf8MvILHKCxICRyybH4R5rCe64PkZqItY2ft9_K1TypWs-xiULh1-5-_Bg6Ris9sEdP7x-zQy4bxv0ioD1XO9sFT8a9btQdMGkReXDaXzcbIQxrWl_T1BA-XPAg9mNrZY6buhJPPw_CqbPzyZ7ZaQiFReVJBMCoH3BBApdKG4XXUnGlsjidPeyaC2s1ibUBYlwrQUpm6hnvMxNJivyH8IZ76hRSsc8_LDfRKcZ3rzb5UOxm27TjJaL1A1U6xsUwXRfFhW1C4oj1ASaSnk68h-pfvpZqn_fctEl9veSEx_4-Is2Wnw9h4mSS3KRynGgLmqp_jj7dQojFkrQxgsVkfNYkgYkDlCIh4FG6Y2tLqM";
    await axios
      .get(`https://aurora-team.com/labs-obada/api/admin-scope/get-TestUnits`, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUnitList(response.data);
      });
  };

  const GetTestMethods = async () => {
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTE5MGJlNTY5MTE0NmFkYjNiN2UwNmNjN2RiNDlhNzNkMjQ2MjllY2QzZTIxNWUzMmI4MzQyNmE2ZmVkNjU5MDYzYTgzNmEyZjg4OWE2YTciLCJpYXQiOjE2NzMxNjM3MzYuNzI3NTgzLCJuYmYiOjE2NzMxNjM3MzYuNzI3NTg4LCJleHAiOjE3MDQ2OTk3MzYuNjE3NTY5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.n8tLmPQcMwm0PD_dSDV1VAo5X2F2Jae-YPMdbc_7w-BXrSkBcBGGfWji9S3Zr1zS1-lw05ASj7A9WNWNWeDcxh2z59ajh9ERTwZu4ZtREvdtgGdPb9ebo0-nxtj_RP9ftjXXOdhN0goLSvgYwIARUQwslNRZOBgrmvwqLDejk-OuxAN0e9iPRMOMsEh6afFaZ7Nwt2rxWN0hGgLT4nTF_G9WtZyaby63djv3qnHJ7TMVRLtlnSqCPn44UricPZMCE7cm7QqMMVXW5Ln4jjlQS9L-cursOkkSwHsN2KhOvxlOdRdafc2PQDCC5W1OoSnwPByk2gu4honrfrs3_mcL0I7PhovGnHeXqRpamOaC-JWd96iJaw5TLtqHRuUOuHExQKjIgetZ5cUGcAJ6VAbez1ukSwE8oxiUCOWsSsQlkbqagp1ggsF4FEceO_q-ocy9SQ_RZJvprMEfv2s3Ls9WoV1lL57wME3hoGD8qFRK-PqWwQtC7HgyCDEyrkkW3nxw_4h1JdbAhns7RcIdwDQOQDsLnDvT0_KGg0mQXF1LrXKGnLG_9suOUh_jPSi71UDJaBjjNMFfcwwydYak-l9wYLGymVLBia43AJ0FieXV3nShNkAxeqkmTCg4QfrSRiv5q6nsJGJJIhNepKS6sy0v0_0y7qEpsHQ7Sz3InOcapaU";
    await axios
      .get(
        `https://aurora-team.com/labs-obada/api/admin-scope/get-TestMethods`,
        axios.interceptors.request.use(function (config) {
          let token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTJmZjE5MzE4OWMxNmVkNDkxZDQ2MGI5YTRkNWM1YTg3MzAwMGJkM2IxYWFmMmYxZmJhZDI5YjkzZTAyNzI0N2E1ZWU1N2YzNDJhMTVkN2MiLCJpYXQiOjE2NzMxNjQ5NzQuNTc5ODkzLCJuYmYiOjE2NzMxNjQ5NzQuNTc5ODk1LCJleHAiOjE3MDQ3MDA5NzQuNTc4Nzk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X6askOtAf34TnVMyd3LWosbvm1nIOlmgm3zMUja7zyNMXEjwnegkHf-lEuIXWZvc24PW1AjWt9RMxrWN017XBxG2wCIRsCXCkQt2-6ycq-tOvwkrPaKDsqj9WVSBEhOL2n_mtwgvs0WVqDhoa3FlO89E9YuCDFjsinPIOljwsnOmvNteO2UOQhXoQ_zov1qigxxqWA5Is8x2_cfuXyqH_cq5EVPcig_-5yTs9tGQW4MdftG35bn4hNwLui2aMo3uNXptoJhbWdUmBywDriSl2Zf_NNk55mixl9ThEzpHJ60KI6rUeXGAgvLh0DZzfQSPoIAtejmFsaNADfVbkGxLdJ7s5O8a_65bWB5_S-eTWuXWkEEDLyFZur1380iUcgaO-qHKBOf3-I7dtXnW-mbeRcKFLnkqnXfUCo-WCojJ9aiQRE79Rtuyle9BwcrXIy-Cv45DHRf5NzKBTEFvWof2Qt_WXS-rbTHfAkgLfif-bFxQttlfupq974g6P7dJrpgjpdmT1lqHymgqHfm7YxzibH2AJcPv6EW6C3Nsaxojb0qrcq2FKgelT1mLOVyMv8dcG1sG9r7TY3lA8AUk8XzYvVsepkbSVFn1TvmcaJqxRJciAvJW6CHs98PFqAf404yrU1WzVwu5pXGCgyTxjXhCqAIxMlBfaDVjzZKmmMuCkJM";
          config.headers.Authorization = token ? `Bearer ${token}` : "";
          return config;
        })
      )
      .then((response) => {
        setMethodList(response.data);
      });
  };

  useEffect(() => {
    GetUnits();
    GetTestMethods();
  }, []);

  const AddToTableIntrputik = () => {
    let Data = {
      id: IntrputikSelector.length + 1,
      name: document.getElementById("IntrputikName").value,
    };
    dispatch(addToDBIntrputik(Data));
    console.log(IntrputikSelector);
  };
  const DeleteIntrputik = (id) => {
    SetId(id);
    setOpenDeleteIntrputik(true);
  };
  const EditIntrputik = (id) => {
    SetId(id);
    setOpenEditIntrputik(true);
  };

  const ClassAnalysisChange = (e) => {
    let select = document.getElementById("ClassAnalysis");
    let value = select.options[select.selectedIndex].value;
    SetClassAnalysis(value);
    if (
      document
        .getElementById("ClassAnalysis")
        .classList.contains("text-[#98A2B3]")
    ) {
      document
        .getElementById("ClassAnalysis")
        .classList.remove("text-[#98A2B3]");
    }

    let unit = document.getElementById("test_unit_id");
    let Unitvalue = unit.options[unit.selectedIndex].value;

    let method = document.getElementById("test_method_id");
    let Methodvalue = method.options[method.selectedIndex].value;
    formData.append("once", 1);
    formData.append("test_code", document.getElementById("test_code").value);
    formData.append("test_unit_id", Unitvalue);
    formData.append("test_method_id", Methodvalue);
    formData.append(
      "test_print_name",
      document.getElementById("test_print_name").value
    );
    formData.append(
      "price_for_patient",
      document.getElementById("price_for_patient").value
    );
    formData.append(
      "price_for_lap",
      document.getElementById("price_for_lap").value
    );
    formData.append(
      "price_for_company",
      document.getElementById("price_for_company").value
    );
  };
  const IntrputikChange = () => {
    if (intrputik === true) {
      SetIntrputik(false);
    } else if (intrputik !== true) {
      SetIntrputik(true);
    }
    if (
      document.getElementById("intrputikDiv").classList.contains("bg-white")
    ) {
      document.getElementById("intrputikDiv").classList.remove("bg-white");
      document
        .getElementById("intrputikText")
        .classList.remove("text-[#101828]");

      document.getElementById("intrputikDiv").classList.add("bg-[#B7C835]");
      document.getElementById("intrputikText").classList.add("text-white");
    } else if (
      !document.getElementById("intrputikDiv").classList.contains("bg-white")
    ) {
      document.getElementById("intrputikDiv").classList.remove("bg-[#B7C835]");
      document.getElementById("intrputikText").classList.remove("text-white");

      document.getElementById("intrputikDiv").classList.add("bg-white");
      document.getElementById("intrputikText").classList.add("text-[#101828]");
    }
  };

  const Save = () => {
    if (Value !== "") {
      formData.append("histopathology[0][text]", Value);
    }
    if (CultureReportSelector.length > 0) {
      for (let i = 0; i <= CultureReportSelector.length; i++) {
        formData.append(
          `culture_report[${i}][text]`,
          CultureReportSelector[i]?.text
        );
      }
    }

    if (ManeReportSelector.length > 0) {
      for (let i = 0; i <= ManeReportSelector.length; i++) {
        formData.append(
          `mane_report[${i}][gender]`,
          ManeReportSelector[i]?.gender
        );
        formData.append(`mane_report[${i}][h]`, ManeReportSelector[i]?.High);
        formData.append(`mane_report[${i}][l]`, ManeReportSelector[i]?.Low);
      }
    }

    console.log(formData.get(`mane_report[0][h]`));
    // await axios
    //   .post(
    //     `https://aurora-team.com/labs-obada/api/admin-scope/create-section`,
    //     axios.interceptors.request.use(function (config) {
    //       let token =
    //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2VlN2E3Y2NmMjEzZTRkZjVjZDI2OTk3YzU5MmI0MDA1N2Q0N2ZmY2M5MzZhNmUyZjhkOGI4MDQyNzZmNTcyNmJhZjVkZWUyMjcwNGUzMzYiLCJpYXQiOjE2NzMwOTMwODguOTY2MzkxLCJuYmYiOjE2NzMwOTMwODguOTY2Mzk0LCJleHAiOjE3MDQ2MjkwODguOTYxNTUxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.NKUc3xWBkslUAMS0LgwzHEG_ymvKjG7K3biTQJZob4pv4hG_LMWruek6EPOqNsbz0cquOkFrSx_awxTHo0RlBtsYFdyXT6grhokhdziLGVfOIK7aCVBHLo_ZyJ0KH32kV40fS62ZOgPdTgHaRn_Rwhd40OLLXDvA2-1C1AnfB46vshAS3AazeE-BOyvFnXMSW7tHhaF-nLGR1VhO209KRv8bEHCyTtwBQ6GTw7xtQaqS99y2_B3jwqNlGc34rrzdjEiFRas_Ua2QR0_8vbVCg4XbITpBVg3TfBY1uwysmMZbrtiQnlZukl2o62K30EL0FFsAyahDofFJUsVo05nRaZ-zR1cLr1Eg9LHGkhytb2lHZBHQaShuWCmdLVj-g3KnRnlHffiS7D9n1uBHgYXv6F-ONrmgra_sOl5qn7NdZor8NE_A_B7Inv3Bf0A916LnPzFmasyQlPUk1_-eaf3Jg4FpEBoTMw7Fr6j4SomNK-0ZcQVHztEhGNLfoK-4GB3UQnZVDjxkw3Wnb-4mn7RLJEbM-1N-33UpxOFFqI6tmpFIMCShI9FL6zzOSRVhvC4cGFTi5I9JJ2Yl0uAFdBZpKW8nhHTOCld3IB2mPdJ5rNkQQiG12q6qbutfTBjumTP-DAbmCOa2Hp8gAhScj780HphkjeslLkrQWGWgXpf8wlM";
    //       config.headers.Authorization = token ? `Bearer ${token}` : "";
    //       return config;
    //     })
    //   )
    //   .then((response) => {});
  };
  return (
    <div className={`${show ? "block" : "hidden"}`}>
      <EditIntrputikSDB
        open={OpenEditIntrputik}
        setOpen={setOpenEditIntrputik}
        id={id}
      />
      <DeleteIntrputikSDB
        open={OpenDeleteIntrputik}
        setOpen={setOpenDeleteIntrputik}
        id={id}
      />
      <div
        id="intrputikDiv"
        className="bg-white  w-fit  flex items-center justify-center px-5 py-3 rounded-lg cursor-pointer "
        onClick={() => IntrputikChange()}
      >
        <p
          id="intrputikText"
          className="text-sm flex items-center justify-center text-[#101828] font-Poppins-Regular"
        >
          intrputik
        </p>
      </div>

      <div className={`   mt-7`}>
        <div className="grid grid-cols-2 gap-5">
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              id="test_code"
              placeholder="Check code"
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              id="test_print_name"
              placeholder="Examination name in print"
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>

          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5">
            <select
              id="test_method_id"
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
            >
              <option value="" selected disabled hidden className="">
                Examination method
              </option>
              {MethodList
                ? MethodList.map((method) => (
                    <option value={method.id} className="">
                      {method.test_method}
                    </option>
                  ))
                : "Loading"}
            </select>
          </div>
          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5">
            <select
              id="IntakeTube"
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
            >
              <option value="" selected disabled hidden className="">
                Intake tube
              </option>
            </select>
          </div>

          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4   relative m-auto border-[1px] rounded-xl ">
            <input
              id="price_for_patient"
              placeholder="Examination price"
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              id="price_for_lap"
              placeholder="Laboratory examination price"
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>

          <div className="border-[#E4E7EC] w-full h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4     relative m-auto border-[1px] rounded-xl ">
            <input
              id="price_for_company"
              placeholder="Examination price for companies"
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5">
            <select
              id="test_unit_id"
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
            >
              <option value="" selected disabled hidden className="">
                Measuring unit
              </option>
              {UnitList
                ? UnitList.map((unit) => (
                    <option value={unit.id} className="">
                      {unit.unit}
                    </option>
                  ))
                : "Loading"}
            </select>
          </div>

          <div className="w-full pr-2 py-1 bg-[#F9FAFF] rounded-xl flex border-[1px] border-[#E4E7EC]  items-center mr-5 col-start-1 col-end-3">
            <select
              id="ClassAnalysis"
              className=" w-full   rounded-lg bg-[#F9FAFF]   font-Poppins-Regular  text-[#98A2B3] text-xs  outline-none px-4 py-2 cursor-pointer"
              onChange={(e) => ClassAnalysisChange(e)}
            >
              <option value="" selected disabled hidden className="">
                Class analysis
              </option>
              <option value="Histopathology">Histopathology</option>
              <option value="ManeReport">Mane report</option>
              <option value="CultureReport">Culture report</option>
            </select>
          </div>
          <div className="mb-5 col-start-1 col-end-3">
            <HistopathologySystemDB
              type={ClassAnalysis}
              formData={formData}
              intrputik={intrputik}
              getData={getData}
              setValue={setValue} 
            />
            <ManeReportSystemDB type={ClassAnalysis} formData={formData} 
            intrputik={intrputik} />
            <CultureReportSystemDB
              type={ClassAnalysis}
              formData={formData}
              setNormalRange={setNormalRange} 
              intrputik={intrputik}
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          intrputik ? "block" : "hidden"
        } col-start-1 col-end-3 mt-10 mb-10`}
      >
        <div className="flex w-full justify-start space-x-10 col-start-1 col-end-3">
          <div className="border-[#E4E7EC] w-[50%] h-fit bg-[#F9FAFF] flex space-x-2 items-center py-3 px-4  relative border-[1px] rounded-xl ">
            <input
              id="IntrputikName"
              placeholder="subject title"
              type="text"
              className="w-full bg-[#F9FAFF] font-Poppins-Regular text-xs text-[#707070] outline-0 ring-0"
            />
          </div>
          <div
            className=" bg-[#0D2135] w-[34%]  flex items-center justify-center  px-5 lg:px-20  py-2 rounded-xl cursor-pointer "
            onClick={() => AddToTableIntrputik()}
          >
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              Add to table
            </p>
          </div>
        </div>

        <table className="w-full h-full mt-5  bg-white  rounded-2xl col-start-1 col-end-3 ">
          <tr className="border-b-[1px] w-full">
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 pl-8 w-[85%]">
              name
            </td>
            <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-1 w-[15%]">
              Action
            </td>
          </tr>

          {IntrputikSelector
            ? IntrputikSelector.map((intr) => (
                <tr className="border-b-[1px] w-full">
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 pl-8 ">
                    {intr.name}
                  </td>
                  <td className="text-sm text-[#101828] font-semibold font-Poppins-Regular py-1 ">
                    <div className="flex space-x-2 ">
                      <TiEdit
                        className="text-2xl  opacity-50 cursor-pointer"
                        onClick={() => EditIntrputik(intr.id)}
                      />
                      <IoTrashOutline
                        className="text-2xl text-[#F04438] cursor-pointer"
                        onClick={() => DeleteIntrputik(intr.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            : "Loading"}
        </table>
        <div className=" flex justify-end space-x-8 mt-8 col-start-1 col-end-4">
          <div className="bg-[#F04438] border-[1px] border-[#D0D5DD] w-fit  flex items-center justify-center px-16 py-2 rounded-xl cursor-pointer ">
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              Delete
            </p>
          </div>
          <div
            className="bg-[#B7C835] w-fit  flex items-center justify-center px-28 py-3 rounded-xl cursor-pointer "
            onClick={() => Save()}
          >
            <p className="text-sm flex items-center justify-center text-white font-Poppins-Regular">
              Save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntrputikSystemDB;
