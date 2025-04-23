import React, { useState } from 'react'
import {toast} from "react-hot-toast"
const Contact = () => {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });


    const handleSubmit = (e) => {
      e.preventDefault();
    
      fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Message Sent.")
            setFormData({ name: '', email: '', message: '' });
          } else {
            toast.error("Message failed to send.")
          }
        })
        .catch(() => {
          toast.error('An error occurred. Please try again.')
        });
    };
  return (
    <div
    id='contact'
      className="min-h-screen flex items-center justify-center py-20  bg-[#DFA16E] bg-[linear-gradient(138deg,_rgba(223,_161,_110,_1)_0%,_rgba(97,_50,_22,_1)_52%,_rgba(0,_0,_0,_1)_100%)] "
    >
        <div className="px-4 w-full md:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-100 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e)=>setFormData({...formData,name:e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                placeholder="example@mail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e)=>setFormData({...formData,message:e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                placeholder="Message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#846c48] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 cursor-pointer hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
          
        </div>
      
    </div>
  )
}

export default Contact