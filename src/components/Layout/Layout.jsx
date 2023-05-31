import { Outlet, useNavigate } from "react-router-dom"
import './Layout.css'
import { useContext } from "react"
import { UserNameConext } from "../../context/UserNameContext"

const Layout = () => {
  const { removeUserName } = useContext(UserNameConext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/")
  }

  return (
    <div className="container">
        <header className="header">
          <div className="header-red">
            <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="pokedex"/>
          </div>
          <div className="header-black"></div>
        </header>
        <main className="logout">
          <div className="logout-button" >
            <button onClick={logout}>Salir</button>
          </div>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout