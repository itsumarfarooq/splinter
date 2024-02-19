from django.conf import settings

from splinter.apps.friend.models import Friendship
from splinter.apps.friend.serializers import CreateFriendshipSerializer, FriendSerializer
from splinter.apps.user.shortcuts import invite_user
from splinter.core.views import CreateAPIView, ListAPIView, RetrieveAPIView


class ListCreateFriendView(ListAPIView, CreateAPIView):
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateFriendshipSerializer

        return FriendSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['outstanding_balance_limit'] = settings.EXPENSE_AGGREGATED_OUTSTANDING_BALANCE_LIMIT
        return context

    def get_queryset(self):
        return Friendship.objects.get_user_friends(self.request.user)

    def perform_create(self, serializer):
        user = serializer.save()

        if not user.is_active:
            invite_user(user, invited_by=self.request.user)


class RetrieveFriendView(RetrieveAPIView):
    serializer_class = FriendSerializer

    lookup_field = 'username'
    lookup_url_kwarg = 'friend_uid'

    def get_queryset(self):
        return Friendship.objects.get_user_friends(self.request.user)
