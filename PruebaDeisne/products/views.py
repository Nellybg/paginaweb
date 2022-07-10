from math import prod
from django.shortcuts import render, redirect  
from products.forms import ProductsForm  
from products.models import Products  

import logging
import sys
# Create your views here.

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("debug.log"),
        logging.StreamHandler(sys.stdout)
    ]
)

def index(request): 
    return render(request,'index.html')

def signin(request): 
    return render(request,'login.html')

def contacto(request):
    return render(request,'contacto.html')

def carrito(request):
    return render(request,'carrito.html')

def tienda(request):
    productss = Products.objects.all()  
    return render(request,'tienda.html',{'productss':productss})

def registro(request):
    return render(request,'registro.html')

def addProduct(request):
    return render(request,'addProduct.html')    

def recupera_password(request):
    return render(request,'recupera-password.html')       

def producto_1(request):
    return render(request,'producto_1.html')       

def producto_2(request):
    return render(request,'producto_2.html')                        


def emp(request):
    logging.info(request.body)  
    if request.method == "POST":
        logging.info("aca 1") 
        form = ProductsForm(request.POST)
        logging.info(form.is_valid()) 
        if form.is_valid(): 
            try:
                form.save()  
                return redirect('/tienda')  
            except:
                logging.info("error")  
                pass  
    else:  
        form = ProductsForm() 
    return render(request,'index.html',{'form':form})  
def show(request):  
    productss = Products.objects.all()  
    return render(request,"show.html",{'productss':productss})  
def edit(request, id):  
    products = Products.objects.get(id=id)  
    return render(request,'edit.html', {'products':products})  
def update(request, id):  
    products = Products.objects.get(id=id)  
    form = ProductsForm(request.POST, instance = products)  
    if form.is_valid():  
        form.save()  
        return redirect("/show")  
    return render(request, 'edit.html', {'products': products})  
def destroy(request, id):  
    products = Products.objects.get(id=id)  
    products.delete()  
    return redirect("/show")  