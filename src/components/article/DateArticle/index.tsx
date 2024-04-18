
interface IProps {
    date: string;
}

const Index = ({date} : IProps) => {

    return (
        <div>
            <span>{date}</span>
        </div>
    );
}

export default Index;