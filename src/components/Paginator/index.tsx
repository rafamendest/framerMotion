import MotionDiv from "../MotionDiv";

interface PaginatorProps {
    page: number,
}

const Paginator = ({ page }: PaginatorProps) => {

    const components: any = {
        0: <MotionDiv />,
        1: <>TESTANDO 2</>,
        2: <>TESTANDO 3</>,
        3: <>TESTANDO 4</>,
        4: <>TESTANDO 5</>,
    }

    return (
        <>
            {components[page]}
        </>
    )
}

export default Paginator;