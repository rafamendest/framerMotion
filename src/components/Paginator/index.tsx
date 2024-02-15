import Login from "../Login";
import MenuAnimation from "../MenuAnimation/MenuAnimation";
import MotionDiv from "../MotionDiv";
import ReOrderGroup from "../ReOrderGroup";
import Rotate from "../Rotate";
import Scroll from "../Scroll";
import ScrollScale from "../ScrollScale";

interface PaginatorProps {
    page: number,
}

const Paginator = ({ page }: PaginatorProps) => {

    const components: any = {
        0: <MotionDiv />,
        1: <Scroll />,
        2: <div style={{marginTop: '200px'}}><ReOrderGroup /></div>,
        3: <Rotate />,
        4: <MenuAnimation />,
        5: <ScrollScale />,
        6: <Login />
    }

    return (
        <>
            {components[page]}
        </>
    )
}

export default Paginator;