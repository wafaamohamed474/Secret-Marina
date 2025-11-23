import Image from 'next/image'
interface FormHeaderProps {
    label?: string;
    description?: string;
}

import formLogo from '@/assets/images/formLogo.png'

export default function FormHeader({label,description}:FormHeaderProps) {
  return (
    <div className='flex justify-center flex-col items-center gap-4   text-center'>
        <div className='flex justify-center items-center gap-3'>
            <Image src={formLogo} alt="Form Logo" className='w-8 h-12'/>
            <span className='text-xl font-bold text-(--text-black)'>{label}</span>
        </div>
        <p className='text-sm text-(--text-secondary) font-medium px-5'>{description}</p>
      
    </div>
  )
}
