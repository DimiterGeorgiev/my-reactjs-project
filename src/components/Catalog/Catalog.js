import Post from "../Post/Post"
import "./Catalog.css"

export default function Catalog({
    podcasts
}) {
  return (
    <div className="posts">
        {podcasts.map(x => 
            <Post key={x._id} {...x} />
        )}

        {podcasts.length === 0 && (
            <h3>No Podcasts yet</h3>
        )}

        {/* <Post/>
        <Post/>
        <Post/>
        <Post/> */}
    </div>
  )
}
