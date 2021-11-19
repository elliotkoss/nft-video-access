import React from "react";
import videojs from "video.js";
import "videojs-contrib-hls";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "video.js/dist/video-js.min.css";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  state: any;
}

const StreamPage: React.FC<Props> = ({ state }) => {
  const router = useRouter();
  const [videoEl, setVideoEl] = React.useState(null);
  const [notLoaded, setNotLoaded] = React.useState(true);
  const [noPlayBackId, setNoPlayBackId] = React.useState(false);
  const onVideo = React.useCallback((el) => {
    setVideoEl(el);
  }, []);

  React.useEffect(() => {
    if (videoEl == null || !router.isReady) return;

    if (router.query.playbackId) {
      const { playbackId } = router.query;
      const player = videojs(videoEl, {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: `https://cdn.livepeer.com/hls/${playbackId}/index.m3u8`,
          },
        ],
      });

      // player.hlsQualitySelector();

      player.on("error", () => {
        setNoPlayBackId(true);
      });
      setNotLoaded(false);
    }
  }, [router.isReady, videoEl]);

  return (
    <div className="container min-h-screen justify-center w-full flex flex-col items-center overflow-auto pb-14">
      {router.isReady
        ? notLoaded && "Failed to load! Invalid playback ID!"
        : "Loading..."}
      {noPlayBackId ? (
        <NoIdMessage />
      ) : (
        <div className="relative bg-black h-56 lg:h-96 w-full xl:w-3/5 overflow-hidden">
          <div data-vjs-player>
            <video
              id="video"
              ref={onVideo}
              className="h-full w-full video-js vjs-theme-city"
              controls
              playsInline
            />
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center absolute right-2 top-2 p-1 text-xs">
            <div className={`animate-pulse bg-green-700`}></div>
            {"Live"}
          </div>
        </div>
      )}
    </div>
  );
};
const NoIdMessage = () => {
  return (
    <div className="text-3xl leading-10">
      <h1>Nothing to see here...</h1>
      <p>
        You're visiting a stream page, but haven't specified a stream! Quick,
        back to the home page!
      </p>
      <Link href="/">
        <a className="underline">Take me home!</a>
      </Link>
    </div>
  );
};

export default StreamPage;
