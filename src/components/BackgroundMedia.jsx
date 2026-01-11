import React from "react";

const BackgroundMedia = ({ src = '/media/bg.mp4', poster = '/media/poster.jpg', autoPlay = true, muted = true, loop = true }) => {
  return (
    <video
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      poster={poster}
      className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
    >
      <source src={src} type="video/mp4" />
      {/* Fallback content: poster/image will be shown if video unsupported */}
    </video>
  );
};

export default BackgroundMedia;
