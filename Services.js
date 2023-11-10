import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services-container'>
        <div className='services-list-container'>
            {/* description */}
            <div className='services-desc-container'>
                <h1>My Awesome <span>Services</span></h1>
                <p>Full stack web development services can help save costs by making it easier to upgrade in the future. 
                Some companies that offer full stack web development services include: Brainvire, Relevant Software, SrinSoft, Chetu, Radixweb. 
                Full stack developers are proficient in a variety of technologies, including: 
                HTML, CSS, JavaScript, React, Angular, Node.js, Python, Django, Ruby on Rails, PHP, MySQL, MongoDB
                </p>
                <button>Hire Me</button>
            </div>
            {/* item */}
            <div className='service-item-container'>
                <div className='services-item'>
                    <i className='fa-solid fa-code'></i>
                    <div className='item-desc'>
                        <h3>Web Development</h3>
                        <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                    </div>
                </div>
                <div className='services-item'>
                    <i className='fa-solid fa-desktop'></i>
                    <div className='item-desc'>
                        <h3>Desktop Development</h3>
                        <p>Desktop application development is the process of creating applications that run locally on computer devices, such as laptops and desktops. Desktop applications are used for a variety of purposes, including: Word processing, Spreadsheets, Project management tools, Managing finances, Creating presentations</p>
                    </div>
                </div>
                <div className='services-item'>
                    <i className='fa-solid fa-tablet-alt'></i>
                    <div className='item-desc'>
                        <h3>U/X Development</h3>
                        <p>UX design involves working closely with users to create interfaces that are both effective and easy to use. UX designers are responsible for creating an optimal experience for the user when they interact with a digital or physical product, such as a website or a coffee machine</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services