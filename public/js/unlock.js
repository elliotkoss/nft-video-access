function unlockSetup() {
  (function (d, s) {
    var js = d.createElement(s),
      sc = d.getElementsByTagName(s)[0];
    js.src = "https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
    sc.parentNode.insertBefore(js, sc);
  })(document, "script");
  if (window.unlockProtocolConfig === undefined) {
    window.unlockProtocolConfig = {
      network: 4,
      locks: {
        "0xE27944a3613225FAfdE0a5229E680aEc0E3aA5aD": {
          name: "Test Livestream",
        },
      },
      icon: "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
      callToAction: {
        default: "Unlock the Livestream here!",
      },
    };
  }
}
