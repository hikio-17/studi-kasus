import React, { useState, useEffect } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Table } from "antd";

const CustomerPage = () => {
  const dispatch = useDispatch();
  const [billsData, setBillsData] = useState([]);
  const getAllBills = async () => {
    try {
      dispatch({ type: "SHOW_LOADING" });
      const { data } = await axios.get(
        "http://localhost:5000/api/bills/get-bills"
      );
      setBillsData(data);
      dispatch({ type: "HIDE_LOADING" });
      console.log(data);
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
      console.log(error);
    }
  };

  //useEffect
  useEffect(() => {
    getAllBills();
  }, []);

  //table data
  const columns = [
    { title: "ID", dataIndex: "_id" },
    {
      title: "Customer Name",
      dataIndex: "customerName",
    },
    { title: "Contact No", dataIndex: "customerNumber" },
  ];

  return (
    <DefaultLayout>
      <h1>CustomerPage</h1>
      <Table
        columns={columns}
        dataSource={billsData}
        bordered
        pagination={false}
      />
    </DefaultLayout>
  );
};
export default CustomerPage;
