import styles from "./index.module.css";

interface IProps {
    handleClick?: () => void;
    text: string;
    color?: string;
    type?: ButtonType;
};

enum ButtonType {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
};

const Index = ({handleClick, text, color, type} : IProps) => {
    return (
        <button className={`btn btn__${color}`} onClick={handleClick} type={type}>
            {text}
        </button>
    );
}

export default Index;
