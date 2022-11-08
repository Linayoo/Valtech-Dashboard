from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateAPIView, get_object_or_404
from user.serializers import UserSerializer

User = get_user_model()


# /api/me/
# GET: Get user profile
# PATCH: Update the user profile
class GetUserProfile(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        queryset = User.objects.all()
        return queryset

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.request.user.id)
        return obj
