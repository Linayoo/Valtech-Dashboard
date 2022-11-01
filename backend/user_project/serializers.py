from rest_framework import serializers
from user_project.models import UserProject


class UserProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProject
        fields = '__all__'
