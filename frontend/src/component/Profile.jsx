const Profile = () => {
    return (
      <>
        <div className="cardprofile" style={{ width: "18rem", margin: "0 auto" }}>
          <img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" style={{borderRadius:'50%'}} className="card-img-top" alt="img_user" />
          <div className="card-body" style={{justifyItems:'center'}}>
            <h5 className="card-title">catherine@mail.com</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary" >Cerrar</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;