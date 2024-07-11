import React from 'react';
import Card from '../Card/Card';
import project1 from '../../assets/todo.png';
import project2 from '../../assets/project4.png';
import project3 from '../../assets/project3.png';
import jobmitra from '../../assets/jobmitra2.png';
import project4 from '../../assets/password.png';
import spm from '../../assets/spm.png'
import spmLatest from '../../assets/spm1.png';

function Project() {
  return (
    <div className='bg-[#EFECEC] dark:bg-[#444444]'>
      <div className='flex flex-wrap w-full m-0 p-0  items-center justify-center text-center py-5'>

        <Card className='w-full' image={spmLatest} Heading="Student Project Manager" weblink='https://projectmanagerbit.netlify.app/' text='I developed a production-ready web application for managing student projects, used by over 100 students in my college. Built with the MERN stack and Tailwind CSS, it features secure authentication, project submission, and dynamic dashboards for real-time updates. Admins can issue notices, manage files, assign marks, and delete projects. The app also integrates Cloudinary and react-hot-toast for enhanced functionality.' />
        <Card className='w-full' image={jobmitra} Heading="Job Mitra" weblink='https://jobmitra.netlify.app/' text='Developed a MERN stack job portal connecting employers with job seekers. Implemented job postings, candidate searches, and applications with secure JWT authentication. Ensured full responsiveness across devices. Built an admin dashboard for management and deployed on Netlify.' />
        <Card className='w-full' image={spm} Heading="Student Project Manager" weblink='https://studentprojectmanager.netlify.app/' text='A student project management website enables authenticated students to submit project details, including screenshots, synopsis, and presentations. It facilitates project tracking for students and assessment for teachers, allowing students to add, update, and delete their projects while viewing all submissions.' />
        <Card className='w-full' image={project1} Heading="Manage To Do" weblink='https://settodos.netlify.app/' text='SetTodos is a user-friendly todo management website built with the power of ReactJS, Tailwind CSS, HTML, and JavaScript. This intuitive platform empowers users to effortlessly organize their tasks by providing essential features such as adding, updating, deleting, and toggling todos.' />

        <Card image={project3} Heading='E-Waste Facility Locator' weblink='https://surajverma-07.github.io/E-Waste-Facility-Locator/' text='Team Coders United developed an E-Waste facility locator connecting people to Indian authorities for dismantling E-Waste. This solution addresses the harmful impact of electronic waste, facilitating responsible disposal and contributing to environmental sustainability.' />
        <Card image={project4} Heading='Password Generator' weblink='https://randompasswordsgenrator.netlify.app/' text='A versatile Random Password Generator website, powered by React JS, JavaScript, and Tailwind CSS. Users can customize passwords by length, including/excluding numbers and special characters. This intuitive tool offers seamless control for generating secure passwords tailored to individual preferences.' />
      </div>
    </div>
  );
}

export default Project;
