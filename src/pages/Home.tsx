import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [showNextIcon, setShowNextIcon] = useState(false);

  const images = ['/main.png', '/main2.png'];

  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">안전파트너</h2>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col gap-4 p-6 shadow-md transition-all hover:shadow-lg">
                  <SearchIcon className="ㄴ h-8 w-8 text-gray-500" />
                  <h3 className="text-xl font-bold">법령 빠른 검색</h3>
                  <p className="text-gray-500 ">
                    관련 법률을 통합적으로 제공하여 안전 관리자들이 필요한
                    정보를 쉽게 찾을 수 있습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-6 shadow-md transition-all hover:shadow-lg">
                  <Safety className="h-8 w-8  text-gray-500" />
                  <h3 className="text-xl font-bold">안전 교육 매칭</h3>
                  <p className="text-gray-500 ">
                    안전 교육을 필요로 하는 기업과 안전 교육을 제공하는 업체를
                    연결해주는 서비스를 제공합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-6 shadow-md transition-all hover:shadow-lg">
                  <CheckIcon className="h-8 w-8 text-gray-500 " />
                  <h3 className="text-xl font-bold">커뮤니티</h3>
                  <p className="text-gray-500 ">
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
              <img
                src="/main.png"
                alt="Example"
                className="h-auto w-full max-w-[300px] transform rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:translate-x-4"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <NextIcon className="h-8 w-8 text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-10 text-gray-400">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-50">
                프로젝트 개요
              </h4>
              <Link to="#" className="mb-2 block  hover:text-slate-300">
                소개
              </Link>

              <Link to="#" className="mb-2 block hover:text-slate-300">
                목표
              </Link>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-50">고객 지원</h4>

              <Link to="#" className="mb-2 block hover:text-slate-300">
                도움말 센터
              </Link>
              <Link to="#" className="mb-2 block hover:text-slate-300">
                고객 서비스
              </Link>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-50">정책</h4>
              <Link to="#" className="hover:text-slate-300">
                이용약관
              </Link>
              <Link to="#" className="mb-2 mt-2 block hover:text-slate-300">
                개인정보 처리방침
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
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
      <path d="M20 6 9 17l-5-5" />
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
