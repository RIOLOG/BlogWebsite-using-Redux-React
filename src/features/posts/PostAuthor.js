import {useSelector} from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId);

    return <span>Blog in {author ? author.name : "Educational Category"} Field</span>
}




export default PostAuthor