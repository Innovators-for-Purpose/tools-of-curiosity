from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index/', views.index, name='index'),
    path('aframedemo/', views.aframedemo, name='aframedemo'),
    path('Angel/', views.Angel, name='Angel'),
    path('minigame2/', views.minigame2, name='minigame2'),
    path('minigame3/', views.minigame3, name='minigame3'),
    path('minigame4/', views.minigame4, name='minigame4'),
    path('designsprint/', views.designsprint, name='designsprint'),
    path('designsprint2/', views.designsprint2, name='designsprint2'),
    path('default/', views.default, name='default'),
    path('Egypt/', views.Egypt, name='Egypt'),
    path('cricket/', views.cricket, name='cricket'),
    path('level1/', views.level1, name='level1'),

]
