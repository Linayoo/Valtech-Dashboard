from rest_framework import filters
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

from timeframe.models import TimeFrame
from user_project.models import UserProject
from user_project.serializers import UserProjectSerializer


# GET all the projects (api/projects/)
class GetAllProjects(ListAPIView):
    queryset = UserProject.objects.all()
    serializer_class = UserProjectSerializer
    # parser_classes = (MultiPartParser, FormParser)

# POST create a new project (api/projects/new/)
class CreateProject(GenericAPIView):
    queryset = UserProject.objects.all()
    serializer_class = UserProjectSerializer

    def post(self, request, *args, **kwargs):
        timeframe = request.data['time_frame']
        new_timeframe = TimeFrame(date_started=timeframe['date_started'], date_finished=timeframe['date_finished'])
        new_timeframe.save()
        project = UserProject(name=request.data['name'], description=request.data['description'],
                              external_link=request.data['external_link'],
                              time_frame=new_timeframe)
        project.save()
        list_of_tools = request.data['tools']
        project.tools.set(list_of_tools)  # accepts list of skills' IDs
        list_of_assignees = request.data['assignee']  # accepts list of consultants' IDs these two can be used in patch
        project.assignee.set(list_of_assignees)
        return Response(self.get_serializer(project).data)

    # def post(self, request, *args, **kwargs):
    #     serializer = UserProjectSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)


# GET a single project (api/projects/<int:id>/)
# PATCH a single project (api/projects/<int:id>/)
# DELETE a single project (api/projects/<int:id>/)
class RetrievePatchDeleteProject(GenericAPIView):
    queryset = UserProject.objects.all()
    lookup_field = 'id'
    # parser_classes = (MultiPartParser, FormParser)

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
