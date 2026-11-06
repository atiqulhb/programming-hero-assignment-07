'use client'

import {useEffect} from 'react'
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log('form er data', data)

        const { data: resData, error } = await signIn.email({
            email: data.email as string,
            password: data.password as string,
            rememberMe: true,
            callbackURL: '/'
        })

        console.log('after submit', resData, error);

    };

  return (
    <div className='w-md mx-auto px-4 py-10 bg-amber-200'>
        <h2 className='font-bold text-center'>সাইন ইন</h2>
        <span>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</span>
        <Form className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100" onSubmit={onSubmit}>
                   
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
        
                  return null;
                }}
              >
                <Label>ইমেইল</Label>
                <Input placeholder="you@example.com" />
                <FieldError />
              </TextField>
        
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
        
                  return null;
                }}
              >
                <Label>পাসওয়ার্ড</Label>
                <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
              </TextField>
        
            <Button type="submit" className="w-full text-center bg-primary text-primary-content">
               সাইন
            </Button>
            <span>অথবা</span>
            <div>
              
            </div>
            </Form>
    </div>
  )
}
