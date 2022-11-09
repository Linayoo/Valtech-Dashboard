from rest_framework import serializers
from addition_skill.models import Addition_skill


class AdditionSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Addition_skill
        fields = '__all__'
