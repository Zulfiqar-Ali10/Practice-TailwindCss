import { useState } from 'react';

import './App.css';
import { Header } from './assets/Components/Header';
import { Footer } from './assets/Components/Footer';

function App() {
  const students = [
    {
      name: "Ali",
      class: "Matric",
      rollNum: 104,
      isActive: true,
    },
    {
      name: "Akbar",
      class: "Intermediate",
      rollNum: 105,
      isActive: false,
    },
    {
      name: "Ahmed",
      class: "Undergraduate ",
      rollNum: 106,
      isActive: true,
    },
    {
      name: "Hussain",
      class: "matric",
      rollNum: 107,
      isActive: false,
    },
    {
      name: "Babu",
      class: "Intermediate",
      rollNum: 108,
      isActive: false,
    },
    {
      name: "Aun",
      class: "Undergraduate ",
      rollNum: 109,
      isActive: true,
    },{
      name: "nasrullah",
      class: "matric",
      rollNum: 110,
      isActive: true,
    },
    {
      name: "Zeeshan",
      class: "Intermediate",
      rollNum: 111,
      isActive: false,
    },
    {
      name: "Zain",
      class: "Undergraduate ",
      rollNum: 112,
      isActive: true,
    },
  ];

  return (
    <>
      <div className="App">
        <h2 className="text-white pt-5 pb-5 text-center mt-10 text-5xl bg-[brown] uppercase hover:bg-red-700 ">
          hello tailwind css
        </h2>
      </div>

      <Header students={students} /> 
      <Footer />
    </>
  );
}

export default App;
