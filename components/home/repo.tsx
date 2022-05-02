import { HeaderSmall } from '@shared-components';

export default function RepoDetails(): JSX.Element {
  return (
    <>
      <div className="relative h-auto py-10 lg:py-10">
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4">
              <HeaderSmall text="Loved this website?" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Loved this portfolio?
                {/* Gender specific????? */}
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Visit Github Repository
              </h1>
              <a
                className="text-white hover:text-green-600"
                href="https://github.com/Superbluestar">
                Visit his github profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
