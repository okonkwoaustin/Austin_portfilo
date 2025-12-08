import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "API Design & Development",
    description:
      "I design clean, well-documented RESTful and GraphQL APIs that are scalable, secure, and easy to integrate with frontend and third-party services.",
  },
  {
    id: 2,
    title: "System Architecture & Scalability",
    description:
      "I architect backend systems with scalability, resilience, and performance in mind, using microservices, cloud services, and efficient data flow patterns.",
  },
  {
    id: 3,
    title: "Database & Data Modeling",
    description:
      "I design efficient database schemas, optimize queries, and manage data persistence for both SQL and NoSQL databases to ensure data integrity and performance.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            As a Backend Engineer, I focus on server-side logic, data modeling, 
            and API design to build the core infrastructure of web applications. 
            I prioritize clean code, scalability, and security in every system I build.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I blend deep technical expertise with a product-minded approach 
            to deliver backend solutions that are both efficient and maintainable, 
            enabling smooth and reliable user experiences.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
