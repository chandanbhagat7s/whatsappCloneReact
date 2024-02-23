/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Np53yrWiV9n
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Button } from "@/components/ui/button"

import { Button } from "@mui/material";

export default function Profile() {
  return (
    <div className="bg-sky-900 text-white mb-28 py-8">
      <div className="flex flex-col items-center p-6">
        <div className="relative mb-4">
          <img
            alt="Adele Laurie Blue Adkins"
            className="rounded-full"
            height="150"
            src="https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg"
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width="150"
          />
          <Button className="absolute -bottom-2 -right-2 bg-[#e94560] text-white">
            Follow
          </Button>
        </div>
        <h1 className="text-2xl font-bold">Adele Laurie Blue Adkins</h1>
        <p className="text-sm text-[#a3a3c2] mb-4">
          Auteure - compositrice & interprète
        </p>
        <div className="flex space-x-4 mb-4">
          <Button className="bg-[#16213e]">3K following</Button>
          <Button className="bg-[#16213e]">30.5M followers</Button>
          <Button className="bg-[#16213e]">90.6M views</Button>
        </div>
        <div className="flex space-x-2 mb-6">
          <HeartIcon className="text-[#e94560]" />
          <ReplyIcon className="text-[#e94560]" />
          <ShareIcon className="text-[#e94560]" />
          <MoreVerticalIcon className="text-[#e94560]" />
        </div>
        <div className="bg-[#0f3460] rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">ABOUT</h2>
          <p className="text-sm text-[#a3a3c2]">
            Adele (born 5 May 1988) is an English singer-songwriter. After
            graduating from the BRIT School for Performing Arts and Technology
            in 2006, Adele was given a recording contract by XL Recordings after
            a friend posted her demo on Myspace the same year. In 2007, she
            received the Brit Awards "Critics' Choice" award and won the BBC
            Sound of 2008 poll. Her debut album, 19, was released in 2008 to
            commercial and critical success. It is certified seven times
            platinum in the UK, and three times platinum in the U.S. The album
            contains her first song, "Hometown Glory", written when she was 16,
            which is based on her home suburb of West Norwood in London. An
            appearance made on the Saturday Night Live in 2008 boosted her
            career in the U.S. At the 51st Grammy Awards in 2009, Adele received
            the awards for Best New Artist and Best Female Pop Vocal
            Performance.
          </p>
          <div className="flex justify-end mt-4">
            <Button className="bg-[#e94560]">View more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MoreVerticalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
