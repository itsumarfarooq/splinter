from django.conf import settings

from splinter.apps.group.models import GroupMembership
from tests.apps.group.factories import GroupFactory
from tests.case import AuthenticatedAPITestCase


class RetrieveUpdateGroupViewTest(AuthenticatedAPITestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()

        cls.group = GroupFactory(created_by=cls.user)
        GroupMembership.objects.create(group=cls.group, user=cls.user)

    def test_retrieve(self):
        response = self.client.get(f'/api/groups/{self.group.public_id}')
        self.assertEqual(response.status_code, 200)

        response_json = response.json()

        self.assertEqual(response_json['uid'], str(self.group.public_id))
        self.assertEqual(response_json['urn'], self.group.urn)
        self.assertEqual(response_json['name'], self.group.name)

        self.assertListEqual(response_json['outstandingBalances'], [])
        self.assertDictEqual(
            response_json['aggregatedOutstandingBalance'],
            {
                'currency': {
                    'uid': settings.CURRENCY_DEFAULT_USER_PREFERENCE,
                    'urn': f'urn:splinter:currency/{settings.CURRENCY_DEFAULT_USER_PREFERENCE}',
                    'symbol': 'Rs'
                },
                'amount': '0.00',
                'balances': []
            },
        )

        self.assertDictEqual(
            response_json['createdBy'],
            {
                'uid': self.user.username,
                'urn': self.user.urn,
                'fullName': self.user.full_name,
                'isActive': self.user.is_active
            },
        )

        self.assertEqual(len(response_json['members']), 1)
        self.assertDictEqual(
            response_json['members'][0],
            {
                'uid': self.user.username,
                'urn': self.user.urn,
                'fullName': self.user.full_name,
                'isActive': self.user.is_active
            },
        )

    def test_update(self):
        response = self.client.patch(
            f'/api/groups/{self.group.public_id}',
            data={
                'name': 'new name',
            },
            format='json',
        )
        self.assertEqual(response.status_code, 204)

        self.group.refresh_from_db()
        self.assertEqual(self.group.name, 'new name')