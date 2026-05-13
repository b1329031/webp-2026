from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post

logger = logging.getLogger('django') # 刪掉中間那個 .logging

@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    
    logger.debug("************** myhello_api: " + title)
    
    if title:
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)
    # return Response({"data": 
    #        json.dumps(
    #           list(posts),
    #          sort_keys = True,
    #            indent = 1,
    #           cls = DjangoJSONEncoder)},
    #        status=status.HTTP_200_OK)


from .models import User

@api_view(['GET'])
def list_users(request):
    users = User.objects.all().values()
    return JsonResponse(list(users), safe=False)
    # return Response({"data": 
    #     json.dumps(
    #         list(posts),
    #         sort_keys = True,
    #         indent = 1,
    #         cls = DjangoJSONEncoder)},
    #     status=status.HTTP_200_OK)

from .models import Course_table

@api_view(['GET'])
def add_course(request):
    # 從網址拿資料：?dept=資管系&title=網頁設計&teacher=張老師
    dept = request.GET.get('dept', '')
    title = request.GET.get('title', '')
    teacher = request.GET.get('teacher', '')
    
    new_course = Course_table(
        Department=dept, 
        CourseTitle=title, 
        Instructor=teacher
    )
    new_course.save()
    
    return Response({"message": f"課程 {title} 已加入！"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def course_list(request):
    courses = Course_table.objects.all().values()
    return Response({"courselist": list(courses)}, status=status.HTTP_200_OK)