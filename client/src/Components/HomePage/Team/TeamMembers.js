import { useState } from "react";
import { getThumb } from "../utils/thumbs";

export default function TeamMember({ member }) {
  const [loaded, setLoaded] = useState(false);
  const thumbName = member.imageUrl.replace(/\.[^/.]+$/, "_thumb.jpg");
  const thumbUrl = getThumb(thumbName);


  return (
    <div className="team-card">
      <div
        className="image-wrapper"
        style={{
          backgroundImage: thumbUrl ? `url(${thumbUrl})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={"https://ik.imagekit.io/nal7vhb1y/Boxers/" + member.imageUrl}
          alt={member.name}
          className={`member-image ${loaded ? "fade-in" : "hidden"}`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      </div>
    </div>
  );
}
