import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/Tickets.css";
import logo from "../../../../Assets/Logo1.webp"

export default function Tickets({ type, benefits, price, link }) {
  const openLink = () => {
    window.open(link, "_blank");
  };
  function popup(a) {
    var b = "https://www.townscript.com/v2/widget/" + a + "/booking";
    invokeInframe(b);
  }
  function popupWithParams(a, params) {
    var b = "https://www.townscript.com/v2/widget/" + a + "/booking";
    if (params) {
      b += "?";
      for (const [key, value] of Object.entries(params)) {
        b += key + "=" + value + "&";
      }
    }
    invokeInframe(b);
  }
  function invokeInframe(b) {
    (document.getElementById("popupcontents").innerHTML =
      '<iframe id="tsiframe" class = "ts-scroll"  style="width: 100%; height: 100%; overflow:scroll" width="100%"' +
      ' frameborder="0" scrolling="auto" src="' +
      b +
      '" type= "text/javascript"></iframe>'),
      (document.getElementById("popupbackground").style.display = "block"),
      (document.getElementById("popupcontainer").style.maxWidth = "630px"),
      (document.body.style.overflow = "hidden"),
      (document.body.style.position = "fixed");
  }
  function tsClose() {
    (document.getElementById("popupcontents").innerHTML = ""),
      (document.getElementById("popupbackground").style.display = "none"),
      document.body.style.removeProperty("overflow"),
      document.body.style.removeProperty("position");
  }
  if (!document.getElementById("popupbackground")) {
    document.head.innerHTML +=
      '<link href="https://www.townscript.com/static/Bookingflow/css/style.css" rel="stylesheet" type="text/css" />';
    var div = document.createElement("div");
    (div.id = "popupbackground"),
      (div.innerHTML =
        '<div id="popupcontainer"><span class="close-iframe" id="tsclose"' +
        ' onclick="tsClose()" style = "">+</span><div id="popupcontents" class="scroll-wrapper"></div></div>'),
      document.body.appendChild(div);
  }
  var eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent",
    eventer = window[eventMethod],
    messageEvent = "attachEvent" == eventMethod ? "onmessage" : "message";
  eventer(
    messageEvent,
    function (a) {
      "resizeIframe" == a.data &&
        ((document.getElementById("tsiframe").style.display = "none"),
        (document.getElementById("popupcontainer").style.maxWidth = "734px"),
        (document.getElementById("tsiframe").style.display = "block"));
    },
    !1
  );

  return (
    <div className="ticket">
      <div className="left">
        <div className="ticket-left">
          <img
            className="ticket_logo"
            src={logo}
            alt=""
          />
        </div>
        <div className="ticket-info">
          <h1>{type ?? "IEEE Members"}</h1>
          <ul>{benefits && benefits.map((benefit) => <li>{benefit}</li>)}</ul>
          <div className="price">
            <h2>₹{price}</h2>
          </div>
          <CTA_button
            onClick={() => popup("aisywlc22-340012")}
            type={"primary"}
          >
            Register Now!
          </CTA_button>
        </div>
      </div>
    </div>
  );
}
