import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The stroy of your life...</span>
        <span className="headerTitleLg">PODCAST</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        alt=""
      />
    </div>
  )
}
