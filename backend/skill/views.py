from rest_framework.generics import ListAPIView

from skill.models import Skill
from skill.serializers import SkillSerializer


class AllSkills(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
