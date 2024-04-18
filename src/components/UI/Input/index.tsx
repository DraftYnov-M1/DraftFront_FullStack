"use client";
import styles from "./index.module.scss";

interface IProps {
    value: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: string;
}

const Index = ({
    value,
    type,
    handleChange,
    name,
    label
}: IProps) => {
    return (
        <div className={styles.wrapper}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
            />
        </div>
    );
}

export default Index;
