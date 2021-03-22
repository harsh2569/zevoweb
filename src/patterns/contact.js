import React from 'react'

//importing styles
import '../styles/patterns/contact.css'

//importing media assets
import hello from '../assets/icons/hello.svg'

const Contact = () => {
    return (
        <>
        <div className="contact">
            <p className="block-title">Get in touch with us</p>
            <p style={{margin:'1em 0'}}>Send us a message, get a quote from us.</p>
            <li><img src={hello} alt="hello" /><span>Hello folks at ZEVO Corporation!</span></li>

            <div className="input-group">
                My &nbsp; name &nbsp; is 
                <input type="text" placeholder="Eg. Esther Howard" />. 
                I &nbsp; Work &nbsp; as &nbsp; a
                 <input type="text" placeholder="Eg. Cheif Technical Officer"  />
                 &nbsp; at 
                 <input type="text" placeholder="Eg. Antus Data Labs, USA" />
               We &nbsp; have &nbsp; a &nbsp; budget &nbsp; of &nbsp; around 
               <select>
                   <option value="" disabled selected hidden>Select your estimated budget</option>
               </select>
                to &nbsp; complete &nbsp; a
                 <select>
                     <option value="" disabled selected hidden>Select a project category</option>
                </select> 
                 on &nbsp; or &nbsp; around &nbsp; a
                <input type="text" placeholder="Eg. 2 months from now" />
                .&nbsp;You &nbsp; can &nbsp; reach &nbsp; me &nbsp; at
                <input type="text" placeholder="Eg. estherhoward@example.com"/> 
                or &nbsp; at 
                <select>
                    <option value="" disabled selected hidden>91</option>
                </select>
                <input type="text" placeholder="Eg. 7789654123" />
            </div>
            <div className="block-end">
                <div>
                    <p>Sincerely</p>
                    <li>Esther Howard</li>
                    <li>Cheif Technical Officer,</li>
                    <li>Antus Data Labs, USA</li>
                </div>
                <div className="button">
                    <button className="primary">Send Message</button>
                    <button className="secondary">Discard Message</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
