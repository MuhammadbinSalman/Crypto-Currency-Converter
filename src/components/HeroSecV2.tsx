// "use client"
// import { Repeat } from 'lucide-react'
// import React, { useEffect, useRef, useState } from 'react'
// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Button } from "@/components/ui/button"
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"
// import { Separator } from './ui/separator'
// import { type } from 'os'

// const frameworks = [
//     {
//         value: "ethereum",
//         label: "Ethereum",
//     },
//     {
//         value: "bitcoin",
//         label: "Bitcoin",
//     },
// ]
// const frameworks2 = [
//     {
//         value: "ethereum",
//         label: "Ethereum",
//     },
//     {
//         value: "bitcoin",
//         label: "Bitcoin",
//     },
// ]


// const HeroSecV2 = ({ labels }: any) => {
//     console.log(labels, "data argument check kru")
//     const [input1val, setInput1val] = useState(1)
//     const [input2val, setInput2val] = useState(1)
//     const isCalculatingRef = useRef(false);
//     const handleChange1 = (event: any) => {
//         const newValue = event.target.value;
//         setInput1val(newValue);
//     };

//     const handleChange2 = (event: any) => {
//         const newValue = event.target.value;
//         setInput2val(newValue);
//     };

    
//     const [open, setOpen] = React.useState(false)
//     const [value, setValue] = React.useState("")
//     const [open2, setOpen2] = React.useState(false)
//     const [value2, setValue2] = React.useState("")
    
//     function findLabelByValue(valueToFind: any) {
//         const match = labels.find((item: any) => item.label.toLowerCase() === valueToFind.toLowerCase());
//         return match ? match.value : "Select Currency...";
//     }
//     useEffect(() => {
//         if (!isCalculatingRef.current) {
//             if (value !== 'Select Currency...' && value2 !== 'Select Currency...') {
//                 const currency1 = labels.find((currency: any) => currency.value === value);
//                 const currency2 = labels.find((currency: any) => currency.value === value2);
            
//             if (currency1 && currency2) {
//                 const value1Price = currency1.price;
//                 const value2Price = currency2.price;
//                 // console.log(`Price of ${currency1.label}: $${currency1.price}`);
//                 const divisionResultUp = value2Price/value1Price;
//                 const divisionResultDown = value1Price/value2Price;
//                 console.log(`answer = ${divisionResultUp} \n on reverse ${divisionResultDown}:`);
//                 const SetResultAbove= divisionResultUp*input1val
//                 const SetResultDown= divisionResultDown*input2val
//                 console.log(`answer of the above input ${input1val} = ${SetResultAbove} 🤩^_~💋`)
//                 setInput2val(SetResultAbove.toFixed(2))
//                 console.log(`answer of the lower input ${input2val} = ${SetResultDown} 🤩^_~💋`)
//             }
//         }
//     }
//     }, [value, value2, input1val, input2val]);
    

//     return (
//         <main className='w-full bg-gradient-to-r from-[#47509b] to-[#414fba] h-[580px] flex justify-center pb-5 pt-20'>
//             <div className='flex flex-col w-full gap-12'>
//                 <div className='flex flex-col gap-4'>
//                     <h1 className='text-4xl text-white font-bold text-center'>All Crypto Currencies Converter</h1>
//                     <h3 className='text-[17px] text-white text-center px-4'>Convertion tool to convert between any crypto currency </h3>
//                 </div>
//                 <div className='flex flex-col justify-center items-center w-full gap-3 sm:gap-8 md:gap-4 px-20 sm:px-8 md:px-64'>
//                     <div className=' flex flex-col gap-4 justify-center items-end'>
//                         <div className=' shadow-xl'>
//                             {/* <h1  className='text-xl font-semibold text-white'>{firstHeading} </h1> */}
//                         </div>
//                         <div className='bg-white rounded-xl h-12 sm:h-20 shadow-lg px-3 flex items-center justify-between active:border-2 active:border-b-slate-900 w-[155px] sm:w-[380px]'>
//                             <div className='flex gap-2 items-center'>
//                                 <input className='text-left px-2 sm:px-1 w-32 sm:w-36 outline-none border-transparent sm:h-[78px] h-10 text-lg font-semibold' type="number" value={input1val} onChange={handleChange1} />
//                                 <Separator orientation="vertical" className=' h-14 bg-gray-300' />
//                             </div>
//                             <Popover open={open2} onOpenChange={setOpen2}>
//                                 <PopoverTrigger asChild>
//                                     <Button
//                                         variant="outline"
//                                         role="combobox"
//                                         aria-expanded={open2}
//                                         className="outline-none border-transparent justify-between"
//                                     >
//                                         {
//                                             value2
//                                                 ? labels.find((labels: any) => labels.value === value2)?.label
//                                                 : "Select Currency..."}{console.log(value2, "curent value chec😭😭😭")
//                                         }
//                                         <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                                     </Button>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-[240px] rounded-lg bg-white p-0">

//                                     <Command>
//                                         <CommandInput placeholder="Search currency..." />
//                                         <CommandEmpty>No Currency found.</CommandEmpty>
//                                         <CommandGroup>
//                                             <ScrollArea className="h-72 w-full pl-1 pr-3 pt-4 rounded-lg border">
//                                                 {labels.map((labels: any) => (
//                                                     <CommandItem
//                                                         key={labels.value}
//                                                         onSelect={(currentValue) => {
//                                                             // setValue2(currentValue === value2 ? "" : currentValue)
//                                                             console.log(currentValue, "value going in findLabelByValue😭😭😭")
//                                                             setOpen2(false)
//                                                             const label = findLabelByValue(currentValue);
//                                                             setValue2(label);
//                                                             console.log(label, "value coming from findLabelByValue function and going in state from dropdown😭😭😭")
//                                                         }}
//                                                     >
//                                                         <Check
//                                                             className={cn(
//                                                                 "mr-2 h-4 w-4",
//                                                                 value2 === labels.value ? "opacity-100" : "opacity-0"
//                                                             )}
//                                                         />
//                                                         <div className='flex flex-col w-full '>
//                                                             {labels.label}
//                                                             <Separator className="my-2 bg-slate-200" />
//                                                         </div>
//                                                     </CommandItem>
//                                                 ))}
//                                             </ScrollArea>
//                                         </CommandGroup>
//                                     </Command>
//                                 </PopoverContent>
//                             </Popover>
//                         </div>
//                     </div>
//                     <div className=' justify-center items-start flex flex-col gap-4'>
//                         <div className='w-[155px] sm:w-[380px] active:border-2 active:border-b-slate-900 h-12 sm:h-20 shadow-lg px-3 rounded-xl flex items-center justify-between bg-white'>
//                             <div className='flex gap-2 items-center'>
//                                 <input className='text-left px-2 sm:px-1 w-32 sm:w-36 outline-none border-transparent h-10 sm:h-[78px]  text-lg font-semibold' value={input2val} onChange={handleChange2} />
//                                 <Separator orientation="vertical" className=' h-14 bg-gray-300' />
//                             </div>
//                             <Popover open={open} onOpenChange={setOpen}>
//                                 <PopoverTrigger asChild>
//                                     <Button
//                                         variant="outline"
//                                         role="combobox"
//                                         aria-expanded={open}
//                                         className=" outline-none border-transparent justify-between"
//                                     >
//                                         {
//                                             value
//                                                 ? labels.find((labels: any) => labels.value === value)?.label
//                                                 : "Select Currency..."}
//                                         <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                                     </Button>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-[240px] bg-white p-0">
//                                     <Command>
//                                         <CommandInput placeholder="Search framework..." />
//                                         <CommandEmpty>No framework found.</CommandEmpty>
//                                         <CommandGroup>
//                                             <ScrollArea className="h-72 w-full pl-1 pr-3 pt-4 rounded-lg border">
//                                                 {labels.map((labels: any) => (
//                                                     <CommandItem
//                                                         key={labels.value}
//                                                         onSelect={(currentValue) => {
//                                                             setOpen(false)
//                                                             const label = findLabelByValue(currentValue);
//                                                             setValue(label);
//                                                         }}
//                                                     >
//                                                         <Check
//                                                             className={cn(
//                                                                 "mr-2 h-4 w-4",
//                                                                 value === labels.value ? "opacity-100" : "opacity-0"
//                                                             )}
//                                                         />
//                                                         <div className='flex flex-col w-full '>
//                                                             {labels.label}
//                                                             <Separator className="my-2 bg-slate-200" />
//                                                         </div>
//                                                     </CommandItem>
//                                                 ))}
//                                             </ScrollArea>
//                                         </CommandGroup>
//                                     </Command>
//                                 </PopoverContent>
//                             </Popover>
//                         </div>
//                     </div>
//                     {value2}{value}{input1val}{input2val}
//                 </div>
//             </div>
//         </main>
//     )
// }
// export default HeroSecV2