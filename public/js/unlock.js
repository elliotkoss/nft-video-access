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
      "0x10258a42649286f30e14a1b40e6C1919d72A08c1": {
        name: "Purchase your ticket today!",
      },
    },
    icon: "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
    callToAction: {
        default: "See Da Boss Perform Live 'The Limits of Loving'",
    },
  };
}
