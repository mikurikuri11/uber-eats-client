"use client";

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilState } from 'recoil'


import { Food } from '@/features/foods/types'
import CountUpButton from '@/components/elements/CountUpButton';
import CountDownButton from '@/components/elements/CountDownButton';
import { eachTodoCountState } from '@/recoil/atoms/eachTodoCountState';

interface FoodModalProps {
  food: Food | null;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function FoodModal({
  open,
  setOpen,
  food,
}: FoodModalProps) {

  // const [countNumber, setCountNumber] = useState(0);
  const [eachTodoCount, setEachTodoCount] = useRecoilState(eachTodoCountState(food?.id));

  const onClickCountUp = () => {
    setEachTodoCount(eachTodoCount + 1);
  }

  const onClickCountDown = () => {
    if (eachTodoCount > 0) {
      setEachTodoCount(eachTodoCount - 1);
    }
  }

  const onClickOrder = () => {
    setEachTodoCount(0);
    setOpen(false);
  }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className='px-4'>
                      <Image
                        src={`https://source.unsplash.com/collection/1346951/800x400?sig=${food?.id}0`}
                        alt="food"
                        width={600}
                        height={400}
                        className="h-32 w-16 lg:h-full lg:w-full rounded-lg object-cover object-center"
                        />
                    </div>
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 mt-4">
                        {food?.name}
                      </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {food?.description}
                      </p>
                    </div>
                    <div className='mt-4 flex justify-center items-center'>
                      <CountUpButton eachTodoCount={eachTodoCount} onClickCountUp={onClickCountUp} />
                      <p className='font-bold mx-2'>{eachTodoCount}</p>
                      <CountDownButton eachTodoCount={eachTodoCount} onClickCountDown={onClickCountDown} />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => onClickOrder()}
                  >
                    {`${eachTodoCount}点を注文に追加 ￥${(food?.price ?? 0) * eachTodoCount}`}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
