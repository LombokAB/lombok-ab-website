import React from 'react';

interface ExpertServicesProps {
  header: string;
}

export const ExpertServices: React.FC<ExpertServicesProps> = ({ header }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center">{header}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold">Service 1</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, eros
            sit amet tincidunt interdum, ex odio ultricies purus, nec ultricies nunc nunc
            in nunc.
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold">Service 2</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, eros
            sit amet tincidunt interdum, ex odio ultricies purus, nec ultricies nunc nunc
            in nunc.
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold">Service 3</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, eros
            sit amet tincidunt interdum, ex odio ultricies purus, nec ultricies nunc nunc
            in nunc.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold">Service 3</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, eros
            sit amet tincidunt interdum, ex odio ultricies purus, nec ultricies nunc nunc
            in nunc.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold">Service 3</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, eros
            sit amet tincidunt interdum, ex odio ultricies purus, nec ultricies nunc nunc
            in nunc.
          </p>
        </div>
      </div>
    </section>
  );
};
