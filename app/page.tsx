import React from "react";
import BlurImage from "@/components/blur-image";
import { projects } from "@/data/projects";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-full bg-orange-50/50">
      <div className="mx-auto h-full max-w-5xl space-y-10 bg-white p-10">
        <div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black">Sweet Rana</h1>
            <p>Frontend Software Developer</p>
            <p className="max-w-md">
              Frontend Engineer focused on building products with extra
              attention to detail and loves to work with React, Next js and
              Typescript.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">About</h1>
          <p className="max-w-xl">
            As a Full Stack Engineer, I have successfully taken multiple
            products from 0 to 1.I lead teams effectively, ensuring an
            environment where people can do their best work. Currently, I work
            mostly with TypeScript, React, Next.js, and Tailwind. I have over 2
            years of experience in working locally and remotely with companies
            all around the world.
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="space-y-5">
            <div className="max-w-md">
              <div className="text-sm">2022 - 2023</div>

              <div>
                <h1 className="font-bold">
                  Mid Level Frontend Software Developer
                </h1>
                <p className="mb-2 text-sm">GigaTech Solution</p>
                <p>
                  Implemented new features, led squad, worked on improving the
                  way developers ship the code, started migration from Emotion
                  to Tailwind CSS and more. Technologies: React, TypeScript,
                  GraphQL
                </p>
              </div>
            </div>

            <div className="max-w-md">
              <div className="text-sm">2021 - 2022</div>

              <div>
                <h1 className="font-bold">Frontend Software Developer</h1>
                <p className="mb-2 text-sm">DevsNest LLC </p>

                <p>
                  Implemented new features, led squad, worked on improving the
                  way developers ship the code, started migration from Emotion
                  to Tailwind CSS and more. Technologies: React, TypeScript,
                  GraphQL
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-bold">Skiills</h1>

          <div className="flex flex-wrap gap-5">
            {[
              "React",
              "Next.js",
              "Typescript",
              "Javascript",
              "React-Query",
              "Zustand/Redux",
            ].map((tech) => (
              <span
                key={Date.now()}
                className="rounded border px-4 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5 pb-20">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="grid grid-cols-3 gap-5">
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

            <div>Proj - 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
