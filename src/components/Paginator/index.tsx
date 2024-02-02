import MotionDiv from "../MotionDiv";
import Scroll from "../Scroll";

interface PaginatorProps {
    page: number,
}

const Paginator = ({ page }: PaginatorProps) => {

    const components: any = {
        0: <MotionDiv />,
        1: <Scroll />,
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