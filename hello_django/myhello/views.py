from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name', None)
        if my_name:
            reValue = {}
            reValue['data'] = "hello" + my_name
            return Response(reValue, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "paramater: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )