import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ClubCard from '../components/ClubCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>VIT Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='bg-mainColor w-full h-screen fixed'>
          <nav className='p-4 mb-10'>
            <span className='text-whiteAlternate hover:text-blueAlternate1 text-4xl font-montserrat font-bold float-left transition duration-300'>VIT Vellore Events</span>
            <ul className='text-whiteAlternate font-montserrat float-left text-2xl m-1.5 ml-6'>
              <li className='float-left ml-3 mr-3'><a href='/clubs/clubList' className='hover:text-blueAlternate1 transition duration-300'>Clubs</a></li>
              <li className='float-left ml-3 mr-3'><a href='/events/eventList' className='hover:text-blueAlternate1 transition duration-300'>Events</a></li>
            </ul>
          </nav>
          <section id="preview_section" className='bg-bg-1 h-screen w-full clear-both p-1'>
            <div className='px-6 py-2'>
              <div className='columns-4 flex justify-center p-2 rounded-2xl bg-whiteAlternate bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
                <img src="/images/preview1.png" className='w-[300px] h-[300px] rounded-3xl mx-10'/>
                <img src="/images/preview2.png" className='w-[300px] h-[300px] rounded-3xl mx-10'/>
                <img src="/images/preview3.png" className='w-[300px] h-[300px] rounded-3xl mx-10'/>
                <img src="/images/preview4.png" className='w-[300px] h-[300px] rounded-3xl mx-10'/>
              </div>
            </div>
            <div className='m-2 ml-8 mr-8 p-4 mb-8 rounded-lg bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
              <div className='text-white font-montserrat text-xl'>
                College is confusing. We know - been there, done that. All everyone ever needed was that one caring senior. Go no further
                 - we are here for you! The one-stop solution with answers to all your doubts, problems and confusions. Made for students
                 , by students.
                <br />
                <br />
                At present, to get any information about a VIT club or club events, the students are required 
                to visit the social media pages or websites of the individual clubs, with no common solution for all the clubs.
                This makes it difficult for the students to keep up with the ongoing and upcoming club events.
                So, we bring you a website where you can find it all!
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='ml-8 mr-8 mb-8 mt-8 p-2 rounded-lg bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 w-fit'>
                <div className='text-white font-montserrat text-lg'>
                  Made by &nbsp;
                    <span className='hover:text-gold transition duration-300'>Karthika</span>
                  , &nbsp;
                    <span className='hover:text-green transition duration-300'>Karthik</span>
                  , &nbsp;
                    <span className='hover:text-blueAccent2 transition duration-300'>Melissa</span>
                  , &nbsp;
                    <span className='hover:text-name1 transition duration-300'>Aleena</span>
                  , &nbsp;
                    <span className='hover:text-name2 transition duration-300'>Neel</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
