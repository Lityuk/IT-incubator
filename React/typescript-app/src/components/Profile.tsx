import React from "react";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
          alt="main_img"
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          Posts
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
