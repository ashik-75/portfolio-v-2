import React from "react";
import BlurImage from "@/components/blur-image";
import { projects } from "@/data/projects";
import { Phone, Mail, Home } from "lucide-react";
const Page = () => {
  return (
    <div className="min-h-full bg-purple-50/50">
      <div className="mx-auto h-full max-w-5xl space-y-10 bg-white p-5 md:p-16">
        <div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black">Sweet Rana</h1>
            <p>Frontend Software Engineer</p>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="text-zinc-500" size={16} />

                <span>+8801786066566</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-zinc-500" size={16} />
                <span>ashikex49@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="text-zinc-500" size={16} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">About</h1>
          <p className="max-w-xl">
            As a Frontend Engineer, I have successfully launched several
            products, guiding them from conception to implementation. I excel in
            developing functional and data-driven applications, leveraging my
            expertise in TypeScript, React, Redux, and Tailwind. With two years
            of experience, I have seamlessly collaborated with companies locally
            and remotely.
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="space-y-5">
            <div className="max-w-xl">
              <div className="text-sm">April 1, 2022 - Dec 31, 2023</div>

              <div>
                <h1 className="font-bold">
                  Mid Level Frontend Software Developer
                </h1>
                <p className="mb-2 text-sm">GigaTech Solution</p>
                <p>
                  Develop a collection of tools for developers, which will serve
                  as a one-stop-shop for building applications. As a frontend
                  developer working with React and TypeScript, I was responsible
                  for managing the frontend functionality and design of the
                  application. I also tested the app with Vite.
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="text-sm">March 1, 2022 - Feb 28, 2023</div>

              <div>
                <h1 className="font-bold">Frontend Software Developer</h1>
                <p className="mb-2 text-sm">DevsNest LLC </p>

                <p>
                  DevsNest created a Shopify app for the Shopify App Store. My
                  responsibility was to manage the frontend functionality and
                  frontend design of the application.To obtain data and develop
                  features, I collaborated with the backend development team.
                  Since DevsNest has both PHP and Node.js developer teams, I
                  worked closely with them to develop Shopify apps.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Skiills</h1>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {[
              "Javascript",
              "Typescript",
              "React",
              "Next.js",
              "React-Query/RTK Query/SWR",
              "Zustand/Redux",
              "Cypress/Jest/Vitest",
            ].map((tech) => (
              <span
                key={Date.now()}
                className="rounded-3xl border px-3 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <a href={project.path} target="_blank" key={project.id}>
                <div className="space-y-2 rounded-3xl border p-3">
                  <BlurImage url={project.url} />

                  <div className="px-2">
                    <h1 className="text-lg font-bold">{project.title}</h1>
                    <p className="line-clamp-2 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
