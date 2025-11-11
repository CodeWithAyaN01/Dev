import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import users  from './Components/UserData';


const App = () => {
  // Data for users
// const users = [
//   {
//     img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
//     intro: 'A successful professional satisfied with his financial planning and future savings through digital banking support.',
//     color: 'royalblue',
//     tag: 'Satisfied'
//   },
//   {
//     img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop',
//     intro: 'A working individual exploring better financial tools to manage limited access to quality banking services.',
//     color: 'lightseagreen',
//     tag: 'Underserved'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop',
//     intro: 'Young entrepreneur seeking reliable microloans and flexible banking options to expand small business operations effectively.',
//     color: 'orange',
//     tag: 'Underbanked'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop',
//     intro: 'Freelancer managing inconsistent income flow while aiming to build long-term savings and better financial discipline.',
//     color: 'pink',
//     tag: 'Unstable'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop',
//     intro: 'Student saving small allowances to understand digital payments and build early financial awareness for the future.',
//     color: 'yellow',
//     tag: 'Average'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2576&auto=format&fit=crop',
//     intro: 'Corporate employee investing in new savings schemes and learning long-term wealth creation through online banking.',
//     color: 'teal',
//     tag: 'Investor'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop',
//     intro: 'Creative designer balancing freelance earnings while using mobile banking apps for secure transactions and budgeting.',
//     color: 'violet',
//     tag: 'Freelancer'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2576&auto=format&fit=crop',
//     intro: 'Entrepreneur exploring innovative banking solutions that simplify business expenses and improve daily financial transparency.',
//     color: 'crimson',
//     tag: 'Entrepreneur'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2576&auto=format&fit=crop',
//     intro: 'Senior citizen relying on digital banking for pension access, bill payments, and safe remote money management options.',
//     color: 'darkgreen',
//     tag: 'Retired'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2576&auto=format&fit=crop',
//     intro: 'College graduate using digital wallets to manage expenses, savings goals, and daily transactions without physical cash.',
//     color: 'deepskyblue',
//     tag: 'Modern User'
//   }
// ]

  return (
    <div>
      <div className="god">
          <Section1 users={users} />
          <Section2 />
      </div>
    </div>
  )
}

export default App