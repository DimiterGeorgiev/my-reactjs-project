import SideBar from "../SideBar/SideBar"
import SinglePost from "../SinglePost/SinglePost"
import "./Single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <SideBar/>
    </div>
  )
}
