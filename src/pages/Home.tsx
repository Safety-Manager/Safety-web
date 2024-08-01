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
            <div
              className="group relative flex justify-center overflow-hidden"
              style={{ height: '600px' }}
            >
              {' '}
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Example"
                  className="h-auto w-full max-w-[300px] rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3 }}
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
}
