function unlockSetup() {
  (function (d, s) {
    var js = d.createElement(s),
      sc = d.getElementsByTagName(s)[0];
    js.src = "https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
    sc.parentNode.insertBefore(js, sc);
  })(document, "script");
  window.unlockProtocolConfig = {
    network: 4,
    locks: {
      "0xf104a0470E18679533a4615a5Df233D6943F69D5": {
        name: "Purchase your ticket today!",
      },
    },
    icon: "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
    callToAction: {
        default: "See Da Boss Perform Live 'The Limits of Loving'",
    },
  };
}
