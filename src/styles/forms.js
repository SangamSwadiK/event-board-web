const formStyleClasses = {
  input: `
    block
    border
    border-black
    dark:border-teal-400
    dark:bg-du-deepPurple
    w-full
    rounded-md
    h-14
    p-2
    text-xl
    text-[#545454]
    md:row-start-2
    md:col-span-2
  `,
  searchInput: `
    block
    border
    border-black
    dark:border-teal-400
    dark:bg-[#151A35]
    w-full
    rounded-md
    h-14
    p-2
    text-xl
    text-[#545454]
  `,
  select: `
    block
    w-full
    rounded-md
    h-14
    border
    border-black
    dark:border-teal-400
    dark:bg-transparent
    p-2
    text-xl
    text-[#545454]
    dark:bg-[#151A35]
  `,
  inputContainer: `
    pr-4
    mb-6
  `,
  button: `
    bg-gray-400
    text-center
    text-white
    w-full
    rounded
    py-1
    font-medium
  `,
  textarea: `
    block
    border
    border-black
    dark:border-teal-400
    dark:bg-transparent
    dark:text-white
    w-full
    h-40
    rounded
    p-2
  `,
  reviewButton: `
    bg-du-purple-500
    text-white
    py-2
    px-8
    rounded
    text-lg
    font-normal
  `,
  searchInputGroup: `
    block
    container
    mx-auto
    rounded-xl
    mb-10
    py-10
    search-form-gradient
    dark:from-[#000B4A]
    dark:to-[#5256BA]
    border
    border-du-purple-500
    dark:border-du-lightAqua
    border-4
    text-xl
  `,
  searchInputColumnsOne: `
    container
    gap-6
    grid
    mb-6
    md:grid-cols-4
    mx-auto
    sm:grid-cols-none
  `,
  searchInputColumnsTwo: `
    container
    gap-6
    grid
    mb-6
    md:grid-cols-4
    mx-auto
    sm:grid-cols-none
  `,
  popularSearch:`
    px-3 
    text-du-purple-500 
    dark:text-[#C86DFF]
    dark:underline 
    font-bold
  `,
  hyperlinks:`
    text-blue-500
    dark:text-[#0A66C2]
    hover:text-blue-700
    underline
  `,
  sendButton: `
    bg-du-purple-500
    hover:shadow-2xl
    hover:bg-blend-darken 
    text-white
    w-20
    mb-3
    p-2
    rounded-[10px]
    text-lg
    font-normal
    float-right
    active:bg-white 
    active:border 
    active:border-du-purple-500
    active:text-du-purple-500
  `,
  loginButton: `
    container
    bg-du-purple-500
    text-white
    mb-3
    p-1
    rounded-lg
    text-lg
    font-normal
  `,
  radioButtonValues:`
    rounded-md
    mx-2
    p-2
    md:row-start-2
    md:col-span-2
  `,
  organizationDetail: `
  grid 
  grid-cols-1 
  rounded 
  border 
  border-slate-300 
  bg-white 
  p-6 
  marker:mb-6 
  dark:border-teal-400 
  dark:bg-transparent 
  md:grid-cols-2 
  md:grid-rows-1 
  md:gap-6
`,
};

export default formStyleClasses;
