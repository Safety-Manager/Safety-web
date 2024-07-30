import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showNextIcon, setShowNextIcon] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/main.jpg',
    '/home.jpg',
    'search.jpg',
    'searchinfo.jpg',
    'board.jpg',
  ];

  const handleNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="bg-background flex min-h-screen w-full">
        <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-16 w-16 rounded-md shadow-lg"
              src="/logo.png"
              alt="logo"
            />
            <span className="text-xl font-semibold">모두 안전</span>
          </Link>
          <nav className=" space-x-4 md:flex">
            <Link
              to="/Teams"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              이용약관
            </Link>
            <Link
              to="/Information"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              개인정보 처리방침
            </Link>
          </nav>
        </header>
        <div className="container mx-auto mt-36 flex justify-center px-4 text-center md:mt-0 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                <div className="flex flex-col items-center gap-4 p-6 shadow-md transition-all hover:shadow-lg">
                  <SearchIcon className="flex   text-gray-500" />
                  <h3 className="text-xl font-bold">법령 빠른 검색</h3>
                  <p className="text-gray-500">
                    관련 법률을 통합적으로 제공하여 안전 관리자들이 필요한
                    정보를 쉽게 찾을 수 있습니다.
                  </p>
                </div>
                <div className="mt-1 flex flex-col items-center gap-4 p-6 shadow-md transition-all hover:shadow-lg">
                  <Safety className="text-gray-500" />
                  <h3 className="mt text-xl font-bold">안전 교육 매칭</h3>
                  <p className="text-gray-500">
                    안전 교육을 필요로 하는 기업과 안전 교육을 제공하는 업체를
                    연결해주는 서비스를 제공합니다.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 shadow-md transition-all hover:shadow-lg">
                  <CheckIcon className=" text-gray-500" />
                  <h3 className="text-xl font-bold">커뮤니티</h3>
                  <p className="text-gray-500">
                    안전 관리자들이 소통하고 필요한 정보를 공유할 수 있는
                    커뮤니티를 제공합니다.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-end">
                <Link
                  to="#"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 sm:w-auto"
                >
                  <PlayIcon className="mr-2 h-6 w-6" />
                  Google Play
                </Link>
                <Link
                  to="#"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 sm:w-auto"
                >
                  <AppleIcon className="mr-2 h-6 w-6" />
                  App Store
                </Link>
              </div>
            </div>
            <div className="group relative flex justify-center">
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Example"
                  className="h-auto w-full max-w-[300px] transform rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleNextImage}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );

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

  function FeatureCard({
    icon,
    title,
    description,
  }: {
    icon: any;
    title: string;
    description: string;
  }) {
    return (
      <div className="flex flex-col gap-4 p-6 shadow-md transition-all hover:shadow-lg">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
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

  function NextIcon(props: any) {
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
        <polyline points="9 18 15 12 9 6" />
      </svg>
    );
  }

  function CheckIcon(props: any) {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_688_71)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9922 18.805C13.0561 17.431 13.9769 14.8677 13.2592 12.4944C12.5414 10.1211 10.3544 8.49772 7.875 8.49772C5.39558 8.49772 3.20857 10.1211 2.49084 12.4944C1.7731 14.8677 2.69393 17.431 4.75781 18.805C2.93952 19.4752 1.38666 20.7153 0.330938 22.3403C0.179932 22.5647 0.161484 22.8531 0.28266 23.095C0.403836 23.3368 0.645857 23.4947 0.916031 23.5081C1.18621 23.5215 1.44266 23.3884 1.58719 23.1597C2.97076 21.0317 5.33677 19.7479 7.875 19.7479C10.4132 19.7479 12.7792 21.0317 14.1628 23.1597C14.3917 23.4999 14.8514 23.5932 15.1948 23.3692C15.5382 23.1452 15.6381 22.6869 15.4191 22.3403C14.3633 20.7153 12.8105 19.4752 10.9922 18.805ZM3.75 14.125C3.75 11.8468 5.59683 10 7.875 10C10.1532 10 12 11.8468 12 14.125C12 16.4032 10.1532 18.25 7.875 18.25C5.5979 18.2474 3.75258 16.4021 3.75 14.125ZM23.4506 23.3781C23.1037 23.6043 22.6391 23.5066 22.4128 23.1597C21.0308 21.0303 18.6636 19.7466 16.125 19.75C15.7108 19.75 15.375 19.4142 15.375 19C15.375 18.5858 15.7108 18.25 16.125 18.25C17.7863 18.2484 19.2846 17.2504 19.9261 15.718C20.5677 14.1855 20.2273 12.4178 19.0626 11.2331C17.898 10.0484 16.1363 9.67805 14.5931 10.2934C14.3427 10.4017 14.0531 10.3654 13.8372 10.1986C13.6212 10.0319 13.5128 9.76096 13.5542 9.49125C13.5956 9.22154 13.7802 8.99558 14.0363 8.90125C16.7109 7.83457 19.7592 8.96001 21.099 11.5088C22.4388 14.0576 21.6374 17.2067 19.2422 18.805C21.0605 19.4752 22.6133 20.7153 23.6691 22.3403C23.8953 22.6872 23.7975 23.1518 23.4506 23.3781Z"
            fill="black"
          />
        </g>
      </svg>
    );
  }

  function SearchIcon(props: any) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }

  function SignalIcon(props: any) {
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
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20V8" />
        <path d="M22 4v16" />
      </svg>
    );
  }

  function Safety(props: any) {
    return (
      <svg
        width="28"
        height="20"
        viewBox="0 0 28 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5798 10.97C25.4498 7.56999 23.8598 3.72999 20.6398 2.20999C17.0498 0.509994 12.4698 0.339994 8.99979 2.44999C8.16979 2.95999 7.32979 3.69999 6.74979 4.48999C5.60979 6.04999 4.97979 7.87999 4.71979 9.77999C4.58979 10.68 4.59979 11.53 4.59979 12.44C4.59979 12.44 6.01979 15.85 12.2098 15.27C15.5598 14.96 19.0798 14.95 22.3698 14.18C23.1698 13.99 23.9698 13.7 24.5998 13.17C25.1898 12.67 25.6098 11.76 25.5798 10.97Z"
          stroke="black"
          stroke-width="1.8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.5901 10.55C26.3701 11.14 26.8001 12.96 26.6601 13.86C26.5001 14.89 25.8001 15.76 24.9901 16.38C23.3901 17.61 21.2301 17.92 19.2701 18.12C18.2001 18.23 17.1301 18.25 16.0601 18.33C14.7901 18.42 13.5001 18.44 12.2301 18.56C9.98014 18.78 7.68014 19.26 5.42014 18.94C3.71014 18.7 1.18014 17.99 0.910137 15.94C0.810137 15.15 1.27014 14.4 1.94014 13.79"
          stroke="black"
          stroke-width="1.8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.0906 1.13989C11.6506 3.12989 10.1706 7.19989 9.9106 10.9899C9.8206 12.3399 9.8206 13.7199 9.9006 15.0599"
          stroke="black"
          stroke-width="1.8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  function MountainIcon(props: any) {
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  }
  function Logo(props: any) {
    return (
      <svg
        width="116"
        height="125"
        viewBox="0 0 116 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_835_12)">
          <path
            d="M106.16 49.84H102.24C102.24 49.68 102.25 49.52 102.25 49.35C102.25 30.48 90.4895 14.37 73.9095 7.91V26.07C73.9095 27.42 72.8195 28.51 71.4695 28.51C70.1195 28.51 69.0295 27.42 69.0295 26.07V2.56C69.0295 1.15 67.8895 0 66.4695 0H49.0995C47.6895 0 46.5395 1.14 46.5395 2.56V25.9C46.5395 27.25 45.4495 28.34 44.0995 28.34C42.7495 28.34 41.6595 27.25 41.6595 25.9V7.91C25.0795 14.37 13.3295 30.48 13.3295 49.35C13.3295 49.51 13.3395 49.68 13.3395 49.84H9.41953C6.98953 49.84 5.01953 51.81 5.01953 54.24C5.01953 56.67 6.98953 58.64 9.41953 58.64H106.16C108.59 58.64 110.56 56.67 110.56 54.24C110.56 51.81 108.59 49.84 106.16 49.84Z"
            fill="#F4A526"
          />
          <path
            d="M24.5995 68.4C29.7195 68.4 34.8395 68.43 39.9595 68.4C46.5595 68.36 52.3395 70.39 57.0495 75.09C57.6595 75.7 57.9795 75.64 58.5495 75.06C63.1095 70.54 68.7095 68.48 75.0395 68.43C86.2395 68.36 97.4495 68.43 108.649 68.38C109.839 68.38 110.259 68.7 110.189 69.91C110.099 71.66 110.089 74.13 110.189 75.89C110.269 77.17 109.829 77.51 108.579 77.5C99.4595 77.45 90.3395 77.45 81.2095 77.48C78.3895 77.48 75.5495 77.24 72.7395 77.72C67.8895 78.55 64.1595 81.57 62.3995 86.38C62.1595 87.03 61.7795 87.13 61.1995 87.13C58.9095 87.11 56.6095 87.11 54.3195 87.13C53.7295 87.13 53.3795 87.01 53.1295 86.37C50.8695 80.61 46.2995 77.55 40.4295 77.5C29.4395 77.4 18.4495 77.47 7.45947 77.47C6.08613 77.47 5.39947 76.77 5.39947 75.37C5.39947 73.88 5.47947 71.68 5.37947 70.19C5.27947 68.82 5.68947 68.35 7.14947 68.37C12.9595 68.45 18.7795 68.4 24.5895 68.4H24.5995Z"
            fill="#333333"
          />
          <path
            d="M23.36 119.29C25.01 119.29 25.66 120.41 25.66 121.54C25.66 122.67 24.97 123.79 23.36 123.79H2.3C0.68 123.79 0 122.72 0 121.54C0 120.36 0.66 119.29 2.3 119.29H10.03V114.16H5.29C2 114.16 1.4 113.17 1.4 110.02V103.55C1.4 100.4 2 99.4102 5.29 99.4102H20.37C23.66 99.4102 24.26 100.4 24.26 103.55V114.16H15.63V119.29H23.36ZM6.88 109.03C6.88 109.55 7.05 109.85 7.7 109.85H18.78V104.5C18.78 104.03 18.67 103.71 18.12 103.71H7.51C6.96 103.71 6.88 104.04 6.88 104.5V109.02V109.03Z"
            fill="#333333"
          />
          <path
            d="M50.7797 113.67C52.4297 113.67 53.0797 114.79 53.0797 115.92C53.0797 117.05 52.3897 118.17 50.7797 118.17H43.0497V124.48H37.4597V118.17H29.7297C28.1097 118.17 27.4297 117.07 27.4297 115.92C27.4297 114.77 28.0897 113.67 29.7297 113.67H50.7897H50.7797ZM32.7897 111.75C29.8597 111.75 28.7297 110.76 28.7297 107.94V102.98C28.7297 100.18 29.8497 99.2002 32.7897 99.2002H49.5397C50.9397 99.2002 51.4897 100.46 51.4897 101.48C51.4897 102.5 50.9097 103.73 49.5397 103.73H34.9497C34.4597 103.73 34.2597 103.87 34.2597 104.33V106.63C34.2597 107.1 34.4497 107.29 34.9497 107.29H49.8697C51.2097 107.29 51.8197 108.55 51.8197 109.51C51.8197 110.47 51.1897 111.76 49.8697 111.76H32.7897V111.75Z"
            fill="#333333"
          />
          <path
            d="M63.2305 107.61V105.22C63.2305 101.16 66.4105 99.0201 70.8805 99.0201C75.3505 99.0201 78.5605 101.13 78.5605 105.22V107.61C78.5605 111.7 75.3505 113.81 70.9105 113.81C66.4705 113.81 63.2305 111.7 63.2305 107.61ZM85.3305 120.11C86.9805 120.11 87.6105 121.1 87.6105 122.19C87.6105 123.28 86.9505 124.33 85.3305 124.33H68.5505C65.4805 124.33 64.6605 123.26 64.6605 120.33V117.45C64.6605 115.67 65.9505 114.82 67.4805 114.82C69.0105 114.82 70.2205 115.7 70.2205 117.45V119.48C70.2205 120 70.3605 120.11 70.8805 120.11H85.3305ZM68.5205 107.61C68.5205 108.95 69.5605 109.72 70.8805 109.72C72.2005 109.72 73.2705 108.95 73.2705 107.61V105.2C73.2705 103.88 72.2005 103.09 70.8805 103.12C69.5605 103.15 68.5205 103.92 68.5205 105.2V107.61ZM87.5805 105.44C89.2505 105.44 89.7505 106.73 89.7505 107.83C89.7505 108.93 89.2305 110.22 87.5805 110.22H86.7305V118.03H81.2505V101.3C81.2505 99.5201 82.5405 98.5901 83.9905 98.5901C85.4405 98.5901 86.7305 99.5201 86.7305 101.3V105.44H87.5805Z"
            fill="#333333"
          />
          <path
            d="M92.6301 114.16C91.2901 114.16 90.1602 113.37 90.1602 111.94C90.1602 110.87 90.7402 110.1 91.8102 109.88C94.2802 109.36 95.7001 107.44 95.7001 105V103.9H92.3302C91.0402 103.9 90.3302 102.69 90.3302 101.71C90.3302 100.73 90.9302 99.4601 92.3302 99.4601H104.61C106.01 99.4601 106.61 100.72 106.61 101.71C106.61 102.7 105.9 103.9 104.61 103.9H100.88V105C100.88 105.38 100.85 105.74 100.83 106.1C104.89 106.43 106.94 108.87 106.81 113.91H101.71C101.93 111.8 101 110.15 99.4902 110.04C97.8702 112.65 95.1301 114.15 92.6301 114.15V114.16ZM113.3 120.11C114.95 120.11 115.58 121.1 115.58 122.19C115.58 123.28 114.92 124.33 113.3 124.33H95.9702C92.9002 124.33 92.0802 123.26 92.0802 120.33V117.59C92.0802 115.81 93.3702 114.96 94.9002 114.96C96.4302 114.96 97.6402 115.84 97.6402 117.59V119.51C97.6402 120.03 97.7802 120.11 98.3002 120.11H113.3ZM108.01 104.1H109.35V101.3C109.35 99.5201 110.64 98.5901 112.09 98.5901C113.54 98.5901 114.83 99.5201 114.83 101.3V118.03H109.35V108.52H108.01C106.58 108.52 105.68 107.67 105.68 106.33C105.68 104.99 106.56 104.11 108.01 104.11V104.1Z"
            fill="#333333"
          />
        </g>
        <defs>
          <clipPath id="clip0_835_12">
            <rect width="115.58" height="124.47" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
