import Link from "next/link"
export default function Home() {
  return (
    <>
      <div className='bg-black min-h-screen text-white flex flex-col items-center justify-center' >
        <div className='px-4 py-4'>
          This is the website, that has links to all the deployments of the evaluation tasks that are given to me <span className="text-green-500 font-mono text-xl">(Karthik P)</span>.
        </div>
        <div className='px-4 py-4 text-2xl'>
          Section A: Making a simple JS Website
        </div>
        <div className='px-4 py-4'>
          <div className="mb-4">Task 1: Bootstrap slider with dynamic highlighted pricing cards. </div>
          <div>Task 2: Form Submission & Population are done in the same deployment.</div>
          <div className="py-2">
            <Link href='https://bootstrap-eval.vercel.app/' target="_blank" className="my-4 text-green-500 font-mono">View Deployment<span className="px-4 font-normal text-white">(Both tasks are completed in the same deployment.)</span></Link>
          </div>
        </div>
        <div className='px-4 py-4 text-2xl'>
          Section B: React
        </div>
        <div className='px-4 py-4'>
          <div className="mb-4">Task 1: Creating an interactive file structure. <Link href='https://react-eval-weld.vercel.app/' target="_blank" className="text-green-500 font-mono px-4">View Deployment</Link> </div>
          <div>Task 2: Lazy loading using Infinite scroll without third party libraries. <Link href='https://book-finder-gray.vercel.app/' target="_blank" className="text-green-500 font-mono px-4">View Deployment</Link></div>
        </div>
        <div>GitLab link: <Link href='https://gitlab.com/mygroup2120049/evaluation' className="text-green-500">Click here</Link></div>
      </div>
    </>
  )
}
