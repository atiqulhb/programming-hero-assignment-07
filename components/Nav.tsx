import Image from 'next/image'

async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', {
        cache: 'no-store'
    })
    const data = await res.json()

    return data
}

export default async function Nav() {
    const categories = await getCategories()
    console.log(categories)

    const todaysDate = new Date()
    const todaysDateInBengali = todaysDate.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })
  return (
    <nav className='flex flex-col'>
        <div className='w-full border-b border-gray-300'>
            <div className='w-[80%] mx-auto flex items-center justify-between'>
                <div className='flex gap-2'>
                    <div className='w-10 h-10 bg-primary rounded-xl relative'>
                        <Image src="/logo-icon.png" fill className="object-contain" alt="logo icon"/>
                    </div>
                    <div className='flex flex-col items-start justify-between'>
                        <h3>বাজারদর</h3>
                        <span>{todaysDateInBengali}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-9 h-9 bg-amber-200 rounded-[10.5px]'>
                        {/* <Image/> */}
                    </div>
                    <div>
                        <span>User Name</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full border-b border-gray-300'>
            <div className='w-[80%] mx-auto'>
                <ul className='flex gap-1 py-2'>
                    {categories.map(({ id, nameBn, icon }) => (
                        <li key={id} className='flex gap-px px-3'>
                            <span>{icon}</span>
                            <span>{nameBn}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </nav>
  )
}
