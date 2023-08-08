import NetCrawlerNav from "../Component/NetCrawlerNav";
import "./OurFocus.css"


export default function OurFocus() {
  return (
    <div className="focus-page-wrapper">
      <NetCrawlerNav />
      <div className="text-box">
      <h1>Our Focus</h1>
      </div>
      <img className="mountain-background" src='Mountains_focus_netCrawler.png' alt="mountain-background" />
    </div>
  )
}
