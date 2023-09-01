import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white py-2 sm:pt-20 pb-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">let's eat</p>
            <Link href="/">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Uber Eats Demo</h2>
            </Link>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Uber Eatsなら、美味しい料理があなたのもとへ届きます。あなたの食欲を満たすために、我々が最高のレストランから厳選された料理をお届けします。今すぐお気に入りの料理を見つけて、食事の楽しみを最大限に味わいましょう。
            </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
