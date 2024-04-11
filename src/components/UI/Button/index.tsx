
interface params {
    handleClick: () => void;
    text: string;
    color: string;
}
const Index = ({ handleClick, text, color }: params) => {
    return (
        <button className={`btn btn__${color}`} onClick={handleClick} >
            {text}
        </button>
    );
}

export default Index;
