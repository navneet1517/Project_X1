import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function AppBar() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-400">Project X</span>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/auth/signin" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </Link>
              <Link href="/auth/signup" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Welcome to <span className="text-indigo-400">Project X</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Revolutionizing the way you interact with technology. Project X brings cutting-edge solutions to your fingertips.
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="/auth/signup" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Get Started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature section */}
          <div className="bg-gray-800 shadow overflow-hidden sm:rounded-lg mt-12">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-4">
                {['Intuitive User Interface', 'Advanced Analytics', 'Seamless Integration', 'Real-time Collaboration'].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-400" aria-hidden="true" />
                    <p className="ml-3 text-base text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-indigo-900 mt-12 sm:rounded-lg">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block">Start your free trial today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Experience the power of Project X risk-free for 30 days. No credit card required.
              </p>
              <Link href="/auth/signup" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 sm:w-auto">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 Project X. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}