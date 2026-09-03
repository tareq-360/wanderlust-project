"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Signup() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(data);
    const { name, imageUrl, email, password } = userData;
    // console.log(name,imageUrl,email,password);
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: "password1234",
      image: imageUrl,
      callbackURL: "/",
    });
    // console.log(data);
    if (data) {
      redirect("/")
    }
    else {
      toast.error(error.message);
    }
  }
  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const signInWithGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github"
    })
    }
    return (
      <div className="py-10 mx-auto container h-screen bg-slate-200">
        <div className=" flex justify-center ">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

            <TextField
              isRequired
              name="name"
              type="text"

            >
              <Label>Name</Label>
              <Input placeholder="John doe" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="imageUrl"
              type="text"

            >
              <Label>Image URL</Label>
              <Input placeholder="https://images.unsplash.com/photo-1624" />
              <FieldError />
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
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
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
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button type="submit">
                <Check />
                Sign up
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>

        </div>
        <div className=" flex justify-center py-2">
          <div className=" space-x-5">
            <button onClick={signInWithGoogle} className="text-green-600 font-bold btn-outline btn "><FaGoogle></FaGoogle> Sign up with google</button>
            <button onClick={signInWithGithub} className="text-green-600 font-bold btn-outline btn "><FaGithub></FaGithub>Sign up with github</button>
          </div>
        </div>
        <ToastContainer />
      </div>

    );
  }
