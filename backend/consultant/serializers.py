from rest_framework import serializers
from consultant.models import Consultant


class ConsultantSerializer(serializers.ModelSerializer):
    # language_skills = LanguageSerializer
    # managed_skills = SkillSerializer(many=True, required=False)
    # addition_skills = AdditionSkillSerializer(many=True, required=False)
    # # educations = EducationSerializer
    # # unavailable = TimeFrameSerializer
    # # # certificates = CertificateSerializer

    class Meta:
        model = Consultant
        fields = '__all__'
        depth = 1


class PatchConsultantSerializer(serializers.ModelSerializer):
    image_path = serializers.ImageField(required=False)

    class Meta:
        model = Consultant
        fields = '__all__'
        depth = 1
