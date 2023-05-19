import Work from "./work";
import { projects } from "../../constants";
export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center gap-10">
      <div className="font-extrabold  py-5 mt-10 text-5xl">Projects</div>
      <div className="flex flex-wrap flex-row justify-center w-full p-4 gap-12">
        {projects.map((project, ind) => {
          return (
            <div key={ind}>
              <Work
                title={project.title}
                desc={project.desc}
                img={project.img}
                link={project.link}
                code={project.code}
                tags={project.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
