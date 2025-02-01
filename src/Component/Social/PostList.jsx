import { useContext } from "react";
import Post from "./Post"
import { SocialContext } from "../../store/Social-Item";


const PostList = () => {
    const { post } = useContext(SocialContext)
    
    return (
        <>
            <div className="container">
                <h2 className="text-center my-2">Post List</h2>
                <div className="row">
                    {
                        post.map((item, i) => (
                            <div key={i} className="col-md-3">
                                <Post item={item} />
                            </div>

                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default PostList
