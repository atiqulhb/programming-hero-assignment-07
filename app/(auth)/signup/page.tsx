"use client";

import { signUp } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

export default function Basic() {
  const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // Convert FormData to plain object

        console.log('data from the form', data)

        const {data: resData, error} = await signUp.email({
            name: data.name as string,
            email: data.email as string, 
            password: data.password as string
        });

        console.log(resData, error)
    };

  return (
    <div className="flex-1 bg-base-300">
        <div className="w-md mx-auto flex flex-col gap-6 px-4 py-6 ">
            <div className="flex flex-col">
                <h3 className="text-center">অ্যাকাউন্ট তৈরি করুন</h3>
                <span className="text-center">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</span>
            </div>
        <Form className="flex w-96 flex-col gap-4 p-6 rounded-2xl bg-base-100" onSubmit={onSubmit}>
            <TextField
                isRequired
                name="name"
                type="text"
            >
                <Label>নাম</Label>
                <Input placeholder="যেমন: রহিম উদ্দিন"/>
            </TextField>
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
        অ্যাকাউন্ট তৈরি করুন
    </Button>
    </Form>
    </div>
    </div>
    
  );
}