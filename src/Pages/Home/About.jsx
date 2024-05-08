import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content h-full flex-col lg:flex-row p-6">
        <div className="lg:w-1/2  relative mx-auto h-full">
          <img
            src={person}
            className="  size-3/4 max-w-sm rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="absolute top-1/2 -translate-y-1/4 right-0 -translate-x-1/2  border-white border-8 size-1/2 z-10 max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 text-balance mx-auto">
          <h1 className="text-orange-500 font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified
            <br />& of experience
            <br />
            in this field
          </h1>
          <p className="py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which dont look even slightly
            believable.
          </p>
          <p className="py-4">
            The majority have suffered alteration in some form, by injected
            humour, or randomized words which dont look even slightly
            believable.
          </p>
          <button className="btn btn-primary text-white font-bold border-none bg-orange-500">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
