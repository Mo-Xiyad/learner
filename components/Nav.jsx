'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getProviders, signIn, signOut } from 'next-auth/react';
function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={'/assets/images/logo.svg'}
          width={30}
          height={30}
          alt="logo"
          className="object-contain"
        />
        <span className="logo_text">promp-tete</span>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/" className="">
              <Image
                src={'/assets/images/logo.svg'}
                width={37}
                height={37}
                alt="user"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative gap-3">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src={'/assets/icons/menu.svg'}
              width={20}
              height={20}
              alt="menu"
              className="rounded-full"
              onClick={() => setToggleMenu((prev) => !prev)}
            />
            {toggleMenu && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleMenu(false)}
                >
                  profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleMenu(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
