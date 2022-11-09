from rest_framework import serializers

from skill.serializers import SkillSerializer
from timeframe.serializers import TimeFrameSerializer
from user_project.models import UserProject


class UserProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProject
        fields = '__all__'
        depth = 1

    tools = SkillSerializer(many=True, required=False)
    time_frame = TimeFrameSerializer(required=False)


# class ProjectPatchSerializer(serializers.ModelSerializer): # if we just want to add item to an array
#     class Meta:
#         model = UserProject
#         fields = '__all__'
#
#     def update(self, instance, validated_data):
#         assignee = validated_data.pop('assignee')
#
#         for consultant in assignee:
#             instance.assignee.add(consultant)
#
#         return super().update(instance, validated_data)

class CreateProjectSerializer(serializers.ModelSerializer):
    # time_frame = TimeFrameSerializer(many=True)

    class Meta:
        model = UserProject
        fields = '__all__'
        depth = 1

    # def create(self, validated_data):
    #     timeframe_data = validated_data.pop('time_frame')
    #     project = UserProject.objects.create(**validated_data)
    #     for timeframe in timeframe_data:
    #         TimeFrame.objects.create(**timeframe)
    #     return project
