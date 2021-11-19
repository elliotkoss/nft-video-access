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
      "0xE44Ed2C9e67516AF92469a89CEAcC50e235c5B47": {
        name: "Purchase your ticket today!",
      },
    },
    icon: "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
    callToAction: {
        default: "See Da Boss Perform Live 'The Limits of Loving'",
    },
  };
}
