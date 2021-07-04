import React, { useState, useEffect } from "react";
import "./index.css";
import Typist from 'react-typist';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Image = ({ link }) => {
  return (
    <div>
      <img src={link} alt="business growth with clus" className="w-72 h-72 mx-auto" />
    </div>
  );
};
function BusinessContent({ label, Content }) {
  return (
    <div className="my-auto items-center mt-4">
      <h1
        className="w-96 text-2xl font-bold text-center mb-2 mx-auto"
        style={{ color: "#acdbdf" }}
      >
        {label}
      </h1>
      <hr className='w-1/4 m-auto'/>
      <div className="w-96 text-center p-4 mx-auto">
        <span className="overflow-hidden">{Content}</span>
      </div>
    </div>
  );
}

function Button({label, onClick=''}){
    return (
    <a href={onClick} className='w-11/12 m-5 border text-base p-5 justify-center flex button border-gray-600 border-opacity-50'>
        <span className='flex-1' >{label}</span>
        <div className='flex justify-end'>
            <ArrowForwardIosIcon/>
        </div>
    </a>
    )
}

const list = ['Electrician', 'Plumber', 'Pest Control', 'Computer Repair']
const data=[
  {title:'HASSLE FREE', para:'Book your Problem Solution in just few Second', image:'Happy'},
  {title:'NEAREST EXPERTS', para:'Choose Your Nearby Experts', image:'Location'},
  {title:'NOTIFICATION', para:'Get Notified When you got proposal', image:'Notification'},
  {title:'SERVICE', para:'Provide you the doorstep service from your nearest experts like Electrician, Plumber, Computer Repair and many more to give you the solution as fast as possible in a very proffesional way.', image:'Team'},
]
function Index() {
  const [reRender, setReRender] = useState(true)
  setTimeout(()=>{},1000)
  useEffect(() => {
    setReRender(true)
  }, [reRender])
  return (
    <div className="w-full overflow-hidden">
      {/* Logo Start */}
      <div className='flex items-center flex-row p-5'>
          <img  src='./clus.png' alt="business growth with clus" className="w-10 h-10"/>
          <div className='ml-2'>
            <h1 style={{fontSize:'4vmin'}} className="font-bold">LINKUPS</h1>
            <h1 className="tagline">We are a family</h1>
          </div>
      </div>
      {/* Body 1 */}
      <div className="flex flex-row justify-between Body1 m-5">
        <div>              
          <h1 style={{lineHeight:1.5}}>
            GET
            <div style={{height:'8vmin'}} className='justify-center'>
              {reRender && 
                <Typist cursor={{show:false}}  onTypingDone={()=>{setReRender(false)}}>
                  <h1 className='typist text-2xl'>{list[0]}</h1>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={list[0].length} />
                  <h1 className='typist text-2xl'>{list[1]}</h1>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={list[1].length} />
                  <h1 className='typist text-2xl'>{list[2]}</h1>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={list[2].length} />
                  <h1 className='typist text-2xl'>{list[3]}</h1>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={list[3].length} />
                </Typist>}
            </div>
            SERVICE FROM YOUR <br/>
            <h1 className='typist' style={{color:'#FF6E50'}}>nearby Experts</h1>
            </h1>
          </div>
          {/* <img alt='Download our linkups app from play store' src='https://www.benjaminfranklinplumbing.com/images/blog/10-Reasons-Why-a-Professional-Plumber-Is-Better-Than-DIY-_-Katy-TX.jpg' className='w-auto h-80 rounded-xl'/> */}
      </div>
      {/* Body 1 End */}
      <div className='w-screen'>
          <Button onClick={'mailto:helpdesk@clus.in'} label='CONTACT US'/>
          <Button onClick={'https://play.google.com/store/apps/details?id=com.crnaadmin'} label='BECOME LINKUPS PROVIDER'/>
          <Button onClick={'https://play.google.com/store/apps/details?id=com.crnauser'} label='Download NOw'/>
      </div>
      {/* Body 2  */}
      <div>
        {/* 1 */}
        <div className='text-center mt-10'>
          <span className='font-bold mb-4'>OUR FEATURES</span>
        </div>
        {data.map(item=> <div className="mt-4 w-11/12 border m-auto border-gray-600 border-opacity-50">
          <BusinessContent
            label={item.title}
            Content={item.para}
          />
          <Image link={`./Assest/${item.image}.svg`} />
        </div>)}
      </div>
      {/* Body 2 End */}
        <div className='text-center mt-4'>
          <img alt='Download our linkups app from play store' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png' className='w-auto h-12 mt-4 mx-auto'/>
        </div>
        {/* Footer */}
            <div className='text-center my-14'>
                <span className='text-gray-500'>Thank you for looking us so far.</span>
                <br/>
                <span className='text-gray-500'>For any query please contact Us</span>
            </div>
        {/* Footer end */}
    </div>
  );
}

export default Index;
