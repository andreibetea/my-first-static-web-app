interface IMainFileProps {
    value: string;
}

const mainFile = (props: IMainFileProps) => {
    return (
        <>
            <div>Hello {props.value}</div><br />
            <div>Welome to my first project!</div>
        </>
    );
};

export default mainFile;
