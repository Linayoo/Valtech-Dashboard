from rest_framework import filters
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

from consultant.models import Consultant
from consultant.serializers import ConsultantSerializer, PatchConsultantTimeFrameSerializer


# GET all the consultants (api/consultants/)
class GetAllConsultants(ListAPIView):
    queryset = Consultant.objects.all()
    serializer_class = ConsultantSerializer


# POST create a new consultant (api/consultants/new/)
# class CreateConsultant(GenericAPIView):
#     parser_classes = (MultiPartParser, FormParser)
#
#     def post(self, request, *args, **kwargs):
#         serializer = ConsultantSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)


class CreateConsultantTest(GenericAPIView):
    queryset = Consultant.objects.all()
    serializer_class = ConsultantSerializer

    def post(self, request, *args, **kwargs):
        consultant = Consultant(display_name=request.data['display_name'], first_name=request.data['first_name'],
                                last_name=request.data['last_name'],
                                country=request.data['country'], city=request.data['city'],
                                office_category=request.data['office_category'], email=request.data['email'],
                                linked_in_link=request.data['linked_in_link'],
                                primary_language=request.data['primary_language'], title=request.data['title'],
                                manager_display_name=request.data['manager_display_name'],
                                role_category=request.data['role_category']
                                )
        consultant.save()
        list_of_skills = request.data['managed_skills']
        consultant.managed_skills.set(list_of_skills)  # accepts list of skills' IDs
        list_of_add_skills = request.data[
            'addition_skills']  # accepts list of consultants' IDs these two can be used in patch
        consultant.addition_skills.set(list_of_add_skills)
        # list_of_educations = request.data['educations']
        # consultant.educations.set(list_of_educations)
        # list_of_certificates = request.data['certificates']
        # consultant.certificates.set(list_of_certificates)
        list_of_languages = request.data['language_skills']
        consultant.language_skills.set(list_of_languages)
        # list_of_unavailable = request.data['unavailable']
        # consultant.unavailable.set(list_of_unavailable)
        return Response(self.get_serializer(consultant).data)


# class PatchConsultant(GenericAPIView):
#     queryset = Consultant.objects.all()
#     lookup_field = 'id'
#     parser_classes = (MultiPartParser, FormParser)
#
#     def patch(self, request, *args, **kwargs):
#         instance = self.get_object()
#         serializer = PatchConsultantSerializer(instance, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)


# GET a single consultant (api/consultants/<int:id>/)
# PATCH a single consultant (api/consultants/<int:id>/)
# DELETE a single consultant (api/consultants/<int:id>/)
class RetrievePatchDeleteConsultant(GenericAPIView):
    queryset = Consultant.objects.all()
    lookup_field = 'id'
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ConsultantSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ConsultantSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)


# GET search for the name of consultant (api/consultants/search/?search=<str:search_string>/
class SearchConsultant(ListAPIView):
    queryset = Consultant.objects.all()
    serializer_class = ConsultantSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['display_name']


# class PatchTimeframe(GenericAPIView):
#     serializer_class = ConsultantSerializer
#     queryset = Consultant.objects.all()
#     lookup_url_kwarg = 'id'
#
#     def patch(self, request, *args, **kwargs):
#         consultant = self.get_object()
#         timeframe = self.request.unavailable
#         timeframe_is_in = timeframe in consultant.unavailable.all()
#         if timeframe_is_in:
#             consultant.unavailable.remove(timeframe)
#         else:
#             #consultant.unavailable.add(timeframe)
#         return Response()

class PatchConsTimeframe(GenericAPIView):
    queryset = Consultant.objects.all()
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = PatchConsultantTimeFrameSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
