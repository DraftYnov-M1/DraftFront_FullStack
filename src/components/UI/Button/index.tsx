interface IProps {
    handleClick?: () => void;
    text: string;
    color: string;
    type?: "submit" | "button" | "reset";
}
const Index = ({ handleClick, text, color, type }:IProps) => {
    return (
        <button className={`btn btn__${color}`} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Index;