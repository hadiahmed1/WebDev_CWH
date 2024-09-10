import { useParams } from "react-router-dom"
const User = () => {
    const params=useParams()
    return (
    <div>I am user User: {params.userName}</div>
    )
}

export default User