import Head from 'next/head'

const Resume = () => {
  return (
    <div>
      <Head>
        <title>fmR | Resume</title>
        <meta name="keywords" content="web developer" />
        <link rel='icon' href='/avatar-purple.svg' />
      </Head>
      <div className='container p-4 text-white m-auto flex flex-col align-middle justify-center cursor-default select-none'>

        <div className='mt-10 mb-10'>
          <h1 className='text-3xl md:text-4xl font-bold mb-2'>Francis Mar Ong Rosales</h1>
          <h4 className='md:text-xl'>Mobile: +63 991 331-5746</h4>
          <h4 className='md:text-xl'>Whatsapp: +63 995 876-6249</h4>
          <h5 className='md:text-xl'>Email: francismarrosales@gmail.com</h5>
        </div>

        <div>
          <div className=''>
            <h2 className='text-2xl md:text-2xl font-bold uppercase mb-4 border-b'>Skills</h2>
          </div>
          <div className='p-5 hover:bg-gray-800'>
            <ul className='md:text-xl ml-10 list-disc'>
            <li>HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript, jQuery, PHP, WordPress, Docker</li>
            <li>WordPress, Elementor, Divi</li>
            <li>Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe XD, Figma, CorelDraw</li>
            <li>Semrush, Ahrefs, Bright Local, Raven Tools, Screaming Frog, Google Analytics 4, Google Search Console</li>
            <li>GoHighLevel: Automation, Workflow, Integration, Funnels, Websites</li>
            <li>Basic knowledge command using Git, GitHub in Windows PowerShell, and Bash</li>
          </ul>
          </div>
        </div>

        <div className=''>
          <div>
            <h2 className='text-2xl md:text-2xl font-bold uppercase mb-4 border-b'>Professional Experience</h2>
          </div>
          <div className='p-5 hover:bg-gray-800'>
            <h3 className='md:text-xl italic'><span className='font-bold text-purple-500'>Level9</span> - WordPress Developer/SEO/VA (Remote)</h3>
            <h5 className='text-gray-400 italic mb-3'>November 2022 – present</h5>
            <ul className='md:text-xl ml-10 list-disc'>
              <li>WordPress, Elementor, Divi, HTML, CSS, Javascript, Figma</li>
              <li>Keyword research, On-page optimization, Site audit  </li>
              <li>Repurposing/Updating content in blog post</li>
              <li>Experience using SEO tools: Semrush, Ahrefs, Bright Local, Screaming Frog, GSC, GA4</li>
              <li>Updating website as instructed by the client</li>
              <li>GoHighLevel: Automation, Workflow, Integration, Funnels, Websites</li>
            </ul>
          </div>
          
        </div>

        <div className='p-5 hover:bg-gray-800'>
          <h3 className='md:text-xl italic'><span className='font-bold text-purple-500'>NavDistrict Media</span> - WordPress Developer/Designer (Remote)</h3>
          <h5 className='text-gray-400 italic mb-3'>January 2020 – May 2022</h5>
          <ul className='md:text-xl ml-10 list-disc'>
            <li>Experience using Elementor and Divi in WordPress CMS.</li>
            <li>Experience using Advanced Custom Fields(ACF) and Custom Post Type UI.</li>
            <li>Experience customizing themes using HTML, CSS, jQuery, and PHP.</li>
            <li>Manage a user guide to help clients understand site features and management of the website</li>
            <li>Updated website as instructed by the client to introduce new features and content for new and existing.</li>
            <li>Ensured websites worked properly without errors.</li>
          </ul>
        </div>

        <div className='p-5 hover:bg-gray-800'>
          <h3 className='md:text-xl italic'><span className='font-bold text-purple-500'>Everyday Eshopping</span> - Graphic Designer (Remote)</h3>
          <h5 className='text-gray-400 italic mb-3'>December 2018 – May 2020 Tagaytay City, PH</h5>
          <ul className='md:text-xl ml-10 list-disc'>
            <li>Provided design, layout, and illustration for monthly web banners.</li>
            <li>Update web content and advertising content for social media.</li>
            <li>Manage design and production of printing and web products.</li>
            <li>Experience using CorelDraw, Photoshop, Illustrator, and InDesign.</li>
            <li>Develop catalogs, business cards, flyers, posters, and t-shirts design.</li>
            <li>Manage Shopify website and social media accounts.</li>
          </ul>
        </div>

        <div className='p-5 hover:bg-gray-800'>
          <h3 className='md:text-xl italic'><span className='font-bold text-purple-500'>Expert Global Solutions(now Alorica)</span> - Technical Support Representative</h3>
          <h5 className='text-gray-400 italic mb-3'>November 2015 – July 2016 Quezon City, PH</h5>
          <ul className='md:text-xl ml-10 list-disc'>
            <li>Provide daily support to users of various computer systems including answering questions, analysing problems, and quickly forming solutions to return systems to proper operation.</li>
            <li>Call back or email customers to follow up if the technical issues still occur. Two days after the provided solution.</li>
            <li>Communicate clearly and effectively with end-users, colleagues, and management to quickly resolve issues and ensure customer satisfaction.</li>
            <li>Install and maintain hardware, software, and other equipment to meet client requirements, routinely observe operational performance, and install security patches and updates when necessary.</li>
            <li>Maintain detailed records of daily interactions with customers, installation activities, reported issues, and completed solutions along with any further actions required of management or repair personnel.</li>
            <li>Increase personal technical knowledge by reading trade publications, operating manuals, and diagnostics information, and attending conferences or seminars when possible.</li>
          </ul>
        </div>

        <div className='p-5 hover:bg-gray-800'>
          <div className=''>
            <h2 className='text-2xl md:text-2xl font-bold uppercase mb-4 border-b'>Education</h2>
          </div>
          <h3 className='md:text-xl italic'><span className='font-bold text-purple-500'>Manuel S. Enverga University Foundation</span> - Bachelor of Science in Information Technology</h3>
          <h5 className='text-gray-400 italic mb-3'>June 2011- April 2015 Lucena City, PH</h5>
        </div>

      </div>
    </div>
  )
}

export default Resume