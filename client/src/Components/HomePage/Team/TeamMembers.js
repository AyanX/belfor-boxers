
export default function TeamMember({ member }) {
  return (
    <div className="team-card">
      <div className="image-wrapper">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="member-image"
        />
      </div>
    </div>
  );
}
