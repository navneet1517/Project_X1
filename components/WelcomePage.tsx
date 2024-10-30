'use client'

import { signOut } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'; 

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    "Complete your profile",
    "Explore our dashboard",
    "Connect with other users",
    "Check out our latest features"
  ]
  
  const router = useRouter(); 

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' }); 
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Welcome, {"Navneet"}!</h2>
              <p className="text-gray-600">We're glad you're here.</p>
            </div>
          </div>
          <button
            onClick={handleLogout} 
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="px-6 pb-6">
          <p className="text-gray-600 mb-4">
            Thank you for joining our platform. Let's get you started with a few simple steps.
          </p>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Onboarding Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <ul className="space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {index <= currentStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className={index <= currentStep ? "text-gray-800" : "text-gray-400"}>
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-between">
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
            }`}
            onClick={handlePrevStep}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${
              currentStep === steps.length - 1
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            onClick={handleNextStep}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}
