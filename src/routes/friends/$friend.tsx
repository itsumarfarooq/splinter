import {FileRoute, Link, Navigate} from '@tanstack/react-router';
import {friends} from '@fake-data/friends.ts';
import {ChevronLeftIcon} from '@heroicons/react/24/solid';
import {Avatar} from "@components/Avatar.tsx";
import SingleEntryItem from "./-components/SingleEntryItem.tsx";

export const Route = new FileRoute('/friends/$friend').createRoute({
    component: RootComponent,
});


function RootComponent() {
    const {friend: friendId} = Route.useParams();

    const friend = friends.find((e) => e.id.toString() === friendId);

    if (!friend) {
        return (
            <Navigate to="/friends"/>
        );
    }

    return (
        <div>
            <Link className="flex items-center gap-x-1.5 xl:hidden text-sm text-sky-700 font-medium mb-1" to="/friends">
                <ChevronLeftIcon className="size-3"/>
                Friend
            </Link>
            <article>
                <div>
                    <div>
                        <img className="h-32 w-full object-cover lg:h-48"
                             src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
                    </div>
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <Avatar className="size-24 bg-slate-200" fallback="AF"/>
                            </div>
                            <div
                                className="mt-6 flex items-end justify-between w-full">
                                <div className="mt-6 min-w-0 flex-1">
                                    <h1 className="truncate text-2xl font-bold text-gray-800">{friend.name}</h1>
                                    {friend.balance == 0 ? (
                                        <p className="text-sm font-medium text-gray-400">All settled up</p>
                                    ) : undefined}
                                    {friend.balance > 0 ? (
                                        <p className="text-sm font-normal text-gray-400">{friend.name} owes you <span
                                            className="text-green-700">{friend.currency} {friend.balance}</span></p>
                                    ) : undefined}
                                    {friend.balance < 0 ? (
                                        <p className="text-sm font-normal text-gray-400">You owe {friend.name}<span
                                            className="text-green-700">{friend.currency} {friend.balance}</span></p>
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
                <div className="w-full mb-4 mt-8 border-t border-blue-100/70"/>
                <p className="text-sm font-medium text-gray-500 px-4 sm:px-6 lg:px-8">December 2023</p>
                <div className="mt-1 divide-y divide-gray-200">
                    <SingleEntryItem/>
                    <SingleEntryItem/>
                </div>
            </article>
        </div>
    );
}
