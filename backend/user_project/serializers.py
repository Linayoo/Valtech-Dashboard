from rest_framework import serializers

from timeframe.serializers import TimeFrameSerializer
from user_project.models import UserProject


class UserProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProject
        fields = '__all__'


class TimeFrameProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProject
        fields = '__all__'
        depth = 1

    time_frame = TimeFrameSerializer(many=False)
