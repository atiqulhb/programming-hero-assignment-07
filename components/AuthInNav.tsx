'use client'

import Link from 'next/link'
import { signOut, useSession } from "@/lib/auth-client";
import { Button, Spinner, Dropdown, Label, Avatar } from "@heroui/react";
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {CaretDown} from '@gravity-ui/icons';

export default function AuthInNav() {
        const { data: session, isPending } = useSession();

  return (
    <div className='flex gap-1.5'>
        {session?.user ?
                 <Dropdown>
                    <Dropdown.Trigger className="rounded-full">
                        {/* <Avatar>
                        { <Avatar.Image
                            alt="Junior Garcia"
                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                        />
                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback> }
                        sfsdf
                        </Avatar>
                        dfgdf */}
                        <div className='flex items-center gap-2'>
                            <span>{session.user?.name}</span>
                            <CaretDown/>
                        </div>
                        
                    </Dropdown.Trigger>
                    <Dropdown.Popover>
                        <div className="px-3 pt-3 pb-1">
                        <div className="flex items-center gap-2">
                            {/* <Avatar size="sm">
                            <Avatar.Image
                                alt="Jane"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                            />
                            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                            </Avatar> */}
                            <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{session?.user?.name}</p>
                            <p className="text-xs leading-none text-muted">{session?.user?.email}</p>
                            </div>
                        </div>
                        </div>
                        <Dropdown.Menu>
                        <Dropdown.Item id="new-project" textValue="New project">
                            <div className="flex w-full items-center justify-between gap-2">
                            <Link href="/profile">আমার প্রোফাইল</Link>
                            <Persons className="size-3.5 text-muted" />
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                            <div className="flex w-full items-center justify-between gap-2">
                            <Button onClick={() => signOut()}>সাইন আউট</Button>
                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                            </div>
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                    </Dropdown>
        :
            <>
                <Link href="/signin" className='p-4'>সাইন ইন</Link>
                <Link href="/signup" className='p-4 bg-primary text-primary-content rounded-lg'>সাইন আপ</Link>
            </>
}
    </div>
  )
}
