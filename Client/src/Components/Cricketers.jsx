import React from 'react'
import '../App.css'
 function Cricketers() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://thebridge.in/h-upload/2022/03/04/24202-virat-kohli.webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">VIRAT KHOLI</h5>
        <p class="card-text">No 1 Batsman in All Format . KING !</p>
      </div>
      <button type="button" className="vbtn" onClick={() => window.open("https://www.google.com/search?gs_ssp=eJzj4tLP1TcwLswuq0wzYPTiLsssSixRyM7PyMkEAGaQCFc&q=virat+kohli&oq=virat&gs_lcrp=EgZjaHJvbWUqDAgBEC4YJxiABBiKBTIGCAAQRRg5MgwIARAuGCcYgAQYigUyBwgCEAAYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyDQgGEAAYsQMYgAQYigUyBwgHEAAYgAQyBwgIEAAYjwLSAQgyMTI5ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8", "_blank")} style={{color:"white",backgroundColor:"black",width:"100px"}}>Click </button>
      </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0TKzq3dSSCEriaxhoDg_rfz2U8bMsFHqVw&s" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">ROHIT SHARMA</h5>
        <p class="card-text">Captain Indian Cricket Team</p>
      </div>
      <button type="button" className="vbtn" onClick={() => window.open("https://www.google.com/search?q=rohit+sharma&sca_esv=2661ef6c07b945d4&sca_upv=1&sxsrf=ADLYWILA-mqCKmhoGIInGcEdPoQWEhJNYQ%3A1718780482127&ei=QoJyZu2-B-mM4-EP9qux6AQ&gs_ssp=eJzj4tTP1TdISjdIyTVg9OIpys_ILFEozkgsyk0EAGIKCCI&oq=rohi&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHJvaGkqAggBMgoQIxiABBgnGIoFMg0QLhiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMgUQABiABDIIEAAYgAQYsQMyBRAAGIAEMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEDSN0bUI0GWPMMcAJ4AZABAJgB7wGgAe4FqgEFMC4zLjG4AQPIAQD4AQGYAgigAqodqAISwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAgcQLhgnGOoCwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQLCAgoQLhiABBgnGIoFwgIKEC4YgAQYQxiKBcICFxAuGIAEGIoFGJcFGNwEGN4EGN8E2AEDwgIKEC4YgAQYFBiHAsICEBAuGIAEGLEDGEMYgwEYigXCAggQLhiABBixA5gDOogGAZAGEboGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFJIHCTIuMS4zLjctMqAH0mA&sclient=gws-wiz-serp", "_blank")} style={{color:"white",backgroundColor:"black",width:"100px"}}>Click </button>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsR0FN0v3QDyEx_-hyutGNvPG7TxapQjqWA&s" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">JASPRIT BHUMRAH</h5>
        <p class="card-text">Indian Fast Bowler</p>
      </div>
      <button type="button" className="vbtn" onClick={() => window.open("https://www.google.com/search?q=bumrah&sca_esv=2661ef6c07b945d4&sca_upv=1&sxsrf=ADLYWIKI8oL7HeDFFf_vUdJ5vCHM0fRHyg%3A1718781177423&ei=-YRyZoDGGbWH4-EPjLmbiA4&gs_ssp=eJzj4tLP1TcoTs9INi43YPRiSyrNLUrMAABAogZf&oq=bu&gs_lp=Egxnd3Mtd2l6LXNlcnAiAmJ1KgIIATIKECMYgAQYJxiKBTINEC4YgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIFEC4YgAQyBRAAGIAEMgoQLhiABBhDGIoFMgUQABiABEj5F1CXB1jLDHACeAGQAQCYAY4CoAHQA6oBBTAuMS4xuAEDyAEA-AEBmAIEoAKdBKgCEsICChAAGLADGNYEGEfCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIHEC4YJxjqAsICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBwgIKEC4YgAQYJxiKBcICBBAjGCfCAhAQLhiABBixAxhDGIMBGIoFmAMfiAYBkAYQugYGCAEQARgIkgcFMi4wLjKgB9E8&sclient=gws-wiz-serp", "_blank")} style={{color:"white",backgroundColor:"black",width:"100px"}}>Click </button>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ271PIBsHP7pJV4vYnYX6goP6HT-veUYvoaw&s" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">KL RAHUL</h5>
        <p class="card-text">Indian Wicket-keeper Batsman</p>
      </div>
      <button type="button" className="vbtn" onClick={() => window.open("https://www.google.com/search?q=kl+rahul&sca_esv=2661ef6c07b945d4&sca_upv=1&sxsrf=ADLYWIIK032D35td6CpaNs-EQmwFrmgupQ%3A1718781052070&ei=fIRyZsL_A62X4-EP1_6WeA&gs_ssp=eJzj4tLP1TcoSM41sUg2YPTiyM5RKErMKM0BAElaBrU&oq=kl&gs_lp=Egxnd3Mtd2l6LXNlcnAiAmtsKgIIATIKECMYgAQYJxiKBTINEC4YgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigUyChAAGIAEGEMYigUyCxAuGIAEGLEDGIMBMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEDSJIXUIUHWOUJcAJ4AZABAJgB0gGgAfsCqgEFMC4xLjG4AQPIAQD4AQGYAgWgAvUQqAISwgIKEAAYsAMY1gQYR8ICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICBxAuGCcY6gLCAgcQIxgnGOoCwgIWEC4YgAQYQxi0AhjIAxiKBRjqAtgBAsICChAuGIAEGCcYigXCAgoQLhiABBhDGIoFwgIQEC4YgAQYsQMYQxiDARiKBcICBRAuGIAEwgIXEC4YgAQYigUYlwUY3AQY3gQY4ATYAQOYAxiIBgGQBg-6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwkyLjEuMS43LTGgB85C&sclient=gws-wiz-serp", "_blank")} style={{color:"white",backgroundColor:"black",width:"100px"}}>Click </button>

    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciK56U5HblScRWIXR8yScT_ghdOd6Cz0i-w&s" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SURYAKUMAR YADAV</h5>
        <p class="card-text">Indian NO 1 T20 Batsman</p>
      </div>
      <button type="button" className="vbtn" onClick={() => window.open("https://www.google.com/search?q=suryakumar+yadav&sca_esv=2661ef6c07b945d4&sca_upv=1&sxsrf=ADLYWIIaD2X1la-G5nRem8m3eATGNv_GtA%3A1718781108016&ei=tIRyZo5U1pXj4Q_l6534CA&gs_ssp=eJzj4tLP1TfIiE9Lykk2YPQSKC4tqkzMLs1NLFKoTExJLAMAmXsKgg&oq=s&gs_lp=Egxnd3Mtd2l6LXNlcnAiAXMqAggFMgoQIxiABBgnGIoFMgoQIxiABBgnGIoFMgoQIxiABBgnGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQABiABBhDGIoFMhkQLhiABBhDGIoFGJcFGNwEGN4EGN8E2AEDSI8qUNAHWIQScAJ4AZABAJgB0wGgAdMBqgEDMi0xuAEDyAEA-AEBmAIGoAKDQKgCEsICBxAjGLADGCfCAgoQABiwAxjWBBhHwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AECwgIHEC4YJxjqAsICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AECmAMliAYBkAYQugYGCAEQARgJugYGCAIQARgIugYGCAMQARgUkgcJMi4wLjEuOC0zoAexMA&sclient=gws-wiz-serp", "_blank")} style={{color:"white",backgroundColor:"black",width:"100px"}}>Click </button>

    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3t2617kTCc8NAV1-gjIcTg3Xpzw3zmkzbGXzcvpwqCb0rEDzA5shxtpyfilr7m2f30do&usqp=CAU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">HARDIK PANDYA</h5>
        <p class="card-text">Indian ALL-ROUNDER Batsman</p>
      </div>
      <button type="button" className="vbtn" onClick={() => window.open("https://www.google.com/search?q=hardik+pandya&sca_esv=2661ef6c07b945d4&sca_upv=1&sxsrf=ADLYWILhsc0WCRyknRiXs0MMp6usSsVJvw%3A1718780662075&ei=9oJyZtOgBJLG4-EPhL-UgA0&gs_ssp=eJzj4tVP1zc0TKqoKCyvMkszYPTizUgsSsnMVihIzEupTAQAlsUKJw&oq=har&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2hhcioCCAAyChAuGIAEGCcYigUyBBAjGCcyEBAuGIAEGLEDGEMYgwEYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyEBAuGIAEGLEDGEMY1AIYigUyChAAGIAEGEMYigUyChAuGIAEGEMYigUyDRAuGIAEGLEDGEMYigUyChAuGIAEGEMYigUyFxAuGIAEGIoFGJcFGNwEGN4EGN8E2AEDSP0TUP8FWJsLcAJ4AZABAJgB7wGgAb8EqgEFMC4yLjG4AQPIAQD4AQGYAgWgAugGqAISwgIKEAAYsAMY1gQYR8ICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICBxAuGCcY6gLCAgcQIxgnGOoCwgIWEC4YgAQYQxi0AhjIAxiKBRjqAtgBAsICChAjGIAEGCcYigXCAg0QLhiABBhDGNQCGIoFwgIFEAAYgATCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGLEDGIMBmANriAYBkAYPugYGCAEQARgJugYGCAIQARgIugYGCAMQARgUkgcFMS4yLjKgB9iOAQ&sclient=gws-wiz-serp", "_blank")} style={{color:"white",backgroundColor:"black",width:"100px"}}>Click </button>

    </div>
  </div>
</div>
    </div>
  )
}
export default Cricketers