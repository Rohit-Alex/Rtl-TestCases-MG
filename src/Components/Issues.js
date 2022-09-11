import { useCounterContext } from "../Context/Counter"

const Issues = () => {
    const { permission } = useCounterContext()
    return (
        <div>{permission ? <div>Hi</div> : <div>Bye</div>}</div>
    )
}
export default Issues