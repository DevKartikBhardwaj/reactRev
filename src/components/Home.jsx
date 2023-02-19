import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Home() {
    const { count } = useSelector(state => state.first)
    console.log(count);
    const dispatch = useDispatch();
    const handlerAdd = () => {
        dispatch({
            type: "increment"
        })
    }
    const handlerSub = () => {
        dispatch({
            type: "decrement"
        })
    }

    return (
        <div>
            <button onClick={handlerAdd}>+</button>
            {count}
            <button onClick={handlerSub}>-</button>
        </div>
    );
}
