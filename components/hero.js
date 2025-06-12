import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="h-half flex items-center">
      <div className="max-w-2xl 2xl:max-w-4xl mx-auto text-gray-800 px-4">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-8 md:mb-10 lg:mb-12 2xl:mb-14">
          <p>
            {title.split("\\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </h1>

        {subtitle && (
          <h2 className="text-lg lg:text-xl 2xl:text-2xl max-w-xl 2xl:max-w-2xl text-gray-800">
            <p>
              {subtitle.split("\\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </h2>
        )}
      </div>
    </section>
  );
};

export default Hero;
