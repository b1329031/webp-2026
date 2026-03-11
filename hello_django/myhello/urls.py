from django.urls import path
from . import views

urlpatterns = [
    path('', views.HelloApiView.as_view(), name='index'), # 當網址是空的時候，執行 index 函式
]