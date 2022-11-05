from rest_framework import serializers
# from timeframe.serializers import TimeFrameSerializer
from user_project.models import UserProject


class UserProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProject
        fields = '__all__'
        # depth = 1
