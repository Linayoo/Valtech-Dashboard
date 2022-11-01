from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response
from timeframe.models import TimeFrame
from timeframe.serializers import TimeFrameSerializer


# GET all the timeframes (api/timeframes/)
class GetAllTimeFrames(ListAPIView):
    queryset = TimeFrame.objects.all()
    serializer_class = TimeFrameSerializer


# POST create a new timeframe (api/timeframes/new/)
class CreateTimeFrame(GenericAPIView):
    def post(self, request, *args, **kwargs):
        serializer = TimeFrameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# GET a single timeframe (api/timeframes/<int:id>/)
# PATCH a single timeframe (api/timeframes/<int:id>/)
# DELETE a single timeframe (api/timeframes/<int:id>/)
class RetrievePatchDeleteTimeFrame(GenericAPIView):
    queryset = TimeFrame.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = TimeFrameSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = TimeFrameSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)
