from rest_framework.generics import ListAPIView

from language.models import Language
from language.serializers import LanguageSerializer


class GetAllLanguages(ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
