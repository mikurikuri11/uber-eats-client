import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

import { useRestaurantData } from '@/features/line_foods/hooks/useRestaurantData';
import { getRestaurantFoods } from '@/features/foods/api/foodAPI';
import { getFood } from '@/features/foods/api/foodAPI';
import { useEachFoodCount } from '@/features/foods/hooks/useEachFoodCount';

export default async function Order() {
  const {
    restaurantName,
    deliveryTime,
    itemCount,
    eachCount,
    totalAmount,
    deliveryFee,
    lineFoodIds,
    restaurantId,
    foodIds
  }
  = await useRestaurantData();

  let selectedFoods: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
    created_at: string;
    updated_at: string;
  }> = [];

  const fetchSelectedFood = async (restaurantId: string, foodId: string) => {
    try {
      const selectedFood = await getFood(restaurantId, foodId);
      return selectedFood;
    } catch (error) {
      console.error('エラーが発生しました:', error);
      return null;
    }
  };

  const fetchAllSelectedFoods = async () => {
    for (const foodId of foodIds) {
      const selectedFood = await fetchSelectedFood(restaurantId, foodId);
      if (selectedFood !== null) {
        selectedFoods.push(selectedFood);
      }
    }
  };

  await fetchAllSelectedFoods()
  .then(() => {
    console.log('すべての選択された食品を取得しました');
    console.log(selectedFoods);
  })
  .catch((error) => {
    console.error('エラーが発生しました:', error);
    });

    console.log('レストラン名');
    console.log(eachCount);

    return (
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">買い物かご</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
            {selectedFoods.map((selectedFood, index) => (
              <li key={selectedFood.id} className="flex py-6 sm:py-10">
                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <div className="font-medium text-gray-700 hover:text-gray-800">
                            {selectedFood.name}
                          </div>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="mt-1 text-sm font-medium text-gray-900">{selectedFood.price}</p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label htmlFor={`quantity-${selectedFood.id}`} className="sr-only">
                        Quantity, {selectedFood.name}
                      </label>
                      <div
                        className="max-w-full rounded-md py-1.5 text-left text-base font-medium leading-5 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <p>個数：{eachCount[index]}</p>
                      </div>
                      <div className="absolute right-0 top-0">
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}

            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              注文内容
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">商品数</dt>
                <dd className="text-sm font-medium text-gray-900">{itemCount}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>商品合計</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">￥{totalAmount}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>配送料</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">￥{deliveryFee}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">合計</dt>
                <dd className="text-base font-medium text-gray-900">￥{totalAmount + deliveryFee}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
