"use client"
import { BsPlusCircleFill } from "react-icons/bs";


function FormButton() {

  function handleOpenForm(){
    alert("form Opend")
  }

  return (
    <button onClick={handleOpenForm} className="md:hidden w-full h-[4rem] flex justify-between px-6 items-center absolute bottom-0 bg-red-600 uppercase text-[15px] font-semibold tracking-tighter">
      <p>Order Your HF-11 </p>
      <BsPlusCircleFill size={27} className="bg-white rounded-full"/>
    </button>
  )
}

export default FormButton
