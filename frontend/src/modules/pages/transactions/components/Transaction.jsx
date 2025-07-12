import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Select, message, Table } from "antd";
import axios from "axios";

//Get UID imported from Login Pages class
//DO NOT touch Backend or DB schema
//Pass UiD in Get Transactions API Call from UI
// import category_id from category

//import { getApi } from '../../shared/services/api-client.js';
//import { useNavigate } from 'react-router-dom';

//const category_id="byee";
export const Transaction = () => {
	// const [value, setValue] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [allTransaction, setAllTransaction] = useState([]);
	// const [inputValue, setInputValue] = useState('');
	// const updateInputValue = () => {
	//   setInputValue(category_id);
	// };

	const columns = [
		{ title: "name", dataIndex: "name" },
		{ title: "type", dataIndex: "type" },
		{ title: "amount", dataIndex: "amount" },
		{ title: "date_time", dataIndex: "date_time" },
		{ title: "category_id", dataIndex: "category_id" },
	];

	const getAllTransaction = async () => {
		try {
			setLoading(true);
			const res = await axios.get(import.meta.env.VITE_TRANS_URL);
			console.log(res);
			setLoading(false);
			console.log("Here is the data " + res.data);
			setAllTransaction(res.data ?? []);
		} catch (error) {
			console.log(error);
			message.error("fetch issue with transaction");
		}
	};
	useEffect(() => {
		getAllTransaction();
	}, []);
	//const navigate = useNavigate();
	const handleSubmit = async (values) => {
		try {
			values.category_id = "Car Wash";
			setLoading(true);
			await axios.post(import.meta.env.VITE_TRANS_TWO_URL, {
				...values,
			});
			setLoading(false);
			message.success("Transaction Added Successfully");
			setShowModal(false);
			getAllTransaction();
		} catch (error) {
			setLoading(false);
			message.error("Failed to add transaction");
		}
	};
	// const handleSave = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await getApi({
	// 	  name,
	//     type,
	//     amount,
	//     date_time
	// 		});
	// 		console.log(response.data.message);
	// 		if (response.data.success) {
	// 			alert("Transaction Added.");
	// 			// navigate("/dashboard");
	// 		} else {
	// 			console.error("failed.");
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	const val = "Add Transaction for ";
	const greetings = "Hello!!";

	return (
		<div>
			<div className="filters">
				<div>{greetings}</div>
				<div>
					<button
						className="btn btn-primary"
						onClick={() => setShowModal(true)}
					>
						add new
					</button>
				</div>
			</div>
			<div className="content">
				<Table columns={columns} dataSource={allTransaction} />
			</div>
			<Modal
				title={val}
				open={showModal}
				onCancel={() => setShowModal(false)}
				footer={false}
			>
				<Form layout="vertical" onFinish={handleSubmit}>
					<Form.Item label="Name" name="name">
						<Input type="text" />
					</Form.Item>
					<Form.Item label="Type" name="type">
						<Select initialvalue={"Select an option"}>
							<Select.Option value="income">Income</Select.Option>
							<Select.Option value="Expense">
								Expense
							</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item label="Amount" name="amount">
						<Input type="text" />
					</Form.Item>
					<Form.Item label="Date" name="date_time">
						<Input type="date" />
					</Form.Item>
					{/* <Form.Item label="uid" name="uid">
            <Input type="text" />
          </Form.Item> 
          <Form.Item label="category_id" name="category_id">
          <Input type="text" />
          </Form.Item> */}
					<div className="d-flex justify-content-end">
						{/* <form onSubmit={handleSave}> */}
						<button type="submit" className="btn btn-primary">
							{" "}
							SAVE
						</button>
						{/* </form> */}
					</div>
				</Form>
			</Modal>
		</div>
	);
};
export default Transaction;
