import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MoreOutlined } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import { Chip } from "@mui/material";

const columns = [
  {
    id: "imoNumber",
    label: "COMPANY IMO NO.",
    minWidth: 120,
  },
  {
    id: "companyName",
    label: "COMPANY NAME",
    minWidth: 100,
  },
  {
    id: "companyAddress",
    label: "COMPANY ADDRESS",
    minWidth: 100,
    align: "right",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "docIssue",
    label: "DOC ISSUE DATE",
    minWidth: 100,
    align: "right",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "docExpiry",
    label: "DOC EXPIRY DATE",
    minWidth: 100,
    align: "right",

    format: (value) => value.toFixed(2),
  },
  {
    id: "vessellist",
    label: "VESSEL LIST",
    minWidth: 100,
    pointer: "pointer",
    customRender: true,
    render: (imo, onClick) => {
      return <MoreOutlined onClick={onClick} />;
    },
  },
  {
    id: "dpa",
    label: "DPA",
    minWidth: 50,
  },
  {
    id: "Status",
    label: "STATUS",
    minWidth: 50,
    customRender: true,
    render: (...args) => {
      const [status] = args;
      console.log(status);
      return (
        <Chip
          sx={{
            bgcolor: status === "1" ? "#467199" : "gray",
            color: "white",
            fontSize: "10px",
          }}
          label={status === "1" ? "ACTIVE" : "IN-ACTIVE"}
        />
      );
    },
  },
  {
    id: "edit",
    label: "EDIT",
    minWidth: 50,
    boder: "0 15px 0 0",
    pointer: "pointer",
    customRender: true,
    render: (...args) => {
      const [imo, onClick] = args;
      return <Edit onClick={onClick} />;
    },
  },
];

const companyList = [
  {
    Description: "BULK CARRIER",
    "Marketing Group": "BULK CARRIER",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9229,
    "From Registry": "PANAMA",
    "Vessel Name": "NORDIC ORION",
    "Gross Tons": 40142,
    "Net Tons": 25265,
    "Deadweight Tons": 75603,
    Length: 220.17,
    Breadth: 32.26,
    Depth: 19.39,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 13548,
    imoNumber: 9529463,
    docIssuer: "Dnv",
    "Built Year": 2011,
    Builder: "Oshima Shipbuilding Co. Ltd.",
    "Where Built": "JAPAN",
    "Registration Date": "23-Dec-20",
    "Initial Registration Initiating Office": "Piraeus, Greece",
    "Compliance Code": "Unknown",
    "ISM Contact": "BERNHARD SCHULTE SHIPMANAGEMENT (CYPRUS) LIMITED",
    "ISM Country": "CYPRUS",
    "Customer Number": "8678-MARITIME",
    companyName: "BERNHARD SCHULTE SHIPMANAGEMENT (CYPRUS) LIMITED",
    "Address 1": "ATTN: FLEET TEAM",
    "Address 2": "111 SPYROU ARAOUZOU STREET",
    "City State Zip Country": "LIMASSOL 3036 Cyprus",
    country: "Cyprus",
    "Cert. Issue Date": "30-Nov-21",
    Age: 11,
    "DPA/DP Name": "MR. LEONARD RODRIGUEZ",
    "DPA/DP Email Address": "CY-SMC-LPSQ@BS-SHIPMANAGEMENT.COM",
    "Registered Owner": "Bulk Nordic Orion (MI) Corp.",
    companyAddress:
      "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960",
  },
  {
    Description: "PRODUCT/CHEMICAL TANKER",
    "Marketing Group": "TANKER",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "1",
    officialId: 9230,
    "From Registry": "SINGAPORE",
    "Vessel Name": "CL YINGDU",
    "Gross Tons": 29455,
    "Net Tons": 13786,
    "Deadweight Tons": 49722,
    Length: 175.3,
    Breadth: 32.2,
    Depth: 19.1,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 7317,
    imoNumber: 9718064,
    docIssuer: "American Bureau Of Shipping",
    "Built Year": 2016,
    Builder: "Sungdong Shipbuilding & Marine Engineering Co., Ltd.",
    "Where Built": "TONGYEONG, SOUTH KOREA",
    "Registration Date": "18-Dec-20",
    "Initial Registration Initiating Office": "Shanghai, PRC",
    "Compliance Code": "Unknown",
    "ISM Contact": "SYNERGY DENMARK A/S",
    "ISM Country": "DENMARK",
    "Customer Number": "119620-MARITIME",
    companyName: "CL YINGDU LIMITED",
    "Address 1": "ROOM3502-03, 35F, CENTURY LINK TOWER 2",
    "Address 2": "NO.1196 CENTURY AVENUE",
    "Address 3": "PUDONG NEW DISTRICT",
    "City State Zip Country": "SHANGHAI China",
    country: "China",
    "Cert. Issue Date": "07-Dec-21",
    Age: 6,
    "DPA/DP Name": "MR. PETER HAWKIN",
    "DPA/DP Email Address": "PETER.HAWKIN@SYNERGYSHIP.COM",
    "Registered Owner": "CL Yingdu Limited",
    companyAddress:
      "21st Floor, Edinburgh Tower, The Landmark, 15 Queen's Road Central, Hong Kong",
  },
  {
    Description: "CONTAINER",
    "Marketing Group": "CONTAINER",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9224,
    "From Registry": "CYPRUS",
    "Vessel Name": "GH TRAMONTANE",
    "Gross Tons": 38364,
    "Net Tons": 16631,
    "Deadweight Tons": 47027,
    Length: 226.57,
    Breadth: 32.2,
    Depth: 19.2,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 31990,
    imoNumber: 9448827,
    docIssuer: "Dnv",
    "Built Year": 2010,
    Builder: "Shanghai Shipyard Co., Lyd.",
    "Where Built": "SHANGHAI, CHINA",
    "Registration Date": "22-Dec-20",
    "Initial Registration Initiating Office": "London, England, U.K.",
    "Compliance Code": "Unknown",
    "ISM Contact": "THOMAS SCHULTE SHIP MANAGEMENT GMBH & CO. KG",
    "ISM Country": "GERMANY",
    "Customer Number": "108111-MARITIME",
    companyName: "THOMAS SCHULTE SHIP MANAGEMENT GMBH & CO. KG",
    "Address 1": "ATTN: ACCOUNTING DEPT.",
    "Address 2": "ZÜRICH HAUS, DOMSTR. 17",
    "City State Zip Country": "HAMBURG 20095 Germany",
    country: "Germany",
    "Cert. Issue Date": "11-Aug-21",
    Age: 12,
    "DPA/DP Name": "MR. OLIVER KAUTZ",
    "DPA/DP Email Address": "QUALITY-DE@TSM-SHIPMANAGEMENT.COM",
    "Registered Owner": "GEMINI SHIPCO II LLC",
    companyAddress:
      "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960",
  },
  {
    Description: "CRUDE/PROD TANKER",
    "Marketing Group": "TANKER",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9236,
    "From Registry": "SINGAPORE",
    "Vessel Name": "EPANASTASEA",
    "Gross Tons": 61724,
    "Net Tons": 32726,
    "Deadweight Tons": 109647,
    Length: 235,
    Breadth: 42,
    Depth: 22.2,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 15260,
    imoNumber: 9319686,
    docIssuer: "Lloyd'S Register",
    "Built Year": 2008,
    Builder: "Dalian New Shipbuilding Heavy Industry Co. Ltd.",
    "Where Built": "DALIAN, CHINA",
    "Registration Date": "29-Dec-20",
    "Re-Registration Date": "02-Sep-22",
    "Initial Registration Initiating Office": "Singapore",
    "Compliance Code": "Unknown",
    "ISM Contact": "SYNERGY DENMARK A/S",
    "ISM Country": "DENMARK",
    "Customer Number": "100701-MARITIME",
    companyName: "SYNERGY DENMARK A/S",
    "Address 1": "ATTN: TECHNICAL DEPARTMENT",
    "Address 2": "KAY FISKERS PLADS 10,",
    "City State Zip Country": "COPENHAGEN S 2300 Denmark",
    country: "Denmark",
    "Cert. Issue Date": "02-Sep-22",
    Age: 14,
    "DPA/DP Name": "MR. PETER HAWKIN",
    "DPA/DP Email Address": "PETER.HAWKIN@SYNERGYSHIP.COM",
    "Registered Owner": "EPANASTASEA MARITIME CO.",
    companyAddress:
      "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960",
  },
  {
    Description: "OIL TANKER",
    "Marketing Group": "TANKER",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9259,
    "From Registry": "LIBERIA",
    "Vessel Name": "RIDGEBURY MARY JANE",
    "Gross Tons": 79048,
    "Net Tons": 47271,
    "Deadweight Tons": 149993,
    Length: 264.46,
    Breadth: 48,
    Depth: 22.4,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 16440,
    imoNumber: 9337016,
    docIssuer: "Lloyd'S Register",
    "Built Year": 2008,
    Builder: "Universal Shipbuilding Corp., Tsu Me",
    "Where Built": "JAPAN",
    "Registration Date": "16-Feb-21",
    "Initial Registration Initiating Office": "Piraeus, Greece",
    "Compliance Code": "Unknown",
    "ISM Contact": "BERNHARD SCHULTE SHIPMANAGEMENT (UK) LIMITED",
    "ISM Country": "UNITED KINGDOM",
    "Customer Number": "8678-MARITIME",
    companyName: "BERNHARD SCHULTE SHIPMANAGEMENT (CYPRUS) LIMITED",
    "Address 1": "ATTN: IRENE PETALLIDES",
    "Address 2": "HANSEATIC HOUSE,",
    "Address 3": "111 SPYROU ARAOUZOU STREET",
    "City State Zip Country": "LIMASSOL 3036 Cyprus",
    country: "Cyprus",
    "Cert. Issue Date": "24-Jan-22",
    Age: 14,
    "DPA/DP Name": "MR. LEONARD RODRIGUEZ",
    "DPA/DP Email Address": "CY-SMC-LPSQ@BS-SHIPMANAGEMENT.COM",
    "Registered Owner": "RIDGEBURY EMERALD LLC",
    companyAddress:
      "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960",
  },
  {
    Description: "VEHICLE CARRIER",
    "Marketing Group": "GENERAL CARGO",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9307,
    "From Registry": "NEWBUILDING",
    "Vessel Name": "MAYAN",
    "Gross Tons": 31417,
    "Net Tons": 9425,
    "Deadweight Tons": 20120,
    Length: 176.82,
    Breadth: 36.6,
    Depth: 10,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 9600,
    imoNumber: 9896799,
    docIssuer: "American Bureau Of Shipping",
    "Built Year": 2021,
    Builder: "Cssc Huangpu Wenchong Shipbuilding Company Ltd.",
    "Where Built": "LONGXUE GUANGXHOU CHINA",
    "Registration Date": "21-Sep-21",
    "Initial Registration Initiating Office": "Ft. Lauderdale, Florida, USA",
    "Compliance Code": "Unknown",
    "ISM Contact": "SEABULK FLEET MANAGEMENT LLC",
    "ISM Country": "UNITED STATES",
    "Customer Number": "119146-MARITIME",
    companyName: "SEABULK FLEET MANAGEMENT LLC",
    "Address 1": "1801 SAHLMAN DRIVE",
    "City State Zip Country": "TAMPA FL 33605 United States",
    country: "United States",
    "Cert. Issue Date": "16-Sep-22",
    Age: 1,
    "DPA/DP Name": "MATTHEW LONG",
    "DPA/DP Email Address": "SEABULKDPA@SBULK.COM",
    "Registered Owner": "RAIL FERRY NEWBUILD II LLC",
    companyAddress:
      "THE TRUST COMPANY COMPLEX AJELTAKE ROAD AJELTAKE ISLAND MAJURO REPUBLIC OF THE MARSHALL ISLANDS MH 96960",
  },
  {
    Description: "GENERAL CARGO",
    "Marketing Group": "GENERAL CARGO",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9368,
    "From Registry": "MALTA",
    "Vessel Name": "ASL ELSA",
    "Gross Tons": 29753,
    "Net Tons": 16187,
    "Deadweight Tons": 52223,
    Length: 179.91,
    Breadth: 32.26,
    Depth: 17.15,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 8045,
    imoNumber: 9300623,
    docIssuer: "Nippon Kaiji Kyokai",
    "Built Year": 2006,
    Builder: "Oshima Shipbuilding Co., Ltd.",
    "Where Built": "OSHIMA, JAPAN",
    "Registration Date": "13-Apr-21",
    "Re-Registration Date": "07-May-22",
    "Initial Registration Initiating Office": "Singapore",
    "Compliance Code": "Unknown",
    "ISM Contact": "ASL INT'L SHIP MANAGEMENT (HK) LIMITED",
    "ISM Country": "CHINA",
    "Customer Number": "122905-MARITIME",
    companyName: "ASL INT'L SHIP MANAGEMENT (HK) LIMITED",
    "Address 1": "RM 1411, TOWER E08-2",
    "Address 2": "SUNING HUIGU #268",
    "Address 3": "JIQINGMEN AVENUE",
    "City State Zip Country": "NANJING CITY China",
    country: "China",
    "Cert. Issue Date": "07-May-22",
    Age: 16,
    "DPA/DP Name": "CAPTAIN HUI ZHANG",
    "DPA/DP Email Address": "TECH@ASLSHPG.COM",
    "Registered Owner": "DORIS SHIPPING CO., LIMITED",
    companyAddress:
      "Room B3, 19/F, Tung Lee Commercial Building, 91-97 Jervois Street, Sheung Wan, Hong Kong",
  },
  {
    Description: "GAS CARRIER",
    "Marketing Group": "GAS CARRIER",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9374,
    "From Registry": "NEWBUILDING",
    "Vessel Name": "MOL HESTIA",
    "Gross Tons": 115540,
    "Net Tons": 34662,
    "Deadweight Tons": 93799,
    Length: 288.64,
    Breadth: 46.4,
    Depth: 20.81,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 23888,
    imoNumber: 9885996,
    docIssuer: "Bureau Veritas",
    "Built Year": 2021,
    Builder: "Daewoo Shipbuilding & Marine Engineering Co., Ltd.",
    "Where Built": "OKPO, SOUTH KOREA",
    "Registration Date": "26-Jul-21",
    "Initial Registration Initiating Office": "Tokyo, Japan",
    "Compliance Code": "Unknown",
    "ISM Contact": "NORTHERN MARINE MANAGEMENT LIMITED",
    "ISM Country": "UNITED KINGDOM",
    "Customer Number": "7252-MARITIME",
    companyName: "NORTHERN MARINE MANAGEMENT LIMITED",
    "Address 1": "ATTN: FLEET GROUP 5",
    "Address 2": "ALBA HOUSE",
    "Address 3": "2 CENTRAL AVENUE",
    "City State Zip Country": "CLYDEBANK SCOTLAND G81 2QR United Kingdom",
    country: "United Kingdom",
    "Cert. Issue Date": "25-May-22",
    Age: 1,
    "Additional Service Attribute": "LNG",
    "DPA/DP Name": "MR. ALASTAIR FLEMING",
    "DPA/DP Email Address": "ALASTAIR.FLEMING@STENA.COM",
    "Registered Owner": "LNG Harmonia Shipping Corporation",
    companyAddress:
      "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960",
  },
  {
    Description: "REEFER VESSEL",
    "Marketing Group": "GENERAL CARGO",
    "Vetting Group": "DEEP SEA",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 9573,
    "From Registry": "LIBERIA",
    "Vessel Name": "SEVILLA CARRIER",
    "Gross Tons": 5994,
    "Net Tons": 3362,
    "Deadweight Tons": 7252,
    Length: 127.75,
    "Length Overall (LOA)": 134.01,
    Breadth: 20.2,
    Depth: 9.93,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 8252,
    imoNumber: 9078488,
    docIssuer: "Bureau Veritas",
    "Built Year": 1994,
    Builder: "Kyokuyo Shipyard, Shimonoseki",
    "Where Built": "SHIMONOSEKI, JAPAN",
    "Registration Date": "28-Sep-21",
    "Initial Registration Initiating Office": "London, England, U.K.",
    "Compliance Code": "Unknown",
    "ISM Contact": "NORBULK SHIPPING UK LTD.",
    "ISM Country": "UNITED KINGDOM",
    "Customer Number": "3962-MARITIME",
    companyName: "NORBULK SHIPPING UK LTD.",
    "Address 1": "ATTN: ACCOUNTS",
    "Address 2": "68 GLASSFORD STREET",
    "City State Zip Country": "GLASGOW G1 1UP United Kingdom",
    country: "United Kingdom",
    "Cert. Issue Date": "19-Aug-22",
    Age: 28,
    "DPA/DP Name": "MR. VALERIY POVAZHNYY",
    "DPA/DP Email Address": "DPA@NORBULKSHIPPING.COM",
    "Registered Owner": "SEVILLA SHIPPING CORPORATION",
    companyAddress:
      "C/O H&C Corporate Services Limited, P.O. Box 698, 4th Floor Apollo House, 87 Mary Street, Georgetown, Grand Cayman KY1-1107, Cayman Islands",
  },
  {
    Description: "OFFSHORE SUPPLY VESSEL",
    "Marketing Group": "OSV",
    "Vetting Group": "OFFSHORE",
    activeStatus: "Active",
    docType: "Full Term",
    docExpiry: "20-JUN-2023",
    docIssue: "2-JAN-2029",
    dpa: "2",
    Status: "2",
    officialId: 90607,
    "From Registry": "SINGAPORE",
    "Vessel Name": "TOPAZ ENERGY",
    "Gross Tons": 3841,
    "Net Tons": 1272,
    "Deadweight Tons": 3929,
    Length: 79.61,
    Breadth: 18,
    Depth: 8,
    "Propulsion Code": "Motor Screw",
    "Propulsion Power (KW)": 5808,
    imoNumber: 9678771,
    docIssuer: "American Bureau Of Shipping",
    "Built Year": 2013,
    Builder: "Britoil Offshore Indonesia",
    "Where Built": "INDONESIA",
    "Bareboat Charter": "I",
    "Bareboat Flag": "SING",
    "Registration Date": "28-Oct-21",
    "Initial Registration Initiating Office": "Dubai, UAE",
    "Compliance Code": "Unknown",
    "ISM Contact": "TOPAZ ENERGY AND MARINE LTD",
    "ISM Country": "UNITED ARAB EMIRATES",
    "Customer Number": "75315-MARITIME",
    companyName: "TOPAZ ENERGY AND MARINE LTD",
    "Address 1": "ATTN: TAOFEEK AKINWALE",
    "Address 2": "LEVEL 58 ALMAS TOWER, JLT,",
    "City State Zip Country": "DUBAI United Arab Emirates",
    country: "United Arab Emirates",
    "Cert. Issue Date": "28-Oct-21",
    Age: 9,
    "DPA/DP Name": "CAPTAIN ALAN ORLANDINI",
    "DPA/DP Email Address": "ALAN.ORLANDINI@POMARITIME.COM",
    "Registered Owner": "Hico Holding Pte Ltd.",
    companyAddress: "11 Duxton Hill, Singapore 089595",
    Charterer: "TEAM XXXIX LIMITED",
    "Charterer Address":
      "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960",
  },
];

function CompanyListTab() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    backgroundColor: "#467199",
                    color: "white",
                    padding: "5px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: "500",
                    borderRadius: column.boder,
                    "& .MuiPaper-root": { borderRadius: "0 15px 0 0" },
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {companyList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((company) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={company.code}
                  >
                    {columns.map((column) => {
                      const value = company[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            fontSize: "12px",
                            padding: "5px",
                            textAlign: "left",
                            cursor: column.pointer,
                          }}
                        >
                          {(!!column.customRender &&
                            ((column.id === "edit" &&
                              column.render(null, null)) ||
                              (column.id === "vessellist" &&
                                column.render(null, null)) ||
                              (column.id === "Status" &&
                                column.render(company[column.id])))) ||
                            company[column.id]}

                          {/* {column.format && typeof value === "number"
                            ? column.format(value)
                            : value} */}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={companyList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CompanyListTab;
