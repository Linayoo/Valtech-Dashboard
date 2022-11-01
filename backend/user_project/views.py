from rest_framework import filters
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response
from user_project.models import UserProject
from user_project.serializers import UserProjectSerializer


# GET all the projects (api/projects/)
class GetAllProjects(ListAPIView):
    queryset = UserProject.objects.all()
    serializer_class = UserProjectSerializer


# POST create a new project (api/projects/new/)
class CreateProject(GenericAPIView):
    def post(self, request, *args, **kwargs):
        serializer = UserProjectSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# GET a single project (api/projects/<int:id>/)
# PATCH a single project (api/projects/<int:id>/)
# DELETE a single project (api/projects/<int:id>/)
class RetrievePatchDeleteProject(GenericAPIView):
    queryset = UserProject.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserProjectSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserProjectSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)


# GET search for the name of project (api/projects/search/)
class SearchProject(ListAPIView):
    queryset = UserProject.objects.all()
    serializer_class = UserProjectSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
