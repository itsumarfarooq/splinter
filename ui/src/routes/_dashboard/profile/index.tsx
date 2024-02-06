import clsx from 'clsx';

import {Avatar} from '@components/common/Avatar.tsx';
import {
  AdjustmentsVerticalIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon,
  CameraIcon,
  EnvelopeIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {Link, Outlet, ScrollRestoration, createFileRoute, useMatchRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/profile/')({
  component: ProfileLayout,
});

const settingsOptions = [
  {
    id: 1,
    name: 'Preferences',
    items: [
      {
        id: 1,
        name: 'Email Settings',
        icon: EnvelopeIcon,
      },
      {
        id: 2,
        name: 'Device and push notification settings',
        icon: BellIcon,
      },
      {
        id: 3,
        name: 'Passcode',
        icon: LockClosedIcon,
      },
    ],
  },
  {
    id: 1,
    name: 'Feedback',
    items: [
      {
        id: 4,
        name: 'Rate this app',
        icon: StarIcon,
      },
      {
        id: 5,
        name: 'Need any help?',
        icon: QuestionMarkCircleIcon,
      },
    ],
  },
];

function ProfileLayout() {
  const matchRoute = useMatchRoute();
  const isRootLayout = matchRoute({to: '/profile'});

  return (
    <>
      <div
        className={clsx(
          !isRootLayout &&
            'fixed inset-y-0 left-60 hidden w-96 overflow-auto border-e border-gray-200 xl:block',
          isRootLayout &&
            'xl:fixed xl:inset-y-0 xl:left-60 xl:w-96 xl:overflow-auto xl:border-e xl:border-gray-200'
        )}
      >
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 pb-4 pt-6">
          <h2 className="text-lg font-medium text-gray-900">Profile</h2>
          <div className="mt-6 flex items-center gap-x-2">
            <div className="grow">
              <label
                htmlFor="search"
                className="sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="size-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full rounded-md bg-white/60 py-1.5 pl-10 ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
            </div>

            <button className="flex shrink-0 items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-50">
              <AdjustmentsVerticalIcon className="size-5 text-gray-600" />
            </button>
          </div>
          <div className="mt-10 flex flex-col items-start gap-3">
            <div className="relative">
              <Avatar
                fallback={'AL'}
                className="size-16 bg-gray-200 text-3xl"
              />
              <button className="absolute bottom-0 right-0 cursor-pointer rounded-lg bg-gray-50 p-1">
                <CameraIcon className="size-5 text-gray-600" />
              </button>
            </div>
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-800">Aman Lohia</h3>
                <p className="text-sm text-gray-500">amanlohia@email.com</p>
              </div>
              <button className="flex items-center justify-center rounded-md bg-gray-50 p-2 hover:bg-gray-100">
                <PencilIcon className="size-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {settingsOptions.map((e) => (
            <div
              key={e.id}
              className="py-4"
            >
              <h4 className="px-6 text-base font-medium text-gray-800">{e.name}</h4>
              <div className="mt-2">
                {e.items.map((e) => (
                  <Link
                    to="/profile/$profile"
                    params={{profile: e.id.toString()}}
                    key={e.id}
                    className="flex items-center gap-2 px-6 py-4 hover:bg-gray-50"
                  >
                    <e.icon className="size-6 text-gray-500" />
                    <p className="font-base text-gray-500">{e.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-2">
            <div className="flex items-center gap-2 px-6 py-4 hover:bg-gray-50">
              <ArrowLeftOnRectangleIcon className="size-6 text-gray-500" />
              <p className="font-base text-gray-500">Logout</p>
            </div>
          </div>
        </div>

        <ScrollRestoration />
      </div>
      <div className="xl:ms-96">
        <Outlet />
      </div>
    </>
  );
}