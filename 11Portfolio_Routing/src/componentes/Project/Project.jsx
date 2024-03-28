import React from 'react'
import Card from '../Card/Card'
import project1 from '../../assets/todo.png'
import project2 from '../../assets/project4.png'
import project3 from '../../assets/project3.png'
import gym from '../../assets/project1.png'
import food from '../../assets/project2.png'
import project4 from '../../assets/password.png'

function Project() {
  return (
    <div className='bg-[#EFECEC]'>
    <div className='flex flex-wrap justify-between mx-20 p-14  gap-y-20 -mt-4'>
      
      <Card image={project1} Heading="Manage To Do"  weblink='https://settodos.netlify.app/' text='SetTodos is a user-friendly todo management website built with the power of ReactJS, Tailwind CSS, HTML, and JavaScript. This intuitive platform empowers users to effortlessly organize their tasks by providing essential features such as adding, updating, deleting, and toggling todos.' />
      <Card image={project2} Heading='Personal Portfolio' weblink='https://cuwebdevsuraj.netlify.app/' text='
The Portfolio Showcase, a dynamic site, is a collaborative effort between me and Aaditya. Crafted with precision, it employs HTML, CSS, and JavaScript. Its visually captivating design offers seamless navigation and showcases our collective skills and creativity.'/>
      <Card image={project3} Heading='E-Waste Facility Locator' weblink='https://surajverma-07.github.io/E-Waste-Facility-Locator/' text='Team Coders United developed an E-Waste facility locator connecting people to Indian authorities for dismantling E-Waste. This solution addresses the harmful impact of electronic waste, facilitating responsible disposal and contributing to environmental sustainability.'/>
      <Card image={project4} Heading='Password Genrator' weblink='https://randompasswordsgenrator.netlify.app/' text='A versatile Random Password Generator website, powered by React JS, JavaScript, and Tailwind CSS. Users can customize passwords by length, including/excluding numbers and special characters. This intuitive tool offers seamless control for generating secure passwords tailored to individual preferences.'/>
      <Card image={food} Heading='Food Delivery Website' weblink="https://surajverma-07.github.io/fooddeliveryportfolio/" text='A food delivery website, crafted solely with HTML and CSS, offers a simple UI. Users navigate effortlessly, exploring menus and placing orders. Though lacking a backend, it provides a seamless experience for browsing and selecting meals.'/>
      <Card image={gym} Heading='Gym Portfolio' weblink="https://surajverma-07.github.io/gym-website/" text='My first project: a gym portfolio website crafted using HTML and CSS. Featuring a simple UI, it showcases gym services and includes a user-friendly form for entering details.'/>
    </div>
    </div>
  )
}

export default Project
