from rest_framework import filters
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response

from consultant.models import Consultant
from consultant.serializers import ConsultantSerializer


# GET all the consultants (api/consultants/)
class GetAllConsultants(ListAPIView):
    queryset = Consultant.objects.all()
    serializer_class = ConsultantSerializer


# POST create a new consultant (api/consultants/new/)
class CreateConsultant(GenericAPIView):
    def post(self, request, *args, **kwargs):
        serializer = ConsultantSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# GET a single consultant (api/consultants/<int:id>/)
# PATCH a single consultant (api/consultants/<int:id>/)
# DELETE a single consultant (api/consultants/<int:id>/)
class RetrievePatchDeleteConsultant(GenericAPIView):
    queryset = Consultant.objects.all()
    lookup_field = 'id'

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
