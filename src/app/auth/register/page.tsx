"use client";
import { useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { REGISTER_USER } from "@/graphql/mutations";
import { fetchGraphQl } from "@/services/fetchGraphql.api";
import styles from "./index.module.scss";

const Page = () => {
	const [form, setForm] = useState({
		mail: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const submitForm = () => {
        console.log(form);
        fetchGraphQl(REGISTER_USER, {user:form}, "")
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
	return (
		<div className={styles.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
					submitForm();
				}}
			>
				<Input
					label="Email"
					name="mail"
					type="email"
					value={form.mail}
					handleChange={handleChange}
				/>
				<Input
					label="Password"
					type="password"
					value={form.password}
					name="password"
					handleChange={handleChange}
				/>
				<Input
					label="FirstName"
					name="firstName"
					type="text"
					value={form.firstName}
					handleChange={handleChange}
				/>
				<Input
					label="LastName"
					type="text"
					name="lastName"
					value={form.lastName}
					handleChange={handleChange}
				/>
				<Button type="submit" text="register" color="primary" />
			</form>
		</div>
	);
};

export default Page;

