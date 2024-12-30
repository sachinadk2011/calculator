import React from 'react'

export default function StopCircleIcon() {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="size-3"
  
>
  {/* Outer Circle */}
  <path
    fill="blue-200" /* Color for the outer circle */
    fillRule="evenodd"
    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z"
    clipRule="evenodd"
  />
  {/* Inner Rectangle */}
  <path
    fill="black" /* Color for the inner rectangle */
    fillRule="evenodd"
    d="M8.25 9.564c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
    clipRule="evenodd"
  />
</svg>

  )
}
