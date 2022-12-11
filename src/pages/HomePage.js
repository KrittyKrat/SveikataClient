import React from 'react'
import classes from "./HomePage.module.css";

const HomePage = () => {

  let role = "None";
  const userTemp = localStorage.getItem("user");
  if(userTemp) role = JSON.parse(userTemp).role;

  return (
    <div className={classes.main}>
      <h1>TopGSveikata</h1>
      <br />
      {role !== "None" && (
        <>
          <img className={classes.icon} src="https://thumbs.dreamstime.com/b/professional-young-team-group-doctors-38070132.jpg" alt='RIP'/>
          <div className={classes.second}>
            <h4>You have entered the health system zone. From here you may continue further into the abyss that is this website and click the Instituion button. Then after having selected your desired institution and sector, select a speacialist and finally arrange a visit. Very nice. You can manage your visits in the Visits tab. And thats about it. Logout when you had enough of this disaster.</h4>
          </div>
        </>
      )}
      {role === "None" && (
        <>
          <h3>Login or make an account to see this awesomeness</h3>
        </>
      )}
    </div>
  )
}

export default HomePage