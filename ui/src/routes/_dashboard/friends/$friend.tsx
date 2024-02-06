import {Avatar} from '@components/common/Avatar.tsx';
import {friends, items} from '@fake-data/friends.ts';
import {ChevronLeftIcon} from '@heroicons/react/24/solid';
import {Link, Navigate, createFileRoute} from '@tanstack/react-router';

import SingleEntryItem from './-components/SingleEntryItem.tsx';

export const Route = createFileRoute('/_dashboard/friends/$friend')({
  component: RootComponent,
});

function RootComponent() {
  const {friend: friendId} = Route.useParams();

  const friend = friends.find((e) => e.id.toString() === friendId);

  if (!friend) {
    return <Navigate to="/friends" />;
  }

  return (
    <div>
      <Link
        className="mb-1 flex items-center gap-x-1.5 text-sm font-medium text-brand-700 xl:hidden"
        to="/friends"
      >
        <ChevronLeftIcon className="size-3" />
        Friend
      </Link>
      <article>
        <div>
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
          </div>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 space-x-3 sm:flex sm:items-end">
              <div className="flex">
                <Avatar
                  className="size-24 bg-gray-200 text-3xl"
                  fallback="AF"
                />
              </div>
              <div className="mt-6 flex w-full items-end justify-between">
                <div className="mt-6 min-w-0 flex-1">
                  <h1 className="truncate text-2xl font-bold text-gray-800">{friend.name}</h1>
                  {friend.balance == 0 ? (
                    <p className="text-sm font-medium text-gray-400">All settled up</p>
                  ) : undefined}
                  {friend.balance > 0 ? (
                    <p className="text-sm font-normal text-gray-400">
                      {friend.name} owes you{' '}
                      <span className="text-green-700">
                        {friend.currency} {friend.balance}
                      </span>
                    </p>
                  ) : undefined}
                  {friend.balance < 0 ? (
                    <p className="text-sm font-normal text-gray-400">
                      You owe {friend.name}
                      <span className="text-green-700">
                        {friend.currency} {friend.balance}
                      </span>
                    </p>
                  ) : undefined}
                </div>
                <button
                  type="button"
                  className="inline-flex justify-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50"
                >
                  Settle up
                </button>
              </div>
            </div>
            <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
              <h1 className="truncate text-2xl font-bold text-gray-900">hi</h1>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-8 w-full border-t border-blue-100/70" />
        <p className="px-4 text-sm font-medium text-gray-500 sm:px-6 lg:px-8">December 2022</p>
        <div className=" divide-y divide-gray-200 border-b border-gray-200">
          {items.map((item) => {
            return (
              <SingleEntryItem
                {...item}
                key={item.id}
              />
            );
          })}
        </div>
        <p className="mt-6 px-4 text-sm font-medium text-gray-500 sm:px-6 lg:px-8">January 2023</p>
        <div className=" divide-y divide-gray-200">
          {items.map((item) => {
            return (
              <SingleEntryItem
                {...item}
                key={item.id}
              />
            );
          })}
        </div>
      </article>
    </div>
  );
}