from rest_framework import serializers
from timeframe.models import TimeFrame


class TimeFrameSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeFrame
        fields = '__all__'
