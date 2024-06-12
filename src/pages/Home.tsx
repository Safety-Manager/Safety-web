import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">안전파트너</h2>
              <p className="mb-6 text-gray-500 ">
                관련 법률을 통합적으로 제공하여 안전 관리자들이 필요한 정보를
                쉽게 찾을 수 있도록 합니다
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-end">
                <Link
                  to="#"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 sm:w-auto "
                >
                  <PlayIcon className="mr-2 h-6 w-6" />
                  Google Play
                </Link>
                <Link
                  to="#"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 sm:w-auto "
                >
                  <AppleIcon className="mr-2 h-6 w-6" />
                  App Store
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/image.png"
                alt="Mobile App Screenshot"
                width={400}
                height={800}
                className="h-auto w-full max-w-[300px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="flex justify-start  gap-2 py-5 pl-7 md:mt-10 md:pl-14">
        <Link to="#" className="">
          이용약관
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="#">개인정보 처리방침</Link>
      </footer>
    </>
  );
}

function AppleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
