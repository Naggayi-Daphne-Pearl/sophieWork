const Profile = ({id,img,fullName,score}) => {
  return (
    <>
      <div className="flex">
        <div className="item">
          <img src={img} alt="contributor profile" />
            <div className="info">
              <h3 className="name text-dark">{fullName}</h3>
            </div>
        </div>
        <div className="item">
          <span>{score}</span>
        </div>
      </div>;
    </>
  );
};

export default Profile;
