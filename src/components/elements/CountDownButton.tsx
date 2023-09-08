import React from 'react'
import { MinusIcon } from '@heroicons/react/20/solid'

interface CountDownButtonProps {
  eachFoodCount: number;
  onClickCountDown: () => void;
}

const CountDownButton = ({ eachFoodCount, onClickCountDown }: CountDownButtonProps) => {
  return (
    <button
      type="button"
      className="ml-2 rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClickCountDown}
      disabled={eachFoodCount <= 0 }
    >
      <MinusIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default CountDownButton
