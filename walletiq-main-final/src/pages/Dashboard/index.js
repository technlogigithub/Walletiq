import React from "react";
import BuyWLIQ from "./BuyWLIQ";
import Header from "./Header";
import Footer from "./Footer";
import TokenSaleProgress from "./TokenSaleProgress";
import TableComponent from "./table/TableComponent";
import './dashboard.css'
// import Footer from "../../components/footer/index";

function Index() {
  const data = [
    { SN: 1, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "50.00 ETH", "Base Amount": "$555.49 USD", Status: "Success" },
    { SN: 2, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "100.00 ETH", "Base Amount": "$555.49 USD", Status: "Pending" },
    { SN: 3, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "75.00 ETH", "Base Amount": "$555.49 USD", Status: "Success" },
    { SN: 4, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "125.00 ETH", "Base Amount": "$555.49 USD", Status: "Canceled" },
    { SN: 5, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "150.00 ETH", "Base Amount": "$555.49 USD", Status: "Success" },
    { SN: 6, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "200.00 ETH", "Base Amount": "$555.49 USD", Status: "Pending" },
    { SN: 7, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "175.00 ETH", "Base Amount": "$218.11 USD", Status: "Success" },
    { SN: 8, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "225.00 ETH", "Base Amount": "$218.11 USD", Status: "Success" },
    { SN: 9, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "250.00 ETH", "Base Amount": "$218.11 USD", Status: "Pending" },
    { SN: 10, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "275.00 ETH", "Base Amount": "$318.11 USD", Status: "Canceled" },
    { SN: 11, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "300.00 ETH", "Base Amount": "$118.11 USD", Status: "Success" },
    { SN: 12, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "325.00 ETH", "Base Amount": "$218.11 USD", Status: "Pending" },
    { SN: 13, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "350.00 ETH", "Base Amount": "$618.11 USD", Status: "Success" },
    { SN: 14, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "375.00 ETH", "Base Amount": "$518.11 USD", Status: "Canceled" },
    { SN: 15, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "400.00 ETH", "Base Amount": "$218.11 USD", Status: "Success" },
    { SN: 16, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "425.00 ETH", "Base Amount": "$318.11 USD", Status: "Pending" },
    { SN: 17, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "450.00 ETH", "Base Amount": "$118.11 USD", Status: "Success" },
    { SN: 18, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "475.00 ETH", "Base Amount": "$918.11 USD", Status: "Canceled" },
    { SN: 19, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+123854 RCOF", Amount: "500.00 ETH", "Base Amount": "$818.11 USD", Status: "Success" },
    { SN: 20, "Tranx ID": "tnx:27429234", Date: "23/09/2024", Tokens: "+5854 RCOF", Amount: "550.00 ETH", "Base Amount": "$218.11 USD", Status: "Pending" },
];

const headers = [
    { key: "SN", label: "SN" },
    { key: "Tranx ID", label: "Tranx ID" },
    { key: "Date", label: "Date" },
    { key: "Tokens", label: "Tokens" },
    { key: "Amount", label: "Amount" },
    { key: "Base Amount", label: "Base Amount" },
    { key: "Status", label: "Status" },
];
  return (
    // <div className="container mx-auto p-4">
    <div className="dashboard-bg text-white min-h-screen">
      <Header/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
        <div className="col-span-1 lg:col-span-1">
          <BuyWLIQ />
          <TokenSaleProgress />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <div className="table-card">
            <TableComponent data={data} headers={headers} title={"Transactions"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
