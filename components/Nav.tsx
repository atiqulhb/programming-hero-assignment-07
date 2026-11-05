import Image from 'next/image'
import { signOut, useSession } from "@/lib/auth-client";
import { Link, Button, Spinner } from "@heroui/react";

async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', {
        cache: 'no-store'
    })
    const data = await res.json()

    return data
}

export default async function Nav() {

    const { data: session, isPending } = useSession();

    const categories = await getCategories()
    console.log(categories)

    const todaysDate = new Date()
    const todaysDateInBengali = todaysDate.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

     const authLinks = <>
        {
            session?.user ? <>
                <span>Welcome, {session.user?.name}</span>
                <Button onClick={() => signOut()}>Sign Out</Button>
            </> : <>
                <Link href="/sign-in">Sign in</Link>
                <Link href="/sign-up"><Button>Sign Up</Button></Link>
            </>
        }
    </>

    

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

                <div className='flex gap-1.5'>
                    <Link href="/signin" className='p-4'>সাইন ইন</Link>
                    <Link href="/signup" className='p-4 bg-primary text-primary-content rounded-lg'>সাইন আপ</Link>
                </div>
                
                {/* <details className="dropdown">
                    <summary className="btn m-1">
                        <div className='flex items-center gap-2'>
                            <div className='w-9 h-9 bg-amber-200 rounded-[10.5px]'>
                                {/* <Image/> */}
                            {/* </div>
                            <div>
                                <span>User Name</span>
                            </div>
                        </div>
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className="card-body">
                            <h3>Rezwan Ahmed</h3>
                            <span>rezwanahmed@gmail.com</span>
                        </li>
                        <li><a>আমার প্রোফাইল</a></li>
                        <li><a>↩ সাইন আউট</a></li>
                    </ul>}
                </details> */}
            </div>
        </div>
        <div className='w-full border-b border-gray-300'>
            <div className='w-[80%] mx-auto'>
                <ul className='flex gap-1 py-2'>
                    {categories.map(({ id, nameBn, icon, slug }) => (
                        <li key={id}>
                            <Link href={`/categories/${slug}`} className='flex gap-px px-3'>
                                <span>{icon}</span>
                                <span>{nameBn}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </nav>
  )
}
