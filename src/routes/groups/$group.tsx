import {FileRoute, Link, Navigate} from '@tanstack/react-router';
import {groups} from '@fake-data/groups.ts';
import {ChevronLeftIcon} from '@heroicons/react/24/solid';

export const Route = new FileRoute('/groups/$group').createRoute({
    component: RootComponent,
});

function RootComponent() {
    const {group: groupId} = Route.useParams();

    const group = groups.find((e) => e.id.toString() === groupId);

    if (!group) {
        return (
            <Navigate to="/groups"/>
        );
    }

    return (
        <div className="px-6 pt-6 pb-4">
            <Link className="flex items-center gap-x-1.5 xl:hidden text-sm text-sky-700 font-medium mb-1" to="/friends">
                <ChevronLeftIcon className="size-3"/>
                Group
            </Link>
            <h1 className="truncate text-2xl font-bold text-gray-900">{group.name}</h1>
        </div>
    );
}
