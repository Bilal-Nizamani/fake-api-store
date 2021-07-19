import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={"https://scontent.fkhi21-1.fna.fbcdn.net/v/t1.6435-9/123108244_1529886360527786_6776016814139679676_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFLodrrxL_Tp33UeHsZGPw05BUZiuErBdbkFRmK4SsF1l4Pk8ONZtpEaPJwBHXRqTEOnQ8cO6ti01TNJ0uMzKhB&_nc_ohc=yxiGIvsC6OsAX9-VRSx&_nc_ht=scontent.fkhi21-1.fna&oh=3ea8d07ea1cdbfdfb5ab5cb46ce492b0&oe=60FB239D"} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span>
						   <span><br />
						         {city} 
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
             
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
