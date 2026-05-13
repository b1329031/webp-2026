from django.urls import path
from . import views
urlpatterns = [
    path('courselist', views.course_list, name='course_list'),
    path('addcourse', views.add_course, name='add_course'),
]