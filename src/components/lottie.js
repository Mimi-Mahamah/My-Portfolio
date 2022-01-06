import React from "react";
import lottie from "lottie-web"
import woman from "./woman-with-computer.json"

export default function Lottie() {
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#woman"),
          animationData: woman,
          renderer: "svg",
          loop: true,
          autoplay:true,
        });
      }, []);

    return (
        <div>
      <div id="woman" />
    </div>
    );
}