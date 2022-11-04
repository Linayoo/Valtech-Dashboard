from rest_framework import serializers
from consultant.models import Consultant
# from timeframe.serializers import TimeFrameSerializer


class ConsultantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultant
        fields = '__all__'
        # depth = 2
