from splinter.apps.friend.models import Friendship
from tests.apps.user.factories import UserFactory
from tests.case import AuthenticatedAPITestCase


class ListFriendViewTest(AuthenticatedAPITestCase):
    available_apps = ('splinter.apps.user', 'splinter.apps.friend')

    def setUp(self):
        super().setUp()

        self.friends = []

        for i in range(5):
            friend = UserFactory()
            Friendship.objects.create(source=self.user, target=friend)
            self.friends.append(friend)

    def test_list_friends(self):
        response = self.client.get('/api/friend/all')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()['results']), 5)

    def test_list_only_logged_in_user_friends(self):
        user1 = UserFactory()
        user2 = UserFactory()

        Friendship.objects.create(source=user1, target=user2)

        response = self.client.get('/api/friend/all')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()['results']), 5)
