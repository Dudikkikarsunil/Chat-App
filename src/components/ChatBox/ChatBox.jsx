import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Ayyappa Swamy <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon}  className="help"alt="" />
      </div>
      <div className="chat-msg">
        <div className="s-msg">
         <p className='msg'>lorem hi helo bye hvbjnkgvhbjnkm</p>
         <div>
         <img src={assets.profile_img} alt="" />
         <p>3:25pm</p>
         </div>
        </div>

        <div className="s-msg">
         {/* <p className='msg'>lorem hi helo bye hvbjnkgvhbjnkm</p> */}
         <img className='msg-img' src={assets.pic1} alt="" />
         <div>
         <img src={assets.profile_img} alt="" />
         <p>3:25pm</p>
         </div>
        </div>

        <div className="r-msg">
         <p className='msg'>lorem hi helo bye hvbjnkgvhbjnkm</p>
         <div>
         <img src={assets.profile_img} alt="" />
         <p>3:25pm</p>
         </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text"  placeholder='send a message'/>
        <input type="file" id='image' accept='image/png, image/jpeg,image/jpg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon}alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>

    </div>
  )
}

export default ChatBox