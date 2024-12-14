"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import React from "react";
import { GiCoffeeCup } from "react-icons/gi";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted", data);
    alert("Your message has been sent!");
  };

  return (
    <section className="relative w-full my-24">
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Dark Theme Image */}
        <Image
          src="/assets/motivation/emoji1.jpeg"
          alt="Hero Background Dark"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          className="hidden dark:block"
          priority
          quality={85}
        />
      </div>
      <div className="flex p-2 sm:p-4 md:p-6  flex-col justify-center items-center min-h-screen w-full relative">
        <div className="flex flex-col w-full relative justify-center items-center md:justify-between gap-8">
          <div className="flex flex-col w-full items-center justify-center text-center gap-4  text-BrandMain-light">
            <h2 className="text-4xl font-semibold font-edu text-secondary-dark dark:text-secondary-light">Grab a <span className="text-BrandQuaternary-light dark:text-BrandMain-light">coffee </span> and let&apos;s chat</h2>
            <GiCoffeeCup size={64}/>
          </div>
          <div className="flex relative flex-col w-full mx-auto px-0 sm:px-4 md:px-6 py-6">
            <div className="absolute inset-0 dark:bg-black/50 h-full w-full" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6  relative shadow-md rounded-md px-2 sm:px-4 md:px-6 py-6"
            >
              <div className="">
                <label htmlFor="name" className="block text-3xl font-medium font-anton">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`mt-1 block w-full py-4 bg-transparent font-nanumMyeongjo dark:border-tertiary-dark border-solid border-b-[2px]  focus:border-none   focus:border-green-200 sm:text-sm ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm bg-transparent text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-3xl font-medium font-anton"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`mt-1 block w-full py-4 bg-transparent font-nanumMyeongjo  border-solid border-b-[2px] dark:border-tertiary-dark focus:border-none   focus:border-green-200 sm:text-sm ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-3xl font-medium font-anton"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={`mt-1 block w-full py-4 bg-transparent font-nanumMyeongjo dark:text-
                     border-solid border-b-[2px] focus:border-none dark:border-tertiary-dark   focus:border-green-200 sm:text-sm ${
                    errors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-BrandQuaternary-light dark:text-BrandTertiary-dark  dark:bg-BrandMain-light text-white py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
