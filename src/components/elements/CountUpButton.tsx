import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

interface CountUpButtonProps {
  countNumber: number;
  onClickCountUp: () => void;
}

const CountUpButton = ({ onClickCountUp, countNumber }: CountUpButtonProps) => {
  return (
    <button
      type="button"
      className="mr-2 rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClickCountUp}
      disabled={countNumber >= 10}
    >
      <PlusIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default CountUpButton
