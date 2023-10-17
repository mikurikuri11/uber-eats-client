"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import LoginButton from "../elements/LoginButton";
import LogoutButton from "../elements/LogoutButton";
import { useSession, signIn } from 'next-auth/react';


const navigation = [
  { name: "Home", href: "/" },
  { name: "Shops", href: "/" },
  { name: "Cart", href: "/orders" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          {/* <Image
            className="h-8 w-auto"
            src=""
            width={32}
            height={32}
            alt=""
          /> */}
        </Link>
        <div className="flex flex-1 justify-end">
          {/* <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}
          {status === "authenticated" ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <Image
                className="h-8 w-auto"
                src=""
                width={32}
                height={32}
                alt=""
              /> */}
            </Link>
            <div className="flex flex-1 justify-end">
              {/* <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link> */}
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
