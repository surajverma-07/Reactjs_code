import React ,{useId,forwardRef} from 'react'


function Select({
    options,
    lable,
    className="",
    ...props
},ref){
    const id = useId()
   return(
    <div className='w-full'>
        {lable && <lable className='' htmlFor={id}> </lable>}
        <select 
         id={id}
         className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
         ref={ref}
         {...props}
         ></select>
         {options?.map((option)=>(<option key={option} value={option}>
            {option}
         </option>))}
    </div>
   )
}


export default forwardRef(Select);
