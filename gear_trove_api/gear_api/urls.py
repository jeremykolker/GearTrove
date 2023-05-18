from django.urls import path
from . import views

urlpatterns = [
    path('api/item', views.ItemList.as_view(), name='item_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/item/<int:pk>', views.ItemDetail.as_view(), name='item_detail'), # api/contacts will be routed to the ContactDetail view for handling
]
