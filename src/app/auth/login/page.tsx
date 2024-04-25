"use client";
import { useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { fetchGraphQl } from "@/services/fetchGraphql.api";
import TitleMain from "@/components/UI/TitleMain";
import styles from "./index.module.scss";

const Page = () => {


	const [form, setForm] = useState({
		mail: "",
		password: ""
    });
    
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const submitForm = () => {
        console.log(form);
    }
	return (
        <div className={styles.wrapper}>
            <TitleMain title="Register" color="primary" />
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
				<Button type="submit" text="login" color="primary" />
			</form>
		</div>
	);
};

export default Page;
