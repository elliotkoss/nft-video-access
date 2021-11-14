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
      "0x40eC871df1898C308AE8e965031eAE26d5a7Ca45": {
        name: "Test Livestream",
      },
    },
    icon: "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
    callToAction: {
      default: "Unlock the Livestream here!",
    },
  };
}
