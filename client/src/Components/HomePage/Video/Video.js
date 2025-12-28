import React, { useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import SectionHeader from "../utils/SectionHeader";
import "./Video.scss";


const Video = () => {
  /* const videoUrl = "https://ik.imagekit.io/nal7vhb1y/Boxers/boxersw2.mp4"; */
  const videoUrl = "https://ik.imagekit.io/59p9lo9mv/boxers.mp4?updatedAt=1765974410489"
  const videoRef = useRef(null);
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    preload: "metadata",
    controls: true,
    muted: true,
    loop: true,
    responsive: true,
    fluid: true,
    poster: "https://ik.imagekit.io/nal7vhb1y/Boxers/IMG_0701_26.jpg",
    sources: [
      {
        src: videoUrl,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const options = videoJsOptions;
  const onReady = handlePlayerReady;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div>
      <SectionHeader
        subTitle="INSIDE THE ACADEMY"
        title="WELCOME TO THE HUSTLE"
      />
      <div data-vjs-player className="video-container">
        <div ref={videoRef} />
      </div>
    </div>
  );
};

export default Video;
