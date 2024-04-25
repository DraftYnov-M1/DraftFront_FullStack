"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import TitleMain from "@/components/UI/TitleMain";
import styles from "./index.module.scss";

const Page = () => {

	const router = useRouter();

	const [form, setForm] = useState({
		mail: "",
		password: "",
		firstName: "",
		lastName: "",
    });
    
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const submitForm = async () => {
		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				body: JSON.stringify(form),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await res.json();
			console.log(data);
			if (data?.success) {
				router.push('/account/profil');					
			} 
		}
		catch (err) {
			console.log(err);
		}
		
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