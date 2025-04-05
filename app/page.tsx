import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import RegisterGuide from '@/components/RegisterGuide'
import SolutionsCard from '@/components/SolutionsCard'
import Stack from '@/components/Stack'
import React from 'react'

const Solution = [
  {
    icon: '/code.svg',
    color: '#CCDEEB',
    alt: 'Software development',
    title: 'Software Development',
    description: 'Unlock your potential with comprehensive training in modern software development, from coding fundamentals to building complex applications.',
    price: '350'
  },
  {
    icon: '/data-science.svg',
    color: '#EDF7E8',
    alt: 'Data Science Mastery',
    title: 'Data Science Mastery',
    description: 'Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert in machine learning, AI, and data-driven decision-making.',
    price: '300'
  },
  {
    icon: '/cloud.svg',
    color: '#F7EAD0',
    alt: 'Cloud Computing Expertise',
    title: 'Cloud Computing Expertise',
    description: 'Gain hands-on experience in cloud architecture and deployment, preparing you to design, implement, and manage scalable cloud solutions in the real world.',
    price: '300'
  },
  {
    icon: '/cyber-security.svg',
    color: '#FFE4E1',
    alt: 'Cybersecurity Fundamentals',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn the essentials of cybersecurity, including threat analysis, risk management, and securing systems against cyber attacks.',
    price: '400'
  }
]
export default function page() {
  return (
    <div className='container mx-auto'>
        <NavBar />
        <Hero />

        {/* Our Solutions */}
        <div className='w-full flex flex-col items-center mt-10' id="home">
            <h2 className='text-[40px] font-bold'>Our Solutions</h2>
            <p className='text-center'>Create your account quickly with just your email or social media login, then explore a wide range </p>
            <div className='flex gap-4 justify-center mt-4 w-full p-3'>
              {Solution.map((solution, index) => (
                <SolutionsCard
                  key={index}
                  icon={solution.icon}
                  color={solution.color}
                  alt={solution.alt}
                  title={solution.title}
                  description={solution.description}
                  price={solution.price}
                />
              ))}
            </div>
        </div>

        {/* What next */}
        <div className='w-full flex flex-col items-center mt-10 bg-[#01589A] text-white py-16' id='courses'>
              <h2 className='text-[40px] font-bold text-center'>What will be next step</h2>
              <p className='text-center max-w-[600px] mb-8'>Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!</p>
              <div>
                  <Stack />
              </div>
        </div>

        {/* Register */}
        <div className='h-[500px]'>
            {/* <RegisterGuide /> */}
        </div>

        {/* Footer */}
        <Footer />
    </div>
  )
}
