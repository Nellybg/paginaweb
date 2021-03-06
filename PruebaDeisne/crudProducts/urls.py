from django.contrib import admin  
from django.urls import path , include
from products import views  
from products.api.router import router_products

urlpatterns = [  
    path('admin/', admin.site.urls),
    path('', views.index), 
    path('index', views.index),   
    path('signin', views.signin),
    path('contacto', views.contacto),
    path('carrito', views.carrito),
    path('tienda', views.tienda),
    path('registro', views.registro),
    path('addProduct', views.addProduct),
    path('recupera-password', views.recupera_password),
    path('producto-1', views.producto_1),
    path('producto-2', views.producto_2),
    path('emp',views.emp),  
    path('show',views.show),
    path('product-detail/<int:id>', views.showDetails), 
    path('edit/<int:id>', views.edit),  
    path('update/<int:id>', views.update),  
    path('delete/<int:id>', views.destroy),  
    path('api/', include(router_products.urls))
]  